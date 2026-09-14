const fs = require('fs');

const oldHtml = fs.readFileSync('old_index.html', 'utf8');
const newHtml = fs.readFileSync('index.html', 'utf8');

const skinMatch = oldHtml.match(/<!-- Skin picker modal -->[\s\S]*?<div class="sport-picker skin-picker"[\s\S]*?<\/div>\n    <\/div>/);
const tutorialMatch = oldHtml.match(/<!-- Onboarding Modal -->[\s\S]*?<div class="onboarding-overlay" id="tutorial-overlay"[\s\S]*?<\/div>\n      <\/div>\n    <\/div>/);

let finalHtml = newHtml.replace("<!-- Hunt picker modal -->\n    \n    </div>", `<!-- Hunt picker modal -->\n    \n    </div>\n\n    ${skinMatch[0]}\n\n    ${tutorialMatch[0]}\n`);

fs.writeFileSync('index.html', finalHtml);
console.log("Re-added Skin Picker and Onboarding Modal to index.html");
