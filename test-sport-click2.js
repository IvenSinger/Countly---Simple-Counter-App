const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', error => console.log('PAGE ERROR STACK:', error.stack));

  await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'networkidle0'});
  await browser.close();
})();
