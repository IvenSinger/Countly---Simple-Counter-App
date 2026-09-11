const STORAGE_KEY = "countly-counters";
const HUNT_COUNTERS_KEY = "countly-yellow-hunt-counters";
const THEME_KEY = "countly-theme";
const HUNT_KEY = "countly-yellow-hunt";
const TUTORIAL_KEY = "countly-tutorial-seen";
const LANGUAGE_KEY = "countly-language";
const SPORT_KEY = "countly-sport-mode";
const SPORT_TYPE_KEY = "countly-sport-type";
const SPORT_SCORES_KEY = "countly-sport-scores";
const translations = {
  en: {
    language: "Language", yourCounters: "Your counters", heroTitle: "Keep track of what matters.", addCounter: "Add new counter", howToPlay: "How to play",
    guideCopy: "Spot a yellow car for <strong>1 point</strong>. Log each find and see who can spot the most.",
    totalCount: "Total count", activeCounters: "Active counters", renameHint: "Click a counter’s name to rename it", keepItSimple: "Keep it simple.", viewTutorial: "View tutorial again", quickTour: "QUICK TOUR", skipIntro: "Skip Tutorial", continue: "Continue", finish: "Finish",
    tip: "TIP", play: "PLAY", car: "Car", tapToAdjust: "Tap to adjust", untitled: "Untitled counter", counter: "Counter", resetConfirm: "Reset all counters to zero?", emptyTitle: "Your counter space is ready.", emptyCopy: "Add a counter to get started.",
    chooseLanguage: "Choose language", darkMode: "Switch to dark mode", lightMode: "Switch to light mode", activateHunt: "Activate Yellow Hunt mode", exitHunt: "Exit Yellow Hunt mode", resetAll: "Reset all counters", counterName: "Counter name", searchCounters: "Search counters", noMatchingCounters: "No counters match your search.", remove: "Remove", increase: "Increase", decrease: "Decrease", carAria: "Log a yellow car for",
    tutorials: [
      ["Make it yours", "Add as many counters as you need, then give each one a name so everything stays easy to find."],
      ["Count in a tap", "Use the plus and minus controls on any card to keep your numbers moving. Your progress is saved automatically."],
      ["Try Sport Mode", "Tap the 🏆 trophy button to pick a sport — Basketball, Soccer, or Tennis. Each sport has its own scoring buttons and colour theme. Your scores are saved per sport."],
      ["Try Yellow Hunt", "Switch on Yellow Hunt for the road game: log yellow cars for 1 point."],
      ["Choose your language", "Open the globe menu to choose English, German, Spanish, Mandarin Chinese, or Hindi."],
      ["Set the mood", "Toggle between light and dark mode whenever you like. Countly remembers your preference."],
      ["Start fresh", "Use reset whenever you want to bring every counter back to zero and begin a new round."]
    ]
  },
  de: {
    language: "Sprache", yourCounters: "Deine Zähler", heroTitle: "Behalte im Blick, was zählt.", addCounter: "Neuen Zähler hinzufügen", howToPlay: "So wird gespielt", guideCopy: "Entdecke ein gelbes Auto für <strong>1 Punkt</strong>. Erfasse jeden Fund und finde die meisten.", totalCount: "Gesamtzahl", activeCounters: "Aktive Zähler", renameHint: "Klicke auf den Namen eines Zählers, um ihn umzubenennen", keepItSimple: "Einfach halten.", viewTutorial: "Tutorial erneut ansehen", quickTour: "KURZTOUR", skipIntro: "Intro überspringen", continue: "Weiter", finish: "Fertig", tip: "TIPP", play: "SPIEL", car: "Auto", tapToAdjust: "Antippen zum Ändern", untitled: "Unbenannter Zähler", counter: "Zähler", resetConfirm: "Alle Zähler auf null zurücksetzen?", emptyTitle: "Dein Zählerbereich ist bereit.", emptyCopy: "Füge einen Zähler hinzu.", chooseLanguage: "Sprache auswählen", darkMode: "Dunkelmodus aktivieren", lightMode: "Hellmodus aktivieren", activateHunt: "Yellow Hunt aktivieren", exitHunt: "Yellow Hunt beenden", resetAll: "Alle Zähler zurücksetzen", counterName: "Name des Zählers", remove: "Zähler entfernen", increase: "Erhöhen", decrease: "Verringern", carAria: "Gelbes Auto für", tutorials: [["Mach es zu deinem", "Füge beliebig viele Zähler hinzu und gib ihnen Namen, damit alles leicht zu finden bleibt."], ["Mit einem Tipp zählen", "Nutze Plus und Minus auf jeder Karte. Dein Fortschritt wird automatisch gespeichert."], ["Sport-Modus ausprobieren", "Tippe auf das 🏆 Pokal-Symbol und wähle eine Sportart – Basketball, Fußball oder Tennis. Jede hat eigene Punkte-Buttons und Farben."], ["Yellow Hunt ausprobieren", "Aktiviere Yellow Hunt: Gelbe Autos zählen 1 Punkt."], ["Sprache auswählen", "Öffne das Globusmenü und wähle deine Sprache."], ["Stimmung festlegen", "Wechsle jederzeit zwischen hellem und dunklem Modus."], ["Neu beginnen", "Setze alle Zähler zurück, um eine neue Runde zu starten."]]
  },
  es: {
    language: "Idioma", yourCounters: "Tus contadores", heroTitle: "Lleva el control de lo que importa.", addCounter: "Añadir nuevo contador", howToPlay: "Cómo jugar", guideCopy: "Encuentra un coche amarillo por <strong>1 punto</strong>. Registra cada hallazgo y descubre quién encuentra más.", totalCount: "Cuenta total", activeCounters: "Contadores activos", renameHint: "Haz clic en el nombre para cambiarlo", keepItSimple: "Mantenlo simple.", viewTutorial: "Ver tutorial de nuevo", quickTour: "GUÍA RÁPIDA", skipIntro: "Omitir introducción", continue: "Continuar", finish: "Terminar", tip: "CONSEJO", play: "JUEGO", car: "Coche", tapToAdjust: "Toca para ajustar", untitled: "Contador sin título", counter: "Contador", resetConfirm: "¿Restablecer todos los contadores a cero?", emptyTitle: "Tu espacio de contadores está listo.", emptyCopy: "Añade un contador para empezar.", chooseLanguage: "Elegir idioma", darkMode: "Cambiar a modo oscuro", lightMode: "Cambiar a modo claro", activateHunt: "Activar Yellow Hunt", exitHunt: "Salir de Yellow Hunt", resetAll: "Restablecer contadores", counterName: "Nombre del contador", remove: "Eliminar contador", increase: "Aumentar", decrease: "Disminuir", carAria: "Coche amarillo para", tutorials: [["Hazlo tuyo", "Añade los contadores que necesites y ponles nombre para encontrar todo fácilmente."], ["Cuenta con un toque", "Usa los controles más y menos. Tu progreso se guarda automáticamente."], ["Prueba el modo Sport", "Toca el trofeo 🏆 para elegir un deporte: Baloncesto, Fútbol o Tenis. Cada uno tiene sus propios botones de puntuación y colores."], ["Prueba Yellow Hunt", "Activa Yellow Hunt: los coches amarillos valen 1 punto."], ["Elige tu idioma", "Abre el menú del globo para elegir idioma."], ["Cambia el ambiente", "Alterna entre el modo claro y oscuro cuando quieras."], ["Empieza de cero", "Restablece los contadores para comenzar una ronda nueva."]]
  },
  zh: {
    language: "语言", yourCounters: "你的计数器", heroTitle: "记录重要的事情。", addCounter: "添加新计数器", howToPlay: "玩法", guideCopy: "发现黄色汽车得<strong>1分</strong>。记录每次发现，看看谁发现得最多。", totalCount: "总计数", activeCounters: "活动计数器", renameHint: "点击计数器名称即可重命名", keepItSimple: "保持简单。", viewTutorial: "再次查看教程", quickTour: "快速导览", skipIntro: "跳过介绍", continue: "继续", finish: "完成", tip: "提示", play: "游戏", car: "汽车", tapToAdjust: "点击调整", untitled: "未命名计数器", counter: "计数器", resetConfirm: "将所有计数器重置为零？", emptyTitle: "计数器空间已准备好。", emptyCopy: "添加一个计数器开始吧。", chooseLanguage: "选择语言", darkMode: "切换到深色模式", lightMode: "切换到浅色模式", activateHunt: "开启 Yellow Hunt", exitHunt: "退出 Yellow Hunt", resetAll: "重置所有计数器", counterName: "计数器名称", remove: "删除计数器", increase: "增加", decrease: "减少", carAria: "记录黄色汽车，计数器为", tutorials: [["打造专属计数器", "添加需要的计数器并命名，让一切都易于查找。"], ["轻触即可计数", "使用加减按钮更新数字，进度会自动保存。"], ["试试运动模式", "点击 🏆 奖杯按钮选择运动项目——篮球、足球或网球。每项运动有专属得分按钮和配色。"], ["试试 Yellow Hunt", "开启 Yellow Hunt：黄色汽车得1分。"], ["选择语言", "打开地球图标菜单选择语言。"], ["调整氛围", "随时切换浅色和深色模式。"], ["重新开始", "重置所有计数器，开始新一轮。"]]
  },
  hi: {
    language: "भाषा", yourCounters: "आपके काउंटर", heroTitle: "जो ज़रूरी है उसका हिसाब रखें।", addCounter: "नया काउंटर जोड़ें", howToPlay: "कैसे खेलें", guideCopy: "पीली कार के लिए <strong>1 अंक</strong> पाएं। हर खोज दर्ज करें और देखें किसने सबसे ज़्यादा पाया।", totalCount: "कुल गिनती", activeCounters: "सक्रिय काउंटर", renameHint: "नाम बदलने के लिए काउंटर के नाम पर क्लिक करें", keepItSimple: "सरल रखें।", viewTutorial: "ट्यूटोरियल फिर देखें", quickTour: "त्वरित परिचय", skipIntro: "परिचय छोड़ें", continue: "जारी रखें", finish: "समाप्त", tip: "सुझाव", play: "खेल", car: "कार", tapToAdjust: "बदलने के लिए टैप करें", untitled: "बिना नाम का काउंटर", counter: "काउंटर", resetConfirm: "सभी काउंटर शून्य पर रीसेट करें?", emptyTitle: "आपका काउंटर स्थान तैयार है।", emptyCopy: "शुरू करने के लिए काउंटर जोड़ें।", chooseLanguage: "भाषा चुनें", darkMode: "डार्क मोड पर जाएं", lightMode: "लाइट मोड पर जाएं", activateHunt: "Yellow Hunt शुरू करें", exitHunt: "Yellow Hunt से बाहर निकलें", resetAll: "सभी काउंटर रीसेट करें", counterName: "काउंटर का नाम", remove: "काउंटर हटाएं", increase: "बढ़ाएं", decrease: "घटाएं", carAria: "पीली कार दर्ज करें, काउंटर", tutorials: [["इसे अपना बनाएं", "जितने काउंटर चाहिए जोड़ें और उन्हें नाम दें ताकि सब आसानी से मिल सके।"], ["एक टैप में गिनें", "प्लस और माइनस बटन का उपयोग करें। प्रगति अपने आप सेव होती है।"], ["स्पोर्ट मोड आज़माएं", "🏆 ट्रॉफी बटन टैप करें और खेल चुनें — बास्केटबॉल, सॉकर या टेनिस। हर खेल के अपने स्कोरिंग बटन और रंग हैं।"], ["Yellow Hunt आज़माएं", "Yellow Hunt चालू करें: पीली कार 1 अंक देती है।"], ["भाषा चुनें", "भाषा चुनने के लिए ग्लोब मेनू खोलें।"], ["मूड सेट करें", "जब चाहें लाइट और डार्क मोड बदलें।"], ["फिर से शुरू करें", "नई शुरुआत के लिए सभी काउंटर रीसेट करें।"]]
  }
};
let currentLanguage = "en";
function t(key) { return translations[currentLanguage][key] || translations.en[key] || key; }

// ── Sport configs ──────────────────────────────────────────────────────────────
function formatTennisScore(mine, theirs) {
  const labels = ["Love", "15", "30", "40"];
  // Win without deuce: 4+ points and 2+ ahead while opponent hasn't reached 3
  if (mine >= 4 && mine - theirs >= 2) return "Game";
  // Deuce territory: both players at 3+ points
  if (mine >= 3 && theirs >= 3) {
    const diff = mine - theirs;
    if (diff >= 2) return "Game";
    if (diff === 1) return "Ad";
    if (diff === 0) return "Deuce";
    return "40"; // opponent has the advantage, trailing player stays at 40
  }
  return labels[Math.min(mine, 3)] ?? "Love";
}

const SPORT_CONFIGS = {
  basketball: {
    emoji: "🏀", name: "Basketball", defaultTeams: ["Home", "Away"], scoreUnit: "pts",
    actions: [
      { label: "Free Throw", short: "FT",  points: 1 },
      { label: "Field Goal", short: "2PT", points: 2 },
      { label: "3-Pointer",  short: "3PT", points: 3 },
    ],
    formatScore: (score)        => String(score),
  },
  soccer: {
    emoji: "⚽", name: "Soccer", defaultTeams: ["Home", "Away"], scoreUnit: "goals",
    actions: [
      { label: "Goal", short: "GOAL", points: 1 },
    ],
    formatScore: (score)        => String(score),
  },
  tennis: {
    emoji: "🎾", name: "Tennis", defaultTeams: ["Player 1", "Player 2"], scoreUnit: "",
    actions: [
      { label: "Point", short: "PT", points: 1 },
    ],
    formatScore: (score, opp = 0) => formatTennisScore(score, opp),
  },
};
const starterCounters = [
  { id: crypto.randomUUID(), name: "Water glasses", count: 4 },
  { id: crypto.randomUUID(), name: "Daily steps", count: 1250 },
  { id: crypto.randomUUID(), name: "Books read", count: 2 },
];
const starterCounterNames = {
  en: ["Water glasses", "Daily steps", "Books read"],
  de: ["Wassergläser", "Tägliche Schritte", "Gelesene Bücher"],
  es: ["Vasos de agua", "Pasos diarios", "Libros leídos"],
  zh: ["水杯", "每日步数", "已读书籍"],
  hi: ["पानी के गिलास", "दैनिक कदम", "पढ़ी गई किताबें"],
};
const starterNameIndexes = new Map(
  Object.values(starterCounterNames).flatMap((names) => names.map((name, index) => [name, index]))
);

function localizeStarterCounters(language) {
  const names = starterCounterNames[language] || starterCounterNames.en;
  let changed = false;
  counters.forEach((counter) => {
    // Starter counters can have any current count, so identify them by their
    // built-in name rather than by the initial count value.
    const starterIndex = starterNameIndexes.get(counter.name);
    if (starterIndex !== undefined && counter.name !== names[starterIndex]) {
      counter.name = names[starterIndex];
      changed = true;
    }
  });
  if (changed) save();
}

function createYellowHuntCounters() {
  return [1, 2, 3].map((player) => ({
    id: crypto.randomUUID(),
    name: `Player ${player}`,
    count: Math.floor(Math.random() * 10) + 1,
  }));
}

function readCounters(key) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? null : JSON.parse(stored);
  } catch {
    return null;
  }
}

function isYellowHuntCounters(value) {
  return Array.isArray(value) && value.length > 0 && value.every((counter) => /^Player [1-3]$/.test(counter.name));
}

const legacyCounters = readCounters(STORAGE_KEY);
const savedHuntCounters = readCounters(HUNT_COUNTERS_KEY);
let huntMode = localStorage.getItem(HUNT_KEY) === "true";
let counters = huntMode
  ? savedHuntCounters ?? (isYellowHuntCounters(legacyCounters) ? legacyCounters : createYellowHuntCounters())
  : (isYellowHuntCounters(legacyCounters) ? starterCounters : legacyCounters ?? starterCounters);

const grid = document.querySelector("#counter-grid");
const total = document.querySelector("#total-count");
const active = document.querySelector("#counter-count");
const counterSearch = document.querySelector("#counter-search-input");
const themeToggle = document.querySelector("#theme-toggle");
const huntToggle = document.querySelector("#hunt-toggle");
const vehicleLayer = document.querySelector("#vehicle-layer");
const eyebrow = document.querySelector("#eyebrow");
const heroTitle = document.querySelector("#hero-title");
const appHint = document.querySelector("#app-hint");
const huntGuide = document.querySelector("#hunt-guide");
const tutorialOverlay = document.querySelector("#tutorial-overlay");
const tutorialSpotlight = document.querySelector("#tutorial-spotlight");
const tutorialArrow = document.querySelector("#tutorial-arrow");
const tutorialCard = document.querySelector("#tutorial-card");
const tutorialStep = document.querySelector("#tutorial-step");
const tutorialTitle = document.querySelector("#tutorial-title");
const tutorialCopy = document.querySelector("#tutorial-copy");
const continueTutorial = document.querySelector("#continue-tutorial");
const languageToggle = document.querySelector("#language-toggle");
const languageMenu = document.querySelector("#language-menu");
const languageChoices = [...document.querySelectorAll("[data-language]")];
const redoTutorial = document.querySelector("#redo-tutorial");
let tutorialIndex = 0;
let searchQuery = "";
let sportMode = false;
let sportType = "basketball";
let sportScores = null;
const tutorialTargets = ["#add-counter", ".counter-card .increment", "#sport-toggle", "#hunt-toggle", "#language-toggle", "#theme-toggle", "#reset-all"];
function tutorialSteps() { return tutorialTargets.map((target, index) => ({ target, title: t("tutorials")[index][0], copy: t("tutorials")[index][1] })); }
function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark-mode", dark);
  themeToggle.title = dark ? t("lightMode") : t("darkMode");
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}

function applyLanguage(language) {
  const selected = languageChoices.some((choice) => choice.dataset.language === language) ? language : "en";
  currentLanguage = selected;
  document.documentElement.lang = selected;
  localizeStarterCounters(selected);
  languageChoices.forEach((choice) => { choice.querySelector("span").textContent = choice.dataset.language === selected ? "✓" : ""; });
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n);
    if (element.dataset.i18n === "guideCopy") element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  languageToggle.title = t("chooseLanguage");
  languageToggle.setAttribute("aria-label", t("chooseLanguage"));
  themeToggle.title = document.body.classList.contains("dark-mode") ? t("lightMode") : t("darkMode");
  themeToggle.setAttribute("aria-label", themeToggle.title);
  document.querySelector("#reset-all").title = t("resetAll");
  document.querySelector("#reset-all").setAttribute("aria-label", t("resetAll"));
  applyHuntMode();
  huntGuide.setAttribute("aria-label", `${t("howToPlay")} Yellow Hunt`);
  if (tutorialOverlay && !tutorialOverlay.hidden) showTutorialStep();
  render();
  localStorage.setItem(LANGUAGE_KEY, selected);
}

function toggleLanguageMenu(force) {
  const shouldOpen = typeof force === "boolean" ? force : languageMenu.hidden;
  languageMenu.hidden = !shouldOpen;
  languageToggle.setAttribute("aria-expanded", String(shouldOpen));
  if (shouldOpen) positionLanguageMenu();
}

function positionLanguageMenu() {
  const buttonRect = languageToggle.getBoundingClientRect();
  const width = 190;
  languageMenu.style.left = `${Math.max(8, Math.min(window.innerWidth - width - 8, buttonRect.right - width + 8))}px`;
  languageMenu.style.top = `${buttonRect.bottom + 10}px`;
}

function applyHuntMode() {
  document.body.classList.toggle("yellow-hunt", huntMode);
  huntGuide.hidden = !huntMode;
  huntToggle.classList.toggle("is-active", huntMode);
  huntToggle.title = huntMode ? t("exitHunt") : t("activateHunt");
  huntToggle.setAttribute("aria-label", huntToggle.title);
  eyebrow.textContent = huntMode ? "Yellow Hunt" : t("yourCounters");
  heroTitle.textContent = huntMode ? "Spot it. Count it. Win it." : t("heroTitle");
  appHint.innerHTML = huntMode
    ? `<span class="hint-key">${t("play")}</span> ${currentLanguage === "de" ? "Erfasse ein gelbes Auto, wenn du eines siehst" : currentLanguage === "es" ? "Registra un coche amarillo cuando lo veas" : currentLanguage === "zh" ? "发现黄色汽车时记录" : currentLanguage === "hi" ? "पीली कार दिखे तो दर्ज करें" : "Log a yellow car when you spot one"}`
    : `<span class="hint-key">${t("tip")}</span> <span data-i18n="renameHint">${t("renameHint")}</span>`;
}

function save() {
  localStorage.setItem(huntMode ? HUNT_COUNTERS_KEY : STORAGE_KEY, JSON.stringify(counters));
}
function formatCount(value) { return new Intl.NumberFormat(currentLanguage).format(value); }

// ── Sport mode functions ──────────────────────────────────────────────────────
const summaryLabelTotal  = document.querySelector("#total-count + .summary-label");
const summaryLabelActive = document.querySelector("#counter-count + .summary-label");

function createSportScores(type) {
  return SPORT_CONFIGS[type].defaultTeams.map(name => ({ id: crypto.randomUUID(), name, score: 0 }));
}
function saveSportScores() {
  localStorage.setItem(`${SPORT_SCORES_KEY}-${sportType}`, JSON.stringify(sportScores));
}
function loadSportScores(type) {
  try {
    const saved = JSON.parse(localStorage.getItem(`${SPORT_SCORES_KEY}-${type}`));
    if (saved && Array.isArray(saved) && saved.length === 2) return saved;
  } catch {}
  return null;
}
function switchSport(type) {
  if (type === sportType) return;
  saveSportScores();                        // persist current sport before leaving
  sportType   = type;
  sportScores = loadSportScores(type) || createSportScores(type);
  localStorage.setItem(SPORT_TYPE_KEY, type);
  saveSportScores();
  applySportMode();
  renderSport();
}
function updateSportScore(id, amount) {
  const team = sportScores.find(t => t.id === id);
  if (team) { team.score = Math.max(0, team.score + amount); saveSportScores(); renderSport(); }
}

function renderSport() {
  if (document.body.classList.contains("app-ready")) document.body.classList.add("counter-rendered");
  grid.innerHTML = "";
  if (!sportScores || sportScores.length < 2) return;
  const config   = SPORT_CONFIGS[sportType];
  const [t0, t1] = sportScores;

  // Determine game-over state before rendering cards
  const score0Display = config.formatScore(t0.score, t1.score);
  const score1Display = config.formatScore(t1.score, t0.score);
  const gameOver = score0Display === "Game" || score1Display === "Game";

  sportScores.forEach((team, idx) => {
    const opponent     = sportScores[1 - idx];
    const displayScore = config.formatScore(team.score, opponent.score);
    const isWon        = displayScore === "Game";

    const card = document.createElement("article");
    card.className = "counter-card sport-card";

    const actionsHtml = config.actions.map(action => `
      <button class="sport-action" type="button"
        data-id="${team.id}" data-points="${action.points}"
        ${gameOver ? "disabled" : ""}
        aria-label="${action.label} +${action.points} for ${escapeHtml(team.name)}">
        <span class="sport-action-short">${action.short}</span>
        <span class="sport-action-pts">+${action.points}</span>
      </button>`).join("");

    // Raw numeric score shown below formatted display (basketball/soccer only)
    const rawHtml = config.scoreUnit
      ? `<div class="sport-score-raw">${team.score} ${config.scoreUnit}</div>`
      : "";

    // Tennis: also show raw point count in small muted text
    const tennisRaw = sportType === "tennis" && !isWon
      ? `<div class="sport-score-raw">${team.score} pt${team.score !== 1 ? "s" : ""}</div>`
      : "";

    card.innerHTML = `
      <div class="card-top">
        <input class="counter-name sport-team-name" value="${escapeHtml(team.name)}" aria-label="Team name" maxlength="24" />
        <button class="sport-undo" type="button"
          title="Undo last point for ${escapeHtml(team.name)}"
          aria-label="Undo last point for ${escapeHtml(team.name)}">↩</button>
      </div>
      <div class="sport-score-wrap${isWon ? " sport-score-won" : ""}">
        <div class="sport-score">${displayScore}</div>
        ${sportType === "tennis" ? tennisRaw : rawHtml}
      </div>
      ${isWon ? `<div class="sport-won-badge">🏆 Game!</div>` : ""}
      <div class="sport-actions">${actionsHtml}</div>
    `;

    card.querySelectorAll(".sport-action").forEach(btn => {
      btn.addEventListener("click", () => { if (!btn.disabled) updateSportScore(team.id, parseInt(btn.dataset.points)); });
    });
    card.querySelector(".sport-undo").addEventListener("click", () => updateSportScore(team.id, -1));
    card.querySelector(".sport-team-name").addEventListener("change", e => {
      team.name = e.target.value.trim() || config.defaultTeams[idx];
      saveSportScores(); renderSport();
    });
    grid.appendChild(card);
  });

  // Update scoreboard in summary bar
  if (sportType === "tennis") {
    total.textContent  = config.formatScore(t0.score, t1.score);
    active.textContent = config.formatScore(t1.score, t0.score);
  } else {
    total.textContent  = t0.score;
    active.textContent = t1.score;
  }
  summaryLabelTotal.textContent  = t0.name;
  summaryLabelActive.textContent = t1.name;
}

function applySportMode() {
  ["sport-basketball", "sport-soccer", "sport-tennis"].forEach(c => document.body.classList.remove(c));
  document.body.classList.toggle("sport-mode", sportMode);

  const sportGuide  = document.querySelector("#sport-guide");
  const sportToggle = document.querySelector("#sport-toggle");
  sportGuide.hidden = !sportMode;
  sportToggle.classList.toggle("is-active", sportMode);
  sportToggle.title = sportMode ? "Exit Sport mode" : "Activate Sport mode";
  sportToggle.setAttribute("aria-label", sportToggle.title);

  if (sportMode) {
    document.body.classList.add(`sport-${sportType}`);
    const config = SPORT_CONFIGS[sportType];
    document.querySelector("#sport-guide-icon").textContent  = config.emoji;
    document.querySelector("#sport-guide-title").textContent = config.name;
    const actionDesc = config.actions.map(a => `${a.label} +${a.points}`).join(" · ");
    document.querySelector("#sport-guide-copy").textContent  = `${actionDesc}. Tap a team name to rename it.`;
    eyebrow.textContent   = `${config.emoji}  ${config.name}`;
    heroTitle.textContent = "Track every point, every play.";
    appHint.innerHTML     = `<span class="hint-key">SPORT</span> Use the action buttons to log scores for each team`;
    // Highlight the active sport in the switcher pills
    document.querySelectorAll(".sport-switch-btn").forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.switchSport === sportType);
    });
  }
}

function openSportPicker()  { document.querySelector("#sport-picker").hidden = false; }
function closeSportPicker() { document.querySelector("#sport-picker").hidden = true;  }

function enterSportMode(type) {
  // Mutually exclusive with Yellow Hunt
  if (huntMode) {
    huntMode = false;
    counters = readCounters(STORAGE_KEY);
    if (!counters || isYellowHuntCounters(counters)) counters = starterCounters;
    localStorage.setItem(HUNT_KEY, "false");
    document.body.classList.remove("yellow-hunt");
    huntToggle.classList.remove("is-active");
    huntGuide.hidden = true;
  }
  sportMode   = true;
  sportType   = type;
  sportScores = loadSportScores(type) || createSportScores(type);
  localStorage.setItem(SPORT_KEY, "true");
  localStorage.setItem(SPORT_TYPE_KEY, type);
  saveSportScores();
  closeSportPicker();
  applySportMode();
  renderSport();
}

function exitSportMode() {
  sportMode = false;
  localStorage.setItem(SPORT_KEY, "false");
  applySportMode();
  applyHuntMode();
  applyLanguage(currentLanguage); // restores i18n labels including summary labels
}

function render() {
  if (sportMode) { renderSport(); return; }
  if (document.body.classList.contains("app-ready")) document.body.classList.add("counter-rendered");
  grid.innerHTML = "";
  const visibleCounters = searchQuery.trim()
    ? counters.filter((counter) => counter.name.toLocaleLowerCase(currentLanguage).includes(searchQuery.trim().toLocaleLowerCase(currentLanguage)))
    : counters;
  if (!counters.length) {
      grid.innerHTML = `<div class="empty-state"><strong>${t("emptyTitle")}</strong>${t("emptyCopy")}</div>`;
  }
  if (counters.length && !visibleCounters.length) {
    grid.innerHTML = `<div class="empty-state"><strong>${t("noMatchingCounters")}</strong></div>`;
  }
  visibleCounters.forEach((counter) => {
    const card = document.createElement("article");
    card.className = "counter-card";
    card.innerHTML = `
      <div class="card-top">
        <input class="counter-name" value="${escapeHtml(counter.name)}" aria-label="${t("counterName")}" maxlength="32" />
        <button class="delete-button" type="button" title="${t("remove")}" aria-label="${t("remove")} ${escapeHtml(counter.name)}">×</button>
      </div>
      <div class="count-controls">
        <button class="step-button increment" type="button" aria-label="${t("increase")} ${escapeHtml(counter.name)}">+</button>
        <div class="count">${formatCount(counter.count)}</div>
        <button class="step-button decrement" type="button" aria-label="${t("decrease")} ${escapeHtml(counter.name)}">−</button>
      </div>
      ${huntMode ? `<div class="hunt-actions">
        <button class="hunt-action car-action" type="button" aria-label="${t("carAria")} ${escapeHtml(counter.name)}"><span class="hunt-emoji">🚕</span><span>${t("car")} <b>+1</b></span></button>
      </div>` : `<p class="card-caption">${t("tapToAdjust")}</p>`}`;
    card.querySelector(".increment").addEventListener("click", () => {
      updateCount(counter.id, 1);
      if (huntMode) showVehicle();
    });
    card.querySelector(".decrement").addEventListener("click", () => updateCount(counter.id, -1));
    card.querySelector(".car-action")?.addEventListener("click", () => { updateCount(counter.id, 1); showVehicle(); });
    card.querySelector(".delete-button").addEventListener("click", () => removeCounter(counter.id));
    card.querySelector(".counter-name").addEventListener("change", (event) => {
      counter.name = event.target.value.trim() || t("untitled");
      save(); render();
    });
    grid.appendChild(card);
  });
  total.textContent = formatCount(counters.reduce((sum, item) => sum + item.count, 0));
  active.textContent = counters.length;
}

counterSearch.addEventListener("input", (event) => { searchQuery = event.target.value; render(); });

function updateCount(id, amount) { const counter = counters.find((item) => item.id === id); if (counter) { counter.count = Math.max(0, counter.count + amount); save(); render(); } }
function removeCounter(id) { counters = counters.filter((counter) => counter.id !== id); save(); render(); }
function escapeHtml(value) { return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }
function showVehicle() {
  const vehicle = document.createElement("div");
  vehicle.className = `passing-vehicle car path-${Math.ceil(Math.random() * 3)}`;
  const startY = Math.round(14 + Math.random() * 64);
  const gentleShift = () => Math.round(-15 + Math.random() * 30);
  const midY = Math.max(10, Math.min(86, startY + gentleShift()));
  const endY = Math.max(10, Math.min(86, midY + gentleShift()));
  vehicle.style.setProperty("--start-y", `${startY}vh`);
  vehicle.style.setProperty("--mid-y", `${midY}vh`);
  vehicle.style.setProperty("--end-y", `${endY}vh`);
  vehicle.style.setProperty("--travel-time", `${(3.5 + Math.random() * 1.2).toFixed(2)}s`);
  vehicle.textContent = "🚕";
  vehicleLayer.appendChild(vehicle);
  vehicle.addEventListener("animationend", () => vehicle.remove());
}

function positionTutorial() {
  const step = tutorialSteps()[tutorialIndex];
  const target = document.querySelector(step.target);
  if (!target) return;
  const targetRect = target.getBoundingClientRect();
  const cardRect = tutorialCard.getBoundingClientRect();
  const gap = 24;
  const cardLeft = Math.max(16, Math.min(window.innerWidth - cardRect.width - 16, targetRect.left + targetRect.width / 2 - cardRect.width / 2));
  const below = targetRect.top < window.innerHeight / 2;
  const cardTop = Math.max(16, Math.min(window.innerHeight - cardRect.height - 16, below ? targetRect.bottom + gap : targetRect.top - cardRect.height - gap));
  tutorialCard.style.left = `${cardLeft}px`;
  tutorialCard.style.top = `${cardTop}px`;
  tutorialSpotlight.style.left = `${targetRect.left - 8}px`;
  tutorialSpotlight.style.top = `${targetRect.top - 8}px`;
  tutorialSpotlight.style.width = `${targetRect.width + 16}px`;
  tutorialSpotlight.style.height = `${targetRect.height + 16}px`;
  const startX = cardLeft + cardRect.width / 2;
  const startY = below ? cardTop : cardTop + cardRect.height;
  const endX = targetRect.left + targetRect.width / 2;
  const endY = below ? targetRect.bottom + 3 : targetRect.top - 3;
  const distance = Math.hypot(endX - startX, endY - startY);
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
  tutorialArrow.style.left = `${startX}px`;
  tutorialArrow.style.top = `${startY}px`;
  tutorialArrow.style.width = `${Math.max(20, distance)}px`;
  tutorialArrow.style.transform = `rotate(${angle}deg)`;
}

function showTutorialStep() {
  const steps = tutorialSteps();
  const step = steps[tutorialIndex];
  tutorialStep.textContent = `${tutorialIndex + 1} / ${steps.length}`;
  tutorialTitle.textContent = step.title;
  tutorialCopy.textContent = step.copy;
  continueTutorial.innerHTML = tutorialIndex === steps.length - 1 ? `${t("finish")} <span aria-hidden="true">✓</span>` : `${t("continue")} <span aria-hidden="true">→</span>`;
  tutorialOverlay.hidden = false;
  requestAnimationFrame(positionTutorial);
}

function launchConfetti() {
  const colors = ["#4169e1", "#ffd24d", "#ff9d72", "#8ed1c4", "#b79aff"];
  const release = (side) => {
    for (let index = 0; index < 32; index += 1) {
      const piece = document.createElement("span");
      piece.className = `confetti-piece confetti-${side}`;
      piece.style.left = side === "left" ? `${Math.random() * 10}vw` : `${90 + Math.random() * 10}vw`;
      piece.style.top = `${86 + Math.random() * 14}vh`;
      piece.style.background = colors[index % colors.length];
      piece.style.animationDelay = `${(Math.random() * .22).toFixed(2)}s`;
      piece.style.animationDuration = `${(1.6 + Math.random() * 1.3).toFixed(2)}s`;
      const drift = Math.round(90 + Math.random() * 230) * (side === "left" ? 1 : -1);
      piece.style.setProperty("--drift", `${drift}px`);
      piece.style.setProperty("--mid-drift", `${Math.round(drift * .45)}px`);
      piece.style.setProperty("--spin", `${Math.round(240 + Math.random() * 600)}deg`);
      document.body.appendChild(piece);
      piece.addEventListener("animationend", () => piece.remove());
    }
  };
  release("left");
  setTimeout(() => release("right"), 360);
}

function closeTutorial(completed = false) {
  tutorialOverlay.hidden = true;
  localStorage.setItem(TUTORIAL_KEY, "true");
  if (completed) launchConfetti();
}

document.querySelector("#add-counter").addEventListener("click", () => {
  counters.push({ id: crypto.randomUUID(), name: `${t("counter")} ${counters.length + 1}`, count: 0 });
  save(); render();
  setTimeout(() => grid.lastElementChild?.querySelector(".counter-name")?.select(), 0);
});
document.querySelector("#reset-all").addEventListener("click", () => {
  if (sportMode) {
    const config = SPORT_CONFIGS[sportType];
    if (confirm(`Reset ${config.name} scores to zero?`)) {
      sportScores.forEach(team => { team.score = 0; });
      saveSportScores(); renderSport();
    }
  } else if (counters.length && confirm(t("resetConfirm"))) {
    counters.forEach(counter => { counter.count = 0; }); save(); render();
  }
});
huntToggle.addEventListener("click", () => {
  // Mutually exclusive with Sport Mode
  if (sportMode) {
    sportMode = false;
    localStorage.setItem(SPORT_KEY, "false");
    applySportMode();
  }
  const enteringHuntMode = !huntMode;
  huntMode = enteringHuntMode;
  if (enteringHuntMode) {
    counters = readCounters(HUNT_COUNTERS_KEY) ?? (isYellowHuntCounters(legacyCounters) ? legacyCounters : createYellowHuntCounters());
  } else {
    counters = readCounters(STORAGE_KEY);
    if (!counters || isYellowHuntCounters(counters)) counters = starterCounters;
  }
  save();
  localStorage.setItem(HUNT_KEY, huntMode);
  applyHuntMode();
  render();
});
themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
});
applyTheme(localStorage.getItem(THEME_KEY) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
applyHuntMode();

// Initialise sport mode from localStorage
(function initSport() {
  const savedSportMode = localStorage.getItem(SPORT_KEY) === "true";
  if (savedSportMode) {
    // Sport and Hunt are mutually exclusive — clear Hunt if both somehow stored
    if (huntMode) {
      huntMode = false;
      localStorage.setItem(HUNT_KEY, "false");
    }
    sportMode   = true;
    sportType   = localStorage.getItem(SPORT_TYPE_KEY) || "basketball";
    sportScores = loadSportScores(sportType) || createSportScores(sportType);
    applySportMode();
    renderSport();
  } else {
    applySportMode(); // just sets toggle aria-label
    render();
  }
})();
requestAnimationFrame(() => {
  document.body.classList.add("app-ready");
  if (!localStorage.getItem(TUTORIAL_KEY)) setTimeout(showTutorialStep, 760);
});

document.querySelector("#continue-tutorial").addEventListener("click", () => {
  if (tutorialIndex === tutorialSteps().length - 1) closeTutorial(true);
  else { tutorialIndex += 1; showTutorialStep(); }
});
document.querySelector("#skip-tutorial").addEventListener("click", closeTutorial);
redoTutorial.addEventListener("click", () => {
  tutorialIndex = 0;
  showTutorialStep();
});
window.addEventListener("resize", () => { if (!tutorialOverlay.hidden) positionTutorial(); if (!languageMenu.hidden) positionLanguageMenu(); });
window.addEventListener("scroll", () => { if (!tutorialOverlay.hidden) positionTutorial(); }, { passive: true });
languageToggle.addEventListener("click", () => toggleLanguageMenu());
languageChoices.forEach((choice) => choice.addEventListener("click", () => { applyLanguage(choice.dataset.language); toggleLanguageMenu(false); }));
document.addEventListener("click", (event) => { if (!event.target.closest(".language-picker, #language-menu")) toggleLanguageMenu(false); });
applyLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");

// ── Sport mode event listeners ────────────────────────────────────────────────
document.querySelector("#sport-toggle").addEventListener("click", () => {
  if (sportMode) { exitSportMode(); } else { openSportPicker(); }
});
document.querySelector("#sport-picker-cancel").addEventListener("click", closeSportPicker);
document.querySelector("#sport-picker-backdrop").addEventListener("click", closeSportPicker);
document.querySelectorAll(".sport-option[data-sport]").forEach(btn => {
  btn.addEventListener("click", () => enterSportMode(btn.dataset.sport));
});
document.querySelectorAll(".sport-switch-btn[data-switch-sport]").forEach(btn => {
  btn.addEventListener("click", () => switchSport(btn.dataset.switchSport));
});
