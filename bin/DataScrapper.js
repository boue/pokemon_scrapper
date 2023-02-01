import puppeteer from "puppeteer";
import { config } from "dotenv";
import { sets, pokemons, psaLinks } from "../constants/pokemons.js";
import { createUrl, millisToMinutesAndSeconds } from "../utils/utils.js";
import nodeCron from "node-cron";
import ora from "ora";
import fs from "fs";
import chalk from "chalk";
import { MongoClient } from "mongodb";
config();

const TIMEOUT_LIMIT = 60000;

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://pokedev:${MONGO_PASSWORD}@cluster0.qyjzz6s.mongodb.net/?retryWrites=true&w=majority`;
const mongoC = new MongoClient(uri);
let db, jobs;

async function run() {
  try {
    if (!mongoC) return;
    await mongoC.connect();
    console.log("connected to cloud database");
    db = mongoC?.db("jobs");
    jobs = db?.collection("data");

    (async () => {
      const spinner = ora({
        text: "Launching puppeteer",
        color: "blue",
        hideCursor: false,
      }).start();

      spinner.text = "Launching headless browser page";

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(TIMEOUT_LIMIT);
      await page.setDefaultTimeout(TIMEOUT_LIMIT);
      const data = [];

      const start = performance.now();

      try {
        for (const [i, pokemon] of pokemons.entries()) {
          let url = createUrl(sets[0].name, pokemon);
          console.log(url);
          spinner.text = `Scrapping set ${sets[0].name}...`;
          spinner.text = `Featuring: ${pokemon.toUpperCase()}`;
          spinner.text = `url created: ${url}`;
          await page.goto(url, { waitUntil: "networkidle0" });

          await page.waitForXPath(
            '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/table/tbody/tr[1]/td[2]/h3'
          );
          let elHandlePsa10 = await page.$x(
            '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/table/tbody/tr[1]/td[2]/h3/text()[2]'
          );
          let elHandlePsa9 = await page.$x(
            '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/table/tbody/tr[1]/td[3]/h3/text()[2]'
          );
          let elHandleRaw = await page.$x(
            "/html/body/div[1]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div/div[1]/div[2]/div/div/div/table/tbody/tr[2]/td/h3/text()[2]"
          );

          let psa10Value = await page.evaluate(
            (el) => el?.textContent,
            elHandlePsa10[0]
          );
          let psa9Value = await page.evaluate(
            (el) => el?.textContent,
            elHandlePsa9[0]
          );
          let rawValue = await page.evaluate(
            (el) => el?.textContent,
            elHandleRaw[0]
          );

          spinner.text = `Heading to PSA: ${psaLinks[i]}`;
          await page.goto(psaLinks[i], { waitUntil: "domcontentloaded" });

          await page.waitForXPath(
            '//*[@id="tablePricesSummary"]/tbody/tr[1]/td[5]/a'
          );

          let elHandlePsa9Pop = await page.$x(
            '//*[@id="tablePricesSummary"]/tbody/tr[2]/td[5]/a'
          );

          let elHandlePsa10Pop = await page.$x(
            '//*[@id="tablePricesSummary"]/tbody/tr[1]/td[5]/a'
          );

          let popPsa9Value = await page.evaluate(
            (el) => el.textContent,
            elHandlePsa9Pop[0]
          );

          let popPsa10Value = await page.evaluate(
            (el) => el.textContent,
            elHandlePsa10Pop[0]
          );

          console.log("raw value: ", rawValue);

          const pokemonData = {
            name: pokemon,
            psa10: psa10Value,
            psa9: psa9Value,
            pop10: popPsa10Value,
            pop9: popPsa9Value,
            raw: rawValue,
          };

          data.push(pokemonData);
        }
        await browser.close();
      } catch (e) {
        console.log(e.message);
      }

      const end = performance.now();
      const timeTaken = millisToMinutesAndSeconds(end - start);
      fs.writeFileSync("./data/data.json", JSON.stringify(data));
      jobs.insertOne({ data, createdAt: new Date() }).then((result) => {
        console.log("Inserted successfully");
        mongoC.close();
      });

      console.log(
        chalk.yellow.bold(
          "Here are your daily pokemon prices: ",
          JSON.stringify(data)
        ),
        chalk.blue.bold(`Script took: ${timeTaken} minutes`)
      );
    })();
  } catch (e) {
    console.error(e);
    return;
  }
}

await run();
