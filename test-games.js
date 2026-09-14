const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  
  await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'networkidle0'});
  
  // Click Games tab
  await page.evaluate(() => {
    document.querySelector("#nav-games").click();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path: 'games-tab.png'});

  // Click Car Hunt start button
  await page.evaluate(() => {
    document.querySelector("#games-hunt-btn").click();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path: 'games-hunt-active.png'});

  await browser.close();
  console.log("Screenshots captured");
})();
