const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The block to move
const brainrotBlock = `            <button class="settings-row lang-row" type="button" data-language="en-online">
              <span class="settings-row-icon">💀</span>
              <span class="settings-row-label">Brainrot</span>
              <span class="settings-row-check lang-check" aria-hidden="true"></span>
            </button>\n`;

// Remove the block from its current position
html = html.replace(brainrotBlock, '');

// Find the end of the lang-list (before the closing div of lang-list)
// The last button is for "tr"
const trBlockEnd = `              <span class="settings-row-check lang-check" aria-hidden="true"></span>
            </button>
          </div>`;

html = html.replace(trBlockEnd, `              <span class="settings-row-check lang-check" aria-hidden="true"></span>\n            </button>\n${brainrotBlock}          </div>`);

// Add easter egg to settings footer
const footerHtml = `          <div class="settings-footer">
            <button class="settings-row" id="settings-about-row" type="button">
              <span class="settings-row-icon">ℹ️</span>
              <span class="settings-row-label">About Countly</span>
              <span class="settings-row-chevron" aria-hidden="true">›</span>
            </button>
          </div>`;

const easterEgg = `\n          <p class="easter-egg" style="text-align: center; font-size: 11px; color: var(--muted); margin-top: 32px; opacity: 0.5;" data-i18n="brainrotHint">Hint: Scroll to the bottom of the language menu for a surprise... 💀</p>`;

html = html.replace(footerHtml, footerHtml + easterEgg);

fs.writeFileSync('index.html', html);
console.log("Moved brainrot and added easter egg");
