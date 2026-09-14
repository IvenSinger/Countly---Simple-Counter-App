const fs = require('fs');

// 1. Remove hunt-picker from index.html
let html = fs.readFileSync('index.html', 'utf8');
const huntPickerRegex = /<div class="sport-picker hunt-picker"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
html = html.replace(huntPickerRegex, '');
fs.writeFileSync('index.html', html);

// 2. Remove hunt picker logic from app.js
let js = fs.readFileSync('app.js', 'utf8');

// replace the event listener for gamesHuntBtn
const newBtnHandler = `
if (gamesHuntBtn) {
  gamesHuntBtn.addEventListener("click", () => {
    enterHuntMode();
  });
}
`;
js = js.replace(/if \(gamesHuntBtn\) \{[\s\S]*?\}\n\}/, newBtnHandler);

// remove openHuntPicker / closeHuntPicker definitions
js = js.replace(/function openHuntPicker\(\) \{[\s\S]*?\n/g, '');
js = js.replace(/function closeHuntPicker\(\) \{[\s\S]*?\n/g, '');
js = js.replace(/document\.querySelector\("\#hunt-picker-cancel"\)\?.addEventListener\("click", closeHuntPicker\);\n/, '');
js = js.replace(/document\.querySelector\("\#hunt-picker-backdrop"\)\?.addEventListener\("click", closeHuntPicker\);\n/, '');
js = js.replace(/document\.querySelectorAll\("\.sport-option\[data-hunt-color\]"\)\.forEach.*?\{\n\s*btn\.addEventListener\("click", \(\) => \{\n\s*enterHuntMode\(btn\.dataset\.huntColor\);\n\s*\}\);\n\s*\}\);\n/, '');

fs.writeFileSync('app.js', js);
console.log("Cleanup done");
