const fs = require('fs');

let app = fs.readFileSync('app.js', 'utf8');

// 1. Add HISTORY_KEY and history array
const stateInitRegex = /(const STORAGE_KEY = "countly-counters";)/;
const historyInit = `$1\nconst HISTORY_KEY = "countly-history";\nlet history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];\nfunction saveHistory() { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); }\n`;
if (!app.includes('const HISTORY_KEY')) {
  app = app.replace(stateInitRegex, historyInit);
}

// 2. Add archiveCounter function
const renderRegex = /(function render\(\) \{)/;
const archiveFunc = `function archiveCounter(id) {
  const index = counters.findIndex(c => c.id === id);
  if (index !== -1) {
    const counter = counters[index];
    counter.endedAt = Date.now();
    history.unshift(counter);
    counters.splice(index, 1);
    save();
    saveHistory();
    render();
    renderHistory();
    updateStats();
  }
}
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (date.toDateString() === today.toDateString()) return t('today') || "Today";
  if (date.toDateString() === yesterday.toDateString()) return t('yesterday') || "Yesterday";
  return new Intl.DateTimeFormat(currentLanguage, { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}
function renderHistory() {
  const container = document.getElementById("history-list-container");
  const emptyState = document.getElementById("history-empty-state");
  if (!container || !emptyState) return;
  
  if (history.length === 0) {
    container.innerHTML = "";
    emptyState.style.display = "flex";
    return;
  }
  
  emptyState.style.display = "none";
  container.innerHTML = "";
  
  // Group by date
  const groups = {};
  history.forEach(item => {
    const dateStr = formatDate(item.endedAt || item.createdAt);
    if (!groups[dateStr]) groups[dateStr] = [];
    groups[dateStr].push(item);
  });
  
  Object.keys(groups).forEach(dateStr => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "history-date-group";
    
    const header = document.createElement("div");
    header.className = "history-date-header";
    header.textContent = dateStr;
    groupDiv.appendChild(header);
    
    groups[dateStr].forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "history-item";
      
      const timeStr = new Intl.DateTimeFormat(currentLanguage, { hour: 'numeric', minute: '2-digit' }).format(new Date(item.endedAt || item.createdAt));
      
      itemDiv.innerHTML = \`
        <div class="history-item-left">
          <div class="history-item-icon">\${item.icon || "🎯"}</div>
          <div class="history-item-details">
            <div class="history-item-name">\${escapeHtml(item.name)}</div>
            <div class="history-item-meta">\${timeStr} \${item.goal ? '• Goal: ' + item.goal : ''}</div>
          </div>
        </div>
        <div class="history-item-count">\${item.count}</div>
      \`;
      groupDiv.appendChild(itemDiv);
    });
    
    container.appendChild(groupDiv);
  });
}
$1`;
if (!app.includes('function archiveCounter')) {
  app = app.replace(renderRegex, archiveFunc);
}

// 3. Update the innerHTML inside render() to include archive-button
const cardTopRegex = /<button class="delete-button" type="button" title="\$\{t\("remove"\)\}" aria-label="\$\{t\("remove"\)\} \$\{escapeHtml\(counter\.name\)\}">×<\/button>/;
const cardTopReplacement = `<div class="card-actions-top">
          <button class="archive-button" type="button" title="\${t("archive") || "Archive"}" aria-label="Archive \${escapeHtml(counter.name)}">📥</button>
          <button class="delete-button" type="button" title="\${t("remove")}" aria-label="\${t("remove")} \${escapeHtml(counter.name)}">×</button>
        </div>`;
app = app.replace(cardTopRegex, cardTopReplacement);

// 4. Attach event listeners for archive-button inside render()
const deleteListenerRegex = /card\.querySelector\("\.delete-button"\)\.addEventListener\("click", \(\) => \{/;
const archiveListener = `card.querySelector(".archive-button")?.addEventListener("click", () => {
      archiveCounter(counter.id);
    });
    $&`;
if (!app.includes('.archive-button")?.addEventListener')) {
  app = app.replace(deleteListenerRegex, archiveListener);
}

// 5. Initialize renderHistory on page load (in the main initialization block)
const renderCallRegex = /(render\(\);\s*updateStats\(\);)/;
if (!app.includes('renderHistory();\n  render();')) {
  app = app.replace(renderCallRegex, `$1\n  renderHistory();`);
}

fs.writeFileSync('app.js', app);
console.log("app.js patched for history feature");
