import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //Iterate thru objects and make this function
  //split name and go to page
  await page.goto(
    "https://www.pokedata.io/card/Base+Set+1st+Edition/Charizard+Holo+4"
  );

  await page.waitForXPath(
    '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/table/tbody/tr[1]/td[2]/h3/text()[2]'
  );
  let elHandlePsa10 = await page.$x(
    '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/table/tbody/tr[1]/td[2]/h3/text()[2]'
  );
  let elHandlePsa9 = await page.$x(
    '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/table/tbody/tr[1]/td[3]/h3/text()[2]'
  );
  let elHandleRaw = await page.$x(
    '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/table/tbody/tr[2]/td/h3/text()[2]'
  );
  let psa10Value = await page.evaluate(
    (el) => el.textContent,
    elHandlePsa10[0]
  );
  let psa9Value = await page.evaluate((el) => el.textContent, elHandlePsa9[0]);
  let rawValue = await page.evaluate((el) => el.textContent, elHandleRaw[0]);

  // });
  const data = {
    psa10: psa10Value,
    psa9: psa9Value,
    raw: rawValue,
  };

  console.log("Charizard Holo 4: ", data);

  await browser.close();
})();
