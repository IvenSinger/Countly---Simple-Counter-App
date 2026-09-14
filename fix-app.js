const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

// 1. Add appearance definition and initialization if missing
if (!app.includes('let appearance = localStorage.getItem("countlyAppearance")')) {
  const initCode = `
let appearance = localStorage.getItem("countlyAppearance") || "standard";
document.documentElement.classList.add("appearance-" + appearance);
`;
  app = app.replace('let currentSkin', initCode + '\nlet currentSkin');
}

// 2. Update updateSettingsText
const updateSettingsRegex = /document\.querySelector\("#settings-skin-value"\)\.textContent = t\("skin" \+ skin\.charAt\(0\)\.toUpperCase\(\) \+ skin\.slice\(1\) \+ "Name"\);/;
if (app.match(updateSettingsRegex)) {
  const appearanceTextUpdate = `document.querySelector("#settings-skin-value").textContent = t("skin" + skin.charAt(0).toUpperCase() + skin.slice(1) + "Name");
  const appearanceEl = document.querySelector("#settings-appearance-value");
  if (appearanceEl && typeof appearance !== 'undefined') {
    appearanceEl.textContent = t("appearance" + appearance.charAt(0).toUpperCase() + appearance.slice(1) + "Name");
  }`;
  app = app.replace(updateSettingsRegex, appearanceTextUpdate);
}

// 3. Update icon input in render()
const oldInputRegex = /<input class="card-icon-input" type="text" value="\$\{icon\}" maxlength="4" title="Change icon" aria-label="Change icon for \$\{escapeHtml\(counter\.name\)\}" \/>/;
const newInput = `<input class="card-icon-input" type="text" value="\${icon}" maxlength="4" title="Change icon" aria-label="Change icon for \${escapeHtml(counter.name)}" readonly style="cursor:pointer;" />`;
if (app.match(oldInputRegex)) {
  app = app.replace(oldInputRegex, newInput);
}

const oldIconListenerRegex = /\/\/ Icon picker on change\s*card\.querySelector\("\.card-icon-input"\)\.addEventListener\("change", \(event\) => {\s*counter\.icon = event\.target\.value\.trim\(\) \|\| "🎯";\s*save\(\); render\(\);\s*}\);/;
const newIconListener = `// Icon picker on click
    card.querySelector(".card-icon-input").addEventListener("click", () => {
      if(typeof openIconPicker === 'function') openIconPicker(counter.id);
    });`;
if (app.match(oldIconListenerRegex)) {
  app = app.replace(oldIconListenerRegex, newIconListener);
}

// 4. Update translations
const transRegexEN = /chooseSkin: "Choose Skin", chooseSkinDesc: "Select a visual style for Countly",/;
if (app.match(transRegexEN)) {
  const transNewEN = `chooseSkin: "Choose Skin", chooseSkinDesc: "Select a visual style for Countly",
    settingsAppearance: "Glass", appearanceStandard: "Standard",
    chooseAppearance: "Glass Appearance", chooseAppearanceDesc: "Select a liquid glass intensity",
    appearanceClearName: "Transparent", appearanceClearDesc: "Let the background shine",
    appearanceStandardName: "Balanced", appearanceStandardDesc: "The classic Countly look",
    appearanceTintedName: "Frosted", appearanceTintedDesc: "More solid and muted",`;
  app = app.replace(transRegexEN, transNewEN);
}
const transRegexDE = /chooseSkin: "Design wählen", chooseSkinDesc: "Wähle einen visuellen Stil für Countly",/;
if (app.match(transRegexDE)) {
  const transNewDE = `chooseSkin: "Design wählen", chooseSkinDesc: "Wähle einen visuellen Stil für Countly",
    settingsAppearance: "Glas", appearanceStandard: "Standard",
    chooseAppearance: "Glas-Erscheinungsbild", chooseAppearanceDesc: "Wähle die Intensität des Liquid Glass",
    appearanceClearName: "Transparent", appearanceClearDesc: "Lässt den Hintergrund durchscheinen",
    appearanceStandardName: "Ausgewogen", appearanceStandardDesc: "Der klassische Countly-Look",
    appearanceTintedName: "Mattiert", appearanceTintedDesc: "Fester und gedämpfter",`;
  app = app.replace(transRegexDE, transNewDE);
}
const transRegexKR = /chooseSkin: "스킨 선택", chooseSkinDesc: "Countly의 시각적 스타일을 선택하세요",/;
if (app.match(transRegexKR)) {
  const transNewKR = `chooseSkin: "스킨 선택", chooseSkinDesc: "Countly의 시각적 스타일을 선택하세요",
    settingsAppearance: "유리", appearanceStandard: "Standard",
    chooseAppearance: "유리 외관", chooseAppearanceDesc: "리퀴드 글래스 강도 선택",
    appearanceClearName: "투명함", appearanceClearDesc: "배경이 더 잘 보입니다",
    appearanceStandardName: "균형 잡힌", appearanceStandardDesc: "기본 Countly 스타일",
    appearanceTintedName: "불투명한", appearanceTintedDesc: "더 단단하고 부드러운",`;
  app = app.replace(transRegexKR, transNewKR);
}

fs.writeFileSync('app.js', app);
console.log("Fixed app.js logic");
