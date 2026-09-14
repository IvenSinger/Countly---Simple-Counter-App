const fs = require('fs');
const newTranslations = {
  en: { prevBtn: "Back" },
  de: { prevBtn: "Zurück" },
  es: { prevBtn: "Atrás" },
  zh: { prevBtn: "返回" },
  hi: { prevBtn: "पीछे" },
  it: { prevBtn: "Indietro" },
  fr: { prevBtn: "Retour" },
  pt: { prevBtn: "Voltar" },
  tr: { prevBtn: "Geri" },
  ko: { prevBtn: "이전" },
  ja: { prevBtn: "戻る" }
};

let content = fs.readFileSync('app.js', 'utf8');
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
const existingTranslations = eval('(' + objStr + ')');

for (const lang of Object.keys(existingTranslations)) {
  if (newTranslations[lang]) {
    existingTranslations[lang] = { ...existingTranslations[lang], ...newTranslations[lang] };
  }
}

let newObjStr = JSON.stringify(existingTranslations, null, 2);
newObjStr = newObjStr.replace(/"([^"]+)":/g, '$1:');

content = content.substring(0, startIndex + 21) + newObjStr + content.substring(endIndex);
fs.writeFileSync('app.js', content);
console.log("Updated translations with prevBtn");
