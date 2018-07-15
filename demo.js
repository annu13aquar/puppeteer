const puppeteer = require('puppeteer');
const url = process.argv[2];
const filename = process.argv[3];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: filename + '.png'});
  await page.pdf({path: filename + '.pdf', format: 'A4'});
  await browser.close();
})();