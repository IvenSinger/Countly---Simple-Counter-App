const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  
  await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'networkidle0'});
  
  await page.evaluate(() => {
    // Force tutorial to show
    localStorage.removeItem("countly-tutorial");
    tutorialIndex = 0;
    showTutorialStep();
  });
  
  // Wait for animation
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path: 'onboarding-slide1.png'});

  await page.evaluate(() => {
    document.querySelector("#continue-tutorial").click();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({path: 'onboarding-slide2.png'});

  await browser.close();
  console.log("Screenshots captured");
})();
