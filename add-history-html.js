const fs = require('fs');

// 1. Modify index.html
let html = fs.readFileSync('index.html', 'utf8');
const historyPlaceholder = `        <div class="history-placeholder">
          <div class="history-placeholder-icon">📊</div>
          <p class="history-placeholder-title" data-i18n="comingSoon">Coming soon</p>
          <p class="history-placeholder-copy" data-i18n="historyDesc">History will show your counting activity over time — streaks, totals by day, and personal bests.</p>
        </div>`;

const newHistoryList = `        <div id="history-list-container">
          <!-- Populated by JS -->
        </div>
        <div class="history-placeholder" id="history-empty-state" style="display: none;">
          <div class="history-placeholder-icon">📊</div>
          <p class="history-placeholder-title" data-i18n="noHistoryTitle">No History Yet</p>
          <p class="history-placeholder-copy" data-i18n="noHistoryDesc">Archive counters from your dashboard to see them here.</p>
        </div>`;

html = html.replace(historyPlaceholder, newHistoryList);
fs.writeFileSync('index.html', html);

// 2. Modify styles.css
let css = fs.readFileSync('styles.css', 'utf8');

const historyStyles = `
/* ── History List ──────────────────────────────────────────────────────────── */
#history-list-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.history-date-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.history-date-header {
  font-size: 14px;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 4px;
  margin-bottom: 4px;
}
.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--glass-bg);
  border: .5px solid var(--glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--specular), var(--inner-depth);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  transition: transform 0.2s, background 0.2s;
  cursor: pointer;
}
.history-item:hover {
  transform: translateY(-2px);
  background: var(--glass-bg-elevated);
  box-shadow: var(--specular-strong), 0 8px 24px rgba(0,0,0,0.06);
}
.dark-mode .history-item { border-color: var(--glass-border); }
.history-item-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.history-item-icon {
  font-size: 28px;
  line-height: 1;
}
.history-item-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.history-item-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);
}
.history-item-meta {
  font-size: 12px;
  color: var(--muted);
}
.history-item-count {
  font-size: 24px;
  font-weight: 700;
  color: var(--blue);
  letter-spacing: -0.5px;
}

/* Archive Button */
.archive-button {
  width: 28px;
  height: 28px;
  border: .5px solid transparent;
  border-radius: var(--radius-pill);
  color: var(--blue);
  background: transparent;
  font-size: 14px;
  line-height: 1;
  transition: all .2s;
  flex: 0 0 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.archive-button:hover {
  border-color: rgba(0,122,255,.2);
  background: rgba(0,122,255,.08);
}
.dark-mode .archive-button:hover { background: rgba(10,132,255,.12); }
.card-actions-top {
  display: flex;
  align-items: center;
  gap: 4px;
}
`;

css = css + historyStyles;
fs.writeFileSync('styles.css', css);
console.log("HTML and CSS modified.");
