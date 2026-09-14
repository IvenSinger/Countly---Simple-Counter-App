const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Insert appearance row
const skinRow = `              <button class="settings-row" id="settings-skin-row" type="button">
                <span class="settings-row-icon">🎨</span>
                <span class="settings-row-label" data-i18n="settingsSkin">Skin</span>
                <span class="settings-row-value" id="settings-skin-value" data-i18n="skinDefault">Default</span>
              </button>`;
const appearanceRow = `              <button class="settings-row" id="settings-appearance-row" type="button">
                <span class="settings-row-icon">🪟</span>
                <span class="settings-row-label" data-i18n="settingsAppearance">Glass</span>
                <span class="settings-row-value" id="settings-appearance-value" data-i18n="appearanceStandard">Standard</span>
              </button>`;
html = html.replace(skinRow, skinRow + '\n' + appearanceRow);

// Insert appearance picker
const skinPickerStart = `    <!-- Skin picker modal -->`;
const appearancePicker = `    <!-- Appearance picker modal -->
    <div class="sport-picker skin-picker" id="appearance-picker" hidden="" role="dialog" aria-modal="true" aria-labelledby="appearance-picker-title">
      <div class="sport-picker-backdrop" id="appearance-picker-backdrop"></div>
      <div class="sport-picker-panel">
        <h2 class="sport-picker-title" id="appearance-picker-title" data-i18n="chooseAppearance">Glass Appearance</h2>
        <p class="sport-picker-sub" data-i18n="chooseAppearanceDesc">Select a liquid glass intensity</p>
        
        <div class="sport-option-list">
          <button class="sport-option" type="button" data-appearance="clear">
            <span class="sport-option-emoji">💧</span>
            <div class="sport-option-info">
              <span class="sport-option-name" data-i18n="appearanceClearName">Clear</span>
              <span class="sport-option-desc" data-i18n="appearanceClearDesc">More see through</span>
            </div>
            <span class="sport-option-chevron" aria-hidden="true">›</span>
          </button>
          
          <button class="sport-option" type="button" data-appearance="standard">
            <span class="sport-option-emoji">🧊</span>
            <div class="sport-option-info">
              <span class="sport-option-name" data-i18n="appearanceStandardName">Standard</span>
              <span class="sport-option-desc" data-i18n="appearanceStandardDesc">Default liquid glass</span>
            </div>
            <span class="sport-option-chevron" aria-hidden="true">›</span>
          </button>
          
          <button class="sport-option" type="button" data-appearance="tinted">
            <span class="sport-option-emoji">🔮</span>
            <div class="sport-option-info">
              <span class="sport-option-name" data-i18n="appearanceTintedName">Tinted</span>
              <span class="sport-option-desc" data-i18n="appearanceTintedDesc">More solid and tinted</span>
            </div>
            <span class="sport-option-chevron" aria-hidden="true">›</span>
          </button>
        </div>
        <button class="sport-picker-cancel" id="appearance-picker-cancel" type="button" data-i18n="cancelBtn">Cancel</button>
      </div>
    </div>\n\n`;
html = html.replace(skinPickerStart, appearancePicker + skinPickerStart);

// Insert icon picker
const goalPickerStart = `    <!-- Goal Picker Modal -->`;
const iconPicker = `    <!-- Icon Picker Modal -->
    <div class="qc-save-sheet" id="icon-picker" style="position: fixed;" hidden="" role="dialog" aria-modal="true">
      <div class="qc-save-sheet-backdrop" id="icon-picker-backdrop"></div>
      <div class="qc-save-sheet-panel">
        <h3 id="icon-picker-title">Choose Icon</h3>
        <div class="icon-grid">
          <button class="icon-btn" type="button">🎯</button>
          <button class="icon-btn" type="button">💧</button>
          <button class="icon-btn" type="button">☕️</button>
          <button class="icon-btn" type="button">📖</button>
          <button class="icon-btn" type="button">🏃</button>
          <button class="icon-btn" type="button">🍎</button>
          <button class="icon-btn" type="button">🍺</button>
          <button class="icon-btn" type="button">💊</button>
          <button class="icon-btn" type="button">📦</button>
          <button class="icon-btn" type="button">💰</button>
        </div>
        <input type="text" id="icon-picker-input" class="qc-input" placeholder="Or type a custom emoji..." autocomplete="off" maxlength="4" style="margin-top: 16px;">
        <div class="qc-save-actions">
          <button class="qc-btn-secondary" id="icon-picker-cancel" type="button" data-i18n="cancelBtn">Cancel</button>
          <button class="qc-btn-primary" id="icon-picker-save" type="button" data-i18n="saveBtn">Save</button>
        </div>
      </div>
    </div>\n\n`;
html = html.replace(goalPickerStart, iconPicker + goalPickerStart);

fs.writeFileSync('index.html', html);
console.log("Patched index.html");
