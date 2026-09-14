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

const englishDict = translations.en;
for (const [lang, dict] of Object.entries(translations)) {
  if (lang === 'en') continue;
  for (const [key, value] of Object.entries(dict)) {
    if (typeof value === 'string' && value === englishDict[key]) {
      console.log(`Language ${lang} has untranslated string for key '${key}': "${value}"`);
    } else if (Array.isArray(value)) {
      // Check if arrays are identical
      const enArr = englishDict[key];
      if (JSON.stringify(value) === JSON.stringify(enArr)) {
        console.log(`Language ${lang} has untranslated array for key '${key}'`);
      }
    }
  }
}
