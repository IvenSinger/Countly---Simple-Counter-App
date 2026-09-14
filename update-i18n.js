const fs = require('fs');
const { JSDOM } = require('jsdom');

const i18nMap = {
  'Counters': 'navCounters',
  'Sports': 'navSports',
  'History': 'navHistory',
  'Games': 'navGames',
  'Settings': 'navSettings',
  'Track every score.': 'sportsHeroTitle',
  'Choose a Sport': 'chooseSport',
  'Pick a game to start tracking scores': 'chooseSportDesc',
  'Basketball': 'sportBasketball',
  'Free Throw · Field Goal · 3-Pointer': 'descBasketball',
  'Soccer': 'sportSoccer',
  'Log goals for Home & Away': 'descSoccer',
  'Tennis': 'sportTennis',
  'Love · 15 · 30 · 40 · Deuce · Ad': 'descTennis',
  'Am. Football': 'sportFootball',
  'TDs, FGs, and Safeties': 'descFootball',
  'Formula 1': 'sportF1',
  'Podium finishes and points': 'descF1',
  'Baseball': 'sportBaseball',
  'Runs for Home & Away': 'descBaseball',
  'Ice Hockey': 'sportHockey',
  'Goals on the ice': 'descHockey',
  'Volleyball': 'sportVolleyball',
  'Points and sets': 'descVolleyball',
  'Cancel': 'cancelBtn',
  'Score points using the action buttons. Tap a team name to rename it.': 'sportGuide',
  'End Game': 'endGame',
  'Your counting story.': 'historyHeroTitle',
  'Coming soon': 'comingSoon',
  'History will show your counting activity over time — streaks, totals by day, and personal bests.': 'historyDesc',
  'Mini Games': 'gamesHero',
  'Play and count.': 'gamesHeroTitle',
  'Car Hunt': 'gameCarHunt',
  'Preferences.': 'settingsHeroTitle',
  'Appearance': 'settingsAppearance',
  'Dark Mode': 'settingsDarkMode',
  'Skin': 'settingsSkin',
  'Default': 'skinDefault',
  'Language': 'settingsLanguage',
  'General': 'settingsGeneral',
  'Choose Skin': 'chooseSkin',
  'Select a visual style for Countly': 'chooseSkinDesc',
  'Default (Liquid Glass)': 'skinDefaultName',
  'The stunning modern aesthetic': 'skinDefaultDesc',
  'Classic': 'skinClassic',
  'Clean, flat, and simple': 'skinClassicDesc',
  'Glitched': 'skinGlitched',
  'Chaotic cyberpunk vibes': 'skinGlitchedDesc',
  'Neon': 'skinNeon',
  'Vibrant synthwave colors': 'skinNeonDesc',
  'Ocean': 'skinOcean',
  'Deep sea blues and aquamarine': 'skinOceanDesc',
  'Nature': 'skinNature',
  'Calming greens and organic tones': 'skinNatureDesc',
  'Sunset': 'skinSunset',
  'Vibrant twilight and synthwave vibes': 'skinSunsetDesc',
  'Space': 'skinSpace',
  'Deep cosmos with floating stars': 'skinSpaceDesc',
  'Minimal': 'skinMinimal',
  'Ultra-clean, monochrome focus': 'skinMinimalDesc',
  'Retro': 'skinRetro',
  'Nostalgic 8-bit arcade aesthetic': 'skinRetroDesc',
  'View on GitHub': 'viewOnGithub'
};

let html = fs.readFileSync('index.html', 'utf8');

for (const [text, key] of Object.entries(i18nMap)) {
  // Be careful with replacing, use a regex to only match text content not inside attributes
  // Easiest is to use JSDOM to add the attributes!
}

const dom = new JSDOM(html);
const document = dom.window.document;

function addI18nAttributes(node) {
  if (node.nodeType === 3) {
    const text = node.textContent.trim();
    if (i18nMap[text]) {
      const parent = node.parentNode;
      if (!parent.hasAttribute('data-i18n')) {
        parent.setAttribute('data-i18n', i18nMap[text]);
      }
    }
  } else if (node.nodeType === 1 && !['SCRIPT', 'STYLE'].includes(node.tagName)) {
    for (let child of node.childNodes) {
      addI18nAttributes(child);
    }
  }
}

addI18nAttributes(document.body);
fs.writeFileSync('index.html', dom.serialize());
console.log("Updated index.html with data-i18n attributes");
