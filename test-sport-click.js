const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'networkidle0'});
  
  try {
    console.log("Navigating to Sports tab...");
    await page.click(".nav-tab[data-tab='sports']");
    
    console.log("Trying to enter Sport mode (Basketball)...");
    await page.click(".sport-quick-btn[data-sport='basketball']");
    
    console.log("Trying to click a sport action...");
    await page.waitForSelector(".sport-action", {visible: true});
    await page.click(".sport-action");
    console.log("Clicked sport action successfully!");
    
    const countText = await page.$eval(".sport-score", el => el.textContent);
    console.log("Score is now:", countText);
  } catch (e) {
    console.log("Failed:", e.message);
  }

  await browser.close();
})();
