const fs = require('fs');

const hintTranslations = {
  en: { brainrotHint: "Hint: Scroll to the bottom of the language menu for a surprise... 💀" },
  'en-online': { brainrotHint: "Pro tip: Scroll to the bottom of the language menu for some crazy drip... 💀" },
  de: { brainrotHint: "Tipp: Scrolle zum Ende des Sprachmenüs für eine Überraschung... 💀" },
  es: { brainrotHint: "Pista: Desplázate hasta el final del menú de idiomas para una sorpresa... 💀" },
  zh: { brainrotHint: "提示：滚动到语言菜单底部发现惊喜... 💀" },
  hi: { brainrotHint: "संकेत: एक आश्चर्य के लिए भाषा मेनू के नीचे स्क्रॉल करें... 💀" },
  it: { brainrotHint: "Suggerimento: Scorri fino in fondo al menu delle lingue per una sorpresa... 💀" },
  fr: { brainrotHint: "Astuce : Faites défiler jusqu'en bas du menu des langues pour une surprise... 💀" },
  pt: { brainrotHint: "Dica: Role até o final do menu de idiomas para uma surpresa... 💀" },
  tr: { brainrotHint: "İpucu: Sürpriz için dil menüsünün en altına kaydırın... 💀" },
  ko: { brainrotHint: "힌트: 언어 메뉴 하단으로 스크롤하여 깜짝 선물을 확인하세요... 💀" },
  ja: { brainrotHint: "ヒント：言語メニューの一番下までスクロールしてサプライズを見つけてください... 💀" }
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
  if (hintTranslations[lang]) {
    existingTranslations[lang] = { ...existingTranslations[lang], ...hintTranslations[lang] };
  }
}

let newObjStr = JSON.stringify(existingTranslations, null, 2);
newObjStr = newObjStr.replace(/"([^"]+)":/g, '$1:');

content = content.substring(0, startIndex + 21) + newObjStr + content.substring(endIndex);
fs.writeFileSync('app.js', content);
console.log("Added brainrotHint translations!");
