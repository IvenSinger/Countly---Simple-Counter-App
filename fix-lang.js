const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

const regexEN = /(chooseSkinDesc: "Select a visual style for Countly",)/g;
app = app.replace(regexEN, `$1
    settingsAppearance: "Glass",
    appearanceStandard: "Balanced",
    chooseAppearance: "Glass Appearance",
    chooseAppearanceDesc: "Select a liquid glass intensity",
    appearanceClearName: "Transparent",
    appearanceClearDesc: "Let the background shine",
    appearanceStandardName: "Balanced",
    appearanceStandardDesc: "The classic Countly look",
    appearanceTintedName: "Frosted",
    appearanceTintedDesc: "More solid and muted",`);

const regexDE = /(chooseSkinDesc: "Wähle einen visuellen Stil für Countly",)/g;
app = app.replace(regexDE, `$1
    settingsAppearance: "Glas",
    appearanceStandard: "Ausgewogen",
    chooseAppearance: "Glas-Erscheinungsbild",
    chooseAppearanceDesc: "Wähle die Intensität des Liquid Glass",
    appearanceClearName: "Transparent",
    appearanceClearDesc: "Lässt den Hintergrund durchscheinen",
    appearanceStandardName: "Ausgewogen",
    appearanceStandardDesc: "Der klassische Countly-Look",
    appearanceTintedName: "Mattiert",
    appearanceTintedDesc: "Fester und gedämpfter",`);

const regexKR = /(chooseSkinDesc: "Countly의 시각적 스타일을 선택하세요",)/g;
app = app.replace(regexKR, `$1
    settingsAppearance: "유리",
    appearanceStandard: "균형 잡힌",
    chooseAppearance: "유리 외관",
    chooseAppearanceDesc: "리퀴드 글래스 강도 선택",
    appearanceClearName: "투명함",
    appearanceClearDesc: "배경이 더 잘 보입니다",
    appearanceStandardName: "균형 잡힌",
    appearanceStandardDesc: "기본 Countly 스타일",
    appearanceTintedName: "불투명한",
    appearanceTintedDesc: "더 단단하고 부드러운",`);

fs.writeFileSync('app.js', app);
console.log("Translations fixed.");
