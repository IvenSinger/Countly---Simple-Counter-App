const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const newCSS = `

/* ── Glass Appearance Modifiers ───────────────────────────────────────────── */
html.appearance-clear {
  --glass-blur: blur(12px) saturate(140%);
}
html.appearance-clear .card, html.appearance-clear .sport-picker-panel, html.appearance-clear .qc-save-sheet-panel, html.appearance-clear .onboarding-modal {
  background: color-mix(in srgb, var(--glass-bg) 30%, transparent) !important;
}

html.appearance-tinted {
  --glass-blur: blur(80px) saturate(220%);
}
html.appearance-tinted .card, html.appearance-tinted .sport-picker-panel, html.appearance-tinted .qc-save-sheet-panel, html.appearance-tinted .onboarding-modal {
  background: color-mix(in srgb, var(--glass-bg) 70%, var(--ink) 15%) !important;
}

/* ── Icon Grid ───────────────────────────────────────────────────────────── */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}
.icon-btn {
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  background: var(--glass-bg);
  border: .5px solid var(--glass-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
}
.icon-btn:active {
  transform: scale(0.92);
  background: var(--glass-bg-elevated);
}
`;

css = css + newCSS;

fs.writeFileSync('styles.css', css);
console.log("Patched styles.css");
