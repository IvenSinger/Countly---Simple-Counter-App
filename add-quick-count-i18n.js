const fs = require('fs');

const quickCountTranslations = {
  en: { quickCount: "Quick Count", finishBtn: "Finish", saveCounterTitle: "Save Counter", namePlaceholder: "Name this counter...", discardBtn: "Discard", saveBtn: "Save" },
  'en-online': { quickCount: "Speedrun", finishBtn: "Donezo", saveCounterTitle: "Keep the receipts", namePlaceholder: "Name this vibe...", discardBtn: "Trash it", saveBtn: "Lock in" },
  de: { quickCount: "Schnellzähler", finishBtn: "Fertig", saveCounterTitle: "Zähler speichern", namePlaceholder: "Zähler benennen...", discardBtn: "Verwerfen", saveBtn: "Speichern" },
  es: { quickCount: "Conteo Rápido", finishBtn: "Terminar", saveCounterTitle: "Guardar contador", namePlaceholder: "Nombra este contador...", discardBtn: "Descartar", saveBtn: "Guardar" },
  zh: { quickCount: "快速计数", finishBtn: "完成", saveCounterTitle: "保存计数器", namePlaceholder: "命名此计数器...", discardBtn: "放弃", saveBtn: "保存" },
  hi: { quickCount: "त्वरित गिनती", finishBtn: "समाप्त", saveCounterTitle: "काउंटर सहेजें", namePlaceholder: "इस काउंटर को नाम दें...", discardBtn: "खारिज करें", saveBtn: "सहेजें" },
  it: { quickCount: "Conteggio Rapido", finishBtn: "Finito", saveCounterTitle: "Salva Contatore", namePlaceholder: "Dai un nome...", discardBtn: "Scarta", saveBtn: "Salva" },
  fr: { quickCount: "Comptage Rapide", finishBtn: "Terminer", saveCounterTitle: "Enregistrer le compteur", namePlaceholder: "Nommez ce compteur...", discardBtn: "Ignorer", saveBtn: "Enregistrer" },
  pt: { quickCount: "Contagem Rápida", finishBtn: "Terminar", saveCounterTitle: "Salvar Contador", namePlaceholder: "Nomeie este contador...", discardBtn: "Descartar", saveBtn: "Salvar" },
  tr: { quickCount: "Hızlı Sayım", finishBtn: "Bitir", saveCounterTitle: "Sayacı Kaydet", namePlaceholder: "Bu sayaca ad ver...", discardBtn: "Vazgeç", saveBtn: "Kaydet" },
  ko: { quickCount: "빠른 카운트", finishBtn: "완료", saveCounterTitle: "카운터 저장", namePlaceholder: "카운터 이름...", discardBtn: "취소", saveBtn: "저장" },
  ja: { quickCount: "クイックカウント", finishBtn: "完了", saveCounterTitle: "カウンターを保存", namePlaceholder: "カウンター名を入力...", discardBtn: "破棄", saveBtn: "保存" }
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
  if (quickCountTranslations[lang]) {
    existingTranslations[lang] = { ...existingTranslations[lang], ...quickCountTranslations[lang] };
  }
}

let newObjStr = JSON.stringify(existingTranslations, null, 2);
// Restore hyphenated keys (like "en-online") while dropping quotes for valid identifiers
// A more robust regex:
newObjStr = newObjStr.replace(/"([^"-]+)":/g, '$1:');

content = content.substring(0, startIndex + 21) + newObjStr + content.substring(endIndex);
fs.writeFileSync('app.js', content);
console.log("Added Quick Count translations!");
