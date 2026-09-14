const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const startIndex = content.indexOf('const translations = {');
let openBraces = 0, endIndex = -1;
for (let i = startIndex + 21; i < content.length; i++) {
  if (content[i] === '{') openBraces++;
  if (content[i] === '}') {
    openBraces--;
    if (openBraces === 0) { endIndex = i + 1; break; }
  }
}
const objStr = content.substring(startIndex + 21, endIndex);
const translations = eval('(' + objStr + ')');

console.log("Has 'games' key in en:", 'games' in translations.en);
console.log("Has 'sports' key in en:", 'sports' in translations.en);
console.log("Has 'counters' key in en:", 'counters' in translations.en);
console.log("Has 'history' key in en:", 'history' in translations.en);
console.log("Has 'settings' key in en:", 'settings' in translations.en);
