const fs = require('fs');

const htmlContent = fs.readFileSync('index.html', 'utf8');
const jsContent = fs.readFileSync('app.js', 'utf8');

// Parse HTML for data-i18n attributes
const i18nRegex = /data-i18n="([^"]+)"/g;
const htmlKeys = new Set();
let match;
while ((match = i18nRegex.exec(htmlContent)) !== null) {
  htmlKeys.add(match[1]);
}

// Parse translations from JS
const startIndex = jsContent.indexOf('const translations = {');
let openBraces = 0, endIndex = -1;
for (let i = startIndex + 21; i < jsContent.length; i++) {
  if (jsContent[i] === '{') openBraces++;
  if (jsContent[i] === '}') {
    openBraces--;
    if (openBraces === 0) { endIndex = i + 1; break; }
  }
}
const objStr = jsContent.substring(startIndex + 21, endIndex);
const translations = eval('(' + objStr + ')');
const jsKeys = Object.keys(translations.en);

const missingInJs = [...htmlKeys].filter(k => !jsKeys.includes(k));
console.log("Keys in HTML but missing in JS translations:");
console.log(missingInJs);
