const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

// 1. Add huntScores variable around let sportScores
js = js.replace('let sportScores = [];', 'let sportScores = [];\nlet huntScores = [];');

// 2. Replace createYellowHuntCounters
const newCreate = `
function createHuntCounters() {
  const cars = [
    { name: "Yellow", icon: "🚕", color: "yellow" },
    { name: "Red", icon: "🚗", color: "red" },
    { name: "Blue", icon: "🚙", color: "blue" },
    { name: "Green", icon: "🚐", color: "green" },
    { name: "Pink", icon: "🚘", color: "pink" }
  ];
  return cars.map(car => ({
    id: generateId(),
    name: car.name,
    count: 0,
    icon: car.icon,
    color: car.color,
    createdAt: Date.now()
  }));
}
`;
js = js.replace(/function createYellowHuntCounters\(\) \{[\s\S]*?\}\n/, newCreate);

// 3. Update enterHuntMode / exitHuntMode
const newHuntMode = `
function renderHunt() {
  const gamesGrid = document.querySelector("#games-grid");
  if (!gamesGrid) return;
  gamesGrid.innerHTML = "";
  
  if (!huntScores.length) return;
  
  huntScores.forEach((counter) => {
    const card = document.createElement("article");
    card.className = \`counter-card hunt-card hunt-card-\${counter.color}\`;
    
    card.innerHTML = \`
      <div class="card-top">
        <div class="card-icon-name">
          <span class="card-icon-static">\${counter.icon}</span>
          <span class="counter-name">\${escapeHtml(counter.name)} Car</span>
        </div>
        <button class="sport-undo" type="button" title="Undo" aria-label="Undo">↩</button>
      </div>
      <div class="count-hero">
        <div class="count" id="hunt-count-\${counter.id}">\${counter.count}</div>
      </div>
      <div class="card-actions-row">
        <button class="plus-button increment hunt-increment" type="button" aria-label="Add \${counter.name} car">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6v16M6 14h16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
        </button>
      </div>
    \`;
    
    const incrementBtn = card.querySelector(".increment");
    const countEl = card.querySelector(".count");
    
    incrementBtn.addEventListener("click", () => {
      animateIncrement(incrementBtn, countEl);
      counter.count++;
      saveHuntScores();
      renderHunt();
      showVehicle(counter.color);
    });
    
    card.querySelector(".sport-undo").addEventListener("click", () => {
      if (counter.count > 0) {
        counter.count--;
        saveHuntScores();
        renderHunt();
      }
    });
    
    gamesGrid.appendChild(card);
  });
}

function saveHuntScores() {
  localStorage.setItem(HUNT_COUNTERS_KEY, JSON.stringify(huntScores));
}

function enterHuntMode() {
  if (sportMode) exitSportMode();
  huntMode = true;
  localStorage.setItem(HUNT_KEY, "true");
  
  huntScores = readCounters(HUNT_COUNTERS_KEY) ?? createHuntCounters();
  saveHuntScores();
  
  document.getElementById("games-start").hidden = true;
  document.getElementById("games-active-view").hidden = false;
  
  applyHuntMode();
  renderHunt();
}

function exitHuntMode() {
  huntMode = false;
  localStorage.setItem(HUNT_KEY, "false");
  
  const gamesGrid = document.querySelector("#games-grid");
  if (gamesGrid) gamesGrid.innerHTML = "";
  
  document.getElementById("games-start").hidden = false;
  document.getElementById("games-active-view").hidden = true;
  
  applyHuntMode();
}
`;

js = js.replace(/function enterHuntMode\(color\) \{[\s\S]*?function exitHuntMode\(\) \{[\s\S]*?\}\n/, newHuntMode);

fs.writeFileSync('app.js', js);
console.log('App.js updated');
