const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'networkidle0'});
  
  try {
    console.log("Trying to click Settings...");
    await page.click("#nav-settings");
    console.log("Clicked Settings successfully!");
  } catch (e) {
    console.log("Failed to click Settings:", e.message);
  }

  try {
    console.log("Trying to click Sports...");
    await page.click("#nav-sports");
    console.log("Clicked Sports successfully!");
  } catch (e) {
    console.log("Failed to click Sports:", e.message);
  }

  await browser.close();
})();
