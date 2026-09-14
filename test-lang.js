const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'networkidle0'});
  
  // Click Settings tab
  await page.evaluate(() => {
    document.querySelector("#nav-settings").click();
  });
  await new Promise(r => setTimeout(r, 200));

  // Click Language Row
  await page.evaluate(() => {
    document.querySelector("#settings-language-row").click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  await page.screenshot({path: 'language-screen.png'});

  // Click dark mode
  await page.evaluate(() => {
    document.querySelector("#settings-language-screen").hidden = true;
    document.querySelector("#settings-theme-row").click();
    document.querySelector("#settings-language-row").click();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path: 'language-screen-dark.png'});

  await browser.close();
  console.log("Screenshots captured");
})();
