const fs = require('fs');
const brainrotTranslations = {
  language: "Language (no cap)",
  yourCounters: "Your Ws & Ls",
  heroTitle: "Keep track of the vibes.",
  addCounter: "Drop a new counter",
  howToPlay: "How to grind",
  howItWorks: "The lore",
  sportTutorial: "Turn your counters into tryhard scoreboards. Each sport got custom rules and drip.",
  huntTutorial: "The OG road trip game. Pick a color, spot cars, tap for Ws. See who's got the most rizz!",
  skinTutorial: "Level up your aesthetic. Skins change the drip, textures, and vibes of your counters.",
  guideCopy: "Spot a yellow car for <strong>1 W</strong>. Log it and see who's the goat.",
  totalCount: "Total Ws",
  activeCounters: "Active grinds",
  renameHint: "Click a counter's name to change its vibe",
  keepItSimple: "Keep it bussin.",
  viewTutorial: "Run that back",
  quickTour: "VIBE CHECK",
  skipIntro: "Nah, skip",
  continue: "Bet",
  finish: "Donezo",
  tip: "LIFE HACK",
  play: "GRIND",
  car: "Whip",
  tapToAdjust: "Tap to fix",
  untitled: "Nameless af",
  counter: "Tracker",
  resetConfirm: "Nuke all counters to zero? Fr?",
  emptyTitle: "Your space is bare af.",
  emptyCopy: "Drop a counter to start cooking.",
  chooseLanguage: "Pick your slang",
  darkMode: "Dark Mode",
  lightMode: "Light Mode",
  activateHunt: "Turn on Yellow Hunt",
  exitHunt: "Dip out of Yellow Hunt",
  resetAll: "Nuke all counters",
  counterName: "Counter vibe",
  searchCounters: "Search the stash",
  noMatchingCounters: "Ain't finding nothing like that.",
  aboutCountly: "The Tea on Countly",
  aboutDesc: "Cooked up with precision by <strong>Iven Singer</strong>.<br><br>Countly is a cracked counter app. It brings crazy liquid glass drip, sport scoreboards, and mini games.",
  close: "Yeet",
  resetSport: "Nuke %s's score? No cap?",
  remove: "Delete",
  increase: "W",
  decrease: "L",
  carAria: "%s spotted:",
  tutorials: [
    ["Make it yours", "Add as many trackers as you want and name them so you know what's cooking."],
    ["Tap to grind", "Use the plus and minus buttons to change the number. Your grind auto-saves."],
    ["Try Sport Mode", "Tap the 🏆 to pick Basketball, Soccer, or Tennis. Each sport got its own drip and buttons."],
    ["Try Yellow Hunt", "Turn on Yellow Hunt for road trips: yellow whips are 1 point."],
    ["Pick a Skin", "Change up your aesthetic. Skins change the colors, textures, and vibes of the app."],
    ["Choose Language", "Open the globe menu to pick your slang."],
    ["Set the Vibe", "Swap between Light and Dark mode whenever you want."],
    ["Start Fresh", "Use reset when you want to nuke everything back to zero and start a new era."]
  ],
  navCounters: "Trackers",
  navSports: "Tryhard",
  navHistory: "Lore",
  navGames: "Grind",
  navSettings: "Vibes",
  sportsHeroTitle: "Track every W.",
  chooseSport: "Pick your poison",
  chooseSportDesc: "Choose a game to start tracking Ws",
  sportBasketball: "Hoops",
  descBasketball: "Free Throw · Field Goal · 3-Pointer",
  sportSoccer: "Futbol",
  descSoccer: "Log Ws for Home & Away",
  sportTennis: "Tennis",
  descTennis: "Love · 15 · 30 · 40 · Deuce · Ad",
  sportFootball: "Gridiron",
  descFootball: "TDs, FGs, and Safeties",
  sportF1: "Formula 1",
  descF1: "Podiums and points",
  sportBaseball: "Baseball",
  descBaseball: "Runs for Home & Away",
  sportHockey: "Hockey",
  descHockey: "Goals on the ice",
  sportVolleyball: "Volleyball",
  descVolleyball: "Points and sets",
  cancelBtn: "Nah",
  sportGuide: "Tap buttons to score. Tap a team name to change the vibe.",
  endGame: "GG",
  historyHeroTitle: "Your lore.",
  comingSoon: "Cooking soon",
  historyDesc: "Lore will show your grind over time — streaks, daily totals, and personal Ws.",
  gamesHero: "Mini Games",
  gamesHeroTitle: "Play and grind.",
  gameCarHunt: "Whip Hunt",
  settingsHeroTitle: "Your vibes.",
  settingsAppearance: "Drip",
  settingsDarkMode: "Dark Mode",
  settingsSkin: "Aesthetic",
  skinDefault: "Vanilla",
  settingsLanguage: "Slang",
  settingsGeneral: "Basic af",
  chooseSkin: "Pick an Aesthetic",
  chooseSkinDesc: "Choose a vibe for Countly",
  skinDefaultName: "Vanilla (Liquid Glass)",
  skinDefaultDesc: "The clean modern drip",
  skinClassic: "Boomer",
  skinClassicDesc: "Clean, flat, simple af",
  skinGlitched: "Glitched",
  skinGlitchedDesc: "Crazy cyberpunk vibes",
  skinNeon: "Neon",
  skinNeonDesc: "Loud synthwave colors",
  skinOcean: "Ocean",
  skinOceanDesc: "Deep sea drip",
  skinNature: "Grass",
  skinNatureDesc: "Go touch grass",
  skinSunset: "Sunset",
  skinSunsetDesc: "Golden hour vibes",
  skinSpace: "Space",
  skinSpaceDesc: "Floating in the cosmos",
  skinMinimal: "Tryhard Minimal",
  skinMinimalDesc: "Sweaty monochrome focus",
  skinRetro: "Retro",
  skinRetroDesc: "Old school 8-bit aesthetic",
  viewOnGithub: "Check the GitHub",
  prevBtn: "Wait, go back"
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

existingTranslations['en-online'] = brainrotTranslations;

let newObjStr = JSON.stringify(existingTranslations, null, 2);
newObjStr = newObjStr.replace(/"([^"]+)":/g, '$1:');

content = content.substring(0, startIndex + 21) + newObjStr + content.substring(endIndex);
fs.writeFileSync('app.js', content);
console.log("Added brainrot translations!");
