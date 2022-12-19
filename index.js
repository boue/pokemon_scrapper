import puppeteer from "puppeteer";
import { sets, pokemons, psaLinks } from "./constants/pokemons.js";
import { createUrl, millisToMinutesAndSeconds } from "./utils/utils.js";
import nodeCron from "node-cron";
import ora from "ora";
import fs from "fs";
import chalk from "chalk";

async function scrapePokemonData() {
  const spinner = ora({
    text: "Launching puppeteer",
    color: "blue",
    hideCursor: false,
  }).start();

  spinner.text = "Launching headless browser page";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const data = [];

  const start = performance.now();

  try {
    for (const [i, pokemon] of pokemons.entries()) {
      let url = createUrl(sets[0], pokemon);
      console.log(url);
      spinner.text = `Scrapping set ${sets[0]}...`;
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
  } catch (e) {
    console.log(e.message);
  }

  const end = performance.now();
  const timeTaken = millisToMinutesAndSeconds(end - start);
  fs.writeFileSync("./data/data.json", JSON.stringify(data));

  console.log(
    chalk.yellow.bold(
      "Here are your daily pokemon prices: ",
      JSON.stringify(data)
    ),
    chalk.blue.bold(`Script took: ${timeTaken} minutes`)
  );

  await browser.close();
}

await scrapePokemonData();

// const job = nodeCron.schedule("* * * * *", scrapePokemonData);
