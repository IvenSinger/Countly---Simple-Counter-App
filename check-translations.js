const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

const startIndex = content.indexOf('const translations = {');
if (startIndex === -1) {
  console.log("Could not find translations object");
  process.exit(1);
}

// Find the end of the translations object by counting braces
let openBraces = 0;
let endIndex = -1;
for (let i = startIndex + 21; i < content.length; i++) {
  if (content[i] === '{') openBraces++;
  if (content[i] === '}') {
    openBraces--;
    if (openBraces === 0) {
      endIndex = i + 1;
      break;
    }
  }
}

if (endIndex === -1) {
  console.log("Could not find end of translations object");
  process.exit(1);
}

const objStr = content.substring(startIndex + 21, endIndex);

let translations;
try {
  translations = eval('(' + objStr + ')');
} catch (e) {
  console.log("Error parsing translations:", e.message);
  process.exit(1);
}

const baseKeys = Object.keys(translations.en);
console.log(`Base language (en) has ${baseKeys.length} keys.`);

const missing = {};
for (const [lang, dict] of Object.entries(translations)) {
  if (lang === 'en') continue;
  const langKeys = Object.keys(dict);
  const missingKeys = baseKeys.filter(k => !langKeys.includes(k));
  if (missingKeys.length > 0) {
    missing[lang] = missingKeys;
  }
}

if (Object.keys(missing).length > 0) {
  console.log("Missing keys:");
  console.log(JSON.stringify(missing, null, 2));
} else {
  console.log("All languages have full coverage.");
}
