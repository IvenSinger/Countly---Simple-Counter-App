const fs = require('fs');
const oldHtml = fs.readFileSync('old_index.html', 'utf8');
const newHtml = fs.readFileSync('index.html', 'utf8');
const aboutMatch = oldHtml.match(/<!-- About modal -->[\s\S]*?<div class="sport-picker about-modal"[\s\S]*?<\/div>\n    <\/div>/);
let finalHtml = newHtml.replace("<!-- Hunt picker modal -->\n    \n    </div>", `<!-- Hunt picker modal -->\n    \n    </div>\n\n    ${aboutMatch[0]}\n`);
fs.writeFileSync('index.html', finalHtml);
console.log("Re-added About Modal to index.html");
