const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

// 1. Add updateSettingsText function globally
const updateSettingsFunc = `
function updateSettingsText() {
  const skinEl = document.querySelector("#settings-skin-value");
  if (skinEl && typeof currentSkin !== 'undefined') {
    let skinKey = "skin" + currentSkin.charAt(0).toUpperCase() + currentSkin.slice(1) + "Name";
    if (currentSkin === 'default') skinKey = 'skinDefaultName';
    skinEl.textContent = t(skinKey) || currentSkin;
  }
  const appearanceEl = document.querySelector("#settings-appearance-value");
  if (appearanceEl && typeof appearance !== 'undefined') {
    let appearanceKey = "appearance" + appearance.charAt(0).toUpperCase() + appearance.slice(1) + "Name";
    appearanceEl.textContent = t(appearanceKey) || appearance;
  }
}
// Run it once on load
updateSettingsText();

// Hook it into applyLanguage
const origApplyLanguageRegex = /document\.querySelectorAll\\("\\[data-i18n\\]"\\)\\.forEach\\(\\(element\\) => \\{/;
`;

if (!app.includes("function updateSettingsText() {")) {
  app = app + updateSettingsFunc;
}

// 2. Add updateSettingsText call to skin picker
const skinPickerRegex = /localStorage\.setItem\(SKIN_KEY, currentSkin\);\s*applySkin\(\);\s*closeSkinPicker\(\);/;
const newSkinPicker = `localStorage.setItem(SKIN_KEY, currentSkin);
    applySkin();
    if(typeof updateSettingsText === 'function') updateSettingsText();
    closeSkinPicker();`;
app = app.replace(skinPickerRegex, newSkinPicker);

// 3. Add updateSettingsText call into applyLanguage
const applyLangRegex = /document\.querySelectorAll\("\[data-i18n\]"\)\.forEach\(\(element\) => \{/g;
app = app.replace(applyLangRegex, `if(typeof updateSettingsText === 'function') updateSettingsText();
  document.querySelectorAll("[data-i18n]").forEach((element) => {`);

fs.writeFileSync('app.js', app);
console.log("Fixed settings text updating");
