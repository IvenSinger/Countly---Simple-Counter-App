const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'networkidle0'});
  
  await page.evaluate(() => {
    try {
      console.log('Navigating to sports...');
      document.querySelector("#nav-sports").click();
      
      console.log('Testing sport quick btn...');
      document.querySelector(".sport-quick-btn[data-sport='basketball']").click();
      
      console.log('Sport mode active:', document.body.classList.contains("sport-mode"));
      console.log('sports-start hidden:', document.querySelector("#sports-start").hidden);
      console.log('sports-tab-actions hidden:', document.querySelector("#sports-tab-actions").hidden);
      console.log('sport-grid children count:', document.querySelector("#sport-grid").children.length);
      console.log('Active tab:', document.body.dataset.tab);
    } catch(e) {
      console.log('Error:', e.stack);
    }
  });

  await browser.close();
})();
