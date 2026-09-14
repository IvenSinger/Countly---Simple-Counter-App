const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

const appearanceStrings = `chooseSkin: "Choose Skin", chooseSkinDesc: "Select a visual style for Countly",
    settingsAppearance: "Glass", appearanceStandard: "Standard",
    chooseAppearance: "Glass Appearance", chooseAppearanceDesc: "Select a liquid glass intensity",
    appearanceClearName: "Clear", appearanceClearDesc: "More see through",
    appearanceStandardName: "Standard", appearanceStandardDesc: "Default liquid glass",
    appearanceTintedName: "Tinted", appearanceTintedDesc: "More solid and tinted",`;

// We already patched EN, now for DE and KR
const deRegex = /chooseSkin: "Design wählen", chooseSkinDesc: "Wähle einen visuellen Stil für Countly",/;
const deStrings = `chooseSkin: "Design wählen", chooseSkinDesc: "Wähle einen visuellen Stil für Countly",
    settingsAppearance: "Glass", appearanceStandard: "Standard",
    chooseAppearance: "Glass Appearance", chooseAppearanceDesc: "Select a liquid glass intensity",
    appearanceClearName: "Clear", appearanceClearDesc: "More see through",
    appearanceStandardName: "Standard", appearanceStandardDesc: "Default liquid glass",
    appearanceTintedName: "Tinted", appearanceTintedDesc: "More solid and tinted",`;
app = app.replace(deRegex, deStrings);

const krRegex = /chooseSkin: "스킨 선택", chooseSkinDesc: "Countly의 시각적 스타일을 선택하세요",/;
const krStrings = `chooseSkin: "스킨 선택", chooseSkinDesc: "Countly의 시각적 스타일을 선택하세요",
    settingsAppearance: "Glass", appearanceStandard: "Standard",
    chooseAppearance: "Glass Appearance", chooseAppearanceDesc: "Select a liquid glass intensity",
    appearanceClearName: "Clear", appearanceClearDesc: "More see through",
    appearanceStandardName: "Standard", appearanceStandardDesc: "Default liquid glass",
    appearanceTintedName: "Tinted", appearanceTintedDesc: "More solid and tinted",`;
app = app.replace(krRegex, krStrings);

fs.writeFileSync('app.js', app);
console.log("Patched other languages");
