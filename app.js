const STORAGE_KEY = "countly-counters";
const HUNT_COUNTERS_KEY = "countly-yellow-hunt-counters";
const THEME_KEY = "countly-theme";
const SKIN_KEY = "countly-skin";
const HUNT_KEY = "countly-yellow-hunt";
const HUNT_COLOR_KEY = "countly-hunt-color";
const TUTORIAL_KEY = "countly-tutorial-seen";
const LANGUAGE_KEY = "countly-language";
const SPORT_KEY = "countly-sport-mode";
const SPORT_TYPE_KEY = "countly-sport-type";
const SPORT_SCORES_KEY = "countly-sport-scores";
const TODAY_COUNTS_KEY = "countly-today-counts";

const COUNTER_ICONS = [
  "🔢", "💧", "👟", "📚", "☕", "🎯", "✅", "🏋️", "🧘", "💊",
  "🍎", "📝", "🎵", "💰", "🌟", "🚴", "📸", "🧹", "🤝", "🎮",
  "🐾", "🌱", "⏰", "🍳", "🛒"
];
const DEFAULT_ICONS_MAP = {
  "Water glasses": "💧", "Daily steps": "👟", "Books read": "📚",
  "Wassergläser": "💧", "Tägliche Schritte": "👟", "Gelesene Bücher": "📚",
  "Vasos de agua": "💧", "Pasos diarios": "👟", "Libros leídos": "📚",
  "水杯": "💧", "每日步数": "👟", "已读书籍": "📚",
  "पानी के गिलास": "💧", "दैनिक कदम": "👟", "पढ़ी गई किताबें": "📚",
};

function getIconForCounter(counter) {
  if (counter.icon) return counter.icon;
  if (DEFAULT_ICONS_MAP[counter.name]) return DEFAULT_ICONS_MAP[counter.name];
  return COUNTER_ICONS[0];
}

// ── Today's count tracking ────────────────────────────────────────────────────
function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function loadTodayCounts() {
  try {
    const data = JSON.parse(localStorage.getItem(TODAY_COUNTS_KEY));
    if (data && data.date === getTodayKey()) return data.counts;
  } catch {}
  return {};
}
function saveTodayCounts(counts) {
  localStorage.setItem(TODAY_COUNTS_KEY, JSON.stringify({ date: getTodayKey(), counts }));
}
let todayCounts = loadTodayCounts();

function generateId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
      });
}

const HUNT_CONFIG = {
  yellow: { emoji: "🚕", label: "Yellow Car" },
  red: { emoji: "🚗", label: "Red Car" },
  blue: { emoji: "🚙", label: "Blue Car" },
  green: { emoji: "🛻", label: "Green Car" },
  pink: { emoji: "🚘", label: "Pink Car" }
};

const translations = {
  en: {
    language: "Language",
    yourCounters: "Your counters",
    heroTitle: "Keep track of what matters.",
    addCounter: "Add new counter",
    howToPlay: "How to play",
    howItWorks: "How it works",
    sportTutorial: "Transform your counters into specialized scoreboards. Each sport features custom scoring rules and a unique theme.",
    huntTutorial: "The classic road trip game. Pick a color, spot cars, and tap to score points. Compete to see who spots the most!",
    skinTutorial: "Personalize your app's aesthetic. Skins change the colors, materials, and animations of your counters.",
    guideCopy: "Spot a yellow car for <strong>1 point</strong>. Log each find and see who can spot the most.",
    totalCount: "Total count",
    activeCounters: "Active counters",
    renameHint: "Click a counter’s name to rename it",
    keepItSimple: "Keep it simple.",
    viewTutorial: "View tutorial again",
    quickTour: "QUICK TOUR",
    skipIntro: "Skip Tutorial",
    continue: "Continue",
    finish: "Finish",
    tip: "TIP",
    play: "PLAY",
    car: "Car",
    tapToAdjust: "Tap to adjust",
    untitled: "Untitled counter",
    counter: "Counter",
    resetConfirm: "Reset all counters to zero?",
    emptyTitle: "Your counter space is ready.",
    emptyCopy: "Add a counter to get started.",
    chooseLanguage: "Choose language",
    darkMode: "Switch to dark mode",
    lightMode: "Switch to light mode",
    activateHunt: "Activate Yellow Hunt mode",
    exitHunt: "Exit Yellow Hunt mode",
    resetAll: "Reset all counters",
    counterName: "Counter name",
    searchCounters: "Search counters",
    noMatchingCounters: "No counters match your search.",
    aboutCountly: "About Countly",
    aboutDesc: "Created with precision by <strong>Iven Singer</strong>.<br><br>Countly is a beautiful, modern counter app designed to keep track of what matters. Features a stunning Liquid Glass aesthetic, specialized sport scoreboards, and mini-games.",
    close: "Close",
    resetSport: "Reset %s scores to zero?",
    remove: "Remove",
    increase: "Increase",
    decrease: "Decrease",
    carAria: "Log a %s for",
    tutorials: [
      [
        "Make it yours",
        "Add as many counters as you need, then give each one a name so everything stays easy to find."
      ],
      [
        "Count in a tap",
        "Use the plus and minus controls on any card to keep your numbers moving. Your progress is saved automatically."
      ],
      [
        "Try Sport Mode",
        "Tap the 🏆 trophy button to pick a sport — Basketball, Soccer, or Tennis. Each sport has its own scoring buttons and colour theme. Your scores are saved per sport."
      ],
      [
        "Try Yellow Hunt",
        "Switch on Yellow Hunt for the road game: log yellow cars for 1 point."
      ],
      [
        "Choose Skin",
        "Personalize the aesthetics of your app. Skins change the colors, materials, and animations of your counters."
      ],
      [
        "Choose your language",
        "Open the globe menu to choose English, German, Spanish, Mandarin Chinese, Hindi, or Italian."
      ],
      [
        "Set the mood",
        "Toggle between light and dark mode whenever you like. Countly remembers your preference."
      ],
      [
        "Start fresh",
        "Use reset whenever you want to bring every counter back to zero and begin a new round."
      ]
    ],
    navCounters: "Counters",
    navSports: "Sports",
    navHistory: "History",
    navGames: "Games",
    navSettings: "Settings",
    sportsHeroTitle: "Track every score.",
    chooseSport: "Choose a Sport",
    chooseSportDesc: "Pick a game to start tracking scores",
    sportBasketball: "Basketball",
    descBasketball: "Free Throw · Field Goal · 3-Pointer",
    sportSoccer: "Soccer",
    descSoccer: "Log goals for Home & Away",
    sportTennis: "Tennis",
    descTennis: "Love · 15 · 30 · 40 · Deuce · Ad",
    sportFootball: "Am. Football",
    descFootball: "TDs, FGs, and Safeties",
    sportF1: "Formula 1",
    descF1: "Podium finishes and points",
    sportBaseball: "Baseball",
    descBaseball: "Runs for Home & Away",
    sportHockey: "Ice Hockey",
    descHockey: "Goals on the ice",
    sportVolleyball: "Volleyball",
    descVolleyball: "Points and sets",
    cancelBtn: "Cancel",
    sportGuide: "Score points using the action buttons. Tap a team name to rename it.",
    endGame: "End Game",
    historyHeroTitle: "Your counting story.",
    comingSoon: "Coming soon",
    historyDesc: "History will show your counting activity over time — streaks, totals by day, and personal bests.",
    gamesHero: "Mini Games",
    gamesHeroTitle: "Play and count.",
    gameCarHunt: "Car Hunt",
    settingsHeroTitle: "Preferences.",
    settingsAppearance: "Appearance",
    settingsDarkMode: "Dark Mode",
    settingsSkin: "Skin",
    skinDefault: "Default",
    settingsLanguage: "Language",
    settingsGeneral: "General",
    chooseSkin: "Choose Skin",
    chooseSkinDesc: "Select a visual style for Countly",
    settingsAppearance: "Glass",
    appearanceStandard: "Balanced",
    chooseAppearance: "Glass Appearance",
    chooseAppearanceDesc: "Select a liquid glass intensity",
    appearanceClearName: "Transparent",
    appearanceClearDesc: "Let the background shine",
    appearanceStandardName: "Balanced",
    appearanceStandardDesc: "The classic Countly look",
    appearanceTintedName: "Frosted",
    appearanceTintedDesc: "More solid and muted",
    skinDefaultName: "Default (Liquid Glass)",
    skinDefaultDesc: "The stunning modern aesthetic",
    skinClassic: "Classic",
    skinClassicDesc: "Clean, flat, and simple",
    skinGlitched: "Glitched",
    skinGlitchedDesc: "Chaotic cyberpunk vibes",
    skinNeon: "Neon",
    skinNeonDesc: "Vibrant synthwave colors",
    skinOcean: "Ocean",
    skinOceanDesc: "Deep sea blues and aquamarine",
    skinNature: "Nature",
    skinNatureDesc: "Calming greens and organic tones",
    skinSunset: "Sunset",
    skinSunsetDesc: "Vibrant twilight and synthwave vibes",
    skinSpace: "Space",
    skinSpaceDesc: "Deep cosmos with floating stars",
    skinMinimal: "Minimal",
    skinMinimalDesc: "Ultra-clean, monochrome focus",
    skinRetro: "Retro",
    skinRetroDesc: "Nostalgic 8-bit arcade aesthetic",
    viewOnGithub: "View on GitHub",
    prevBtn: "Back",
    brainrotHint: "Hint: Scroll to the bottom of the language menu for a surprise... 💀",
    quickCount: "Quick Count",
    finishBtn: "Finish",
    saveCounterTitle: "Save Counter",
    namePlaceholder: "Name this counter...",
    discardBtn: "Discard",
    saveBtn: "Save"
  },
  de: {
    language: "Sprache",
    yourCounters: "Deine Zähler",
    heroTitle: "Behalte im Blick, was zählt.",
    addCounter: "Neuen Zähler hinzufügen",
    howToPlay: "So wird gespielt",
    howItWorks: "So funktioniert's",
    sportTutorial: "Verwandle deine Zähler in spezielle Anzeigetafeln. Jede Sportart bietet eigene Punkteregeln und ein einzigartiges Design.",
    huntTutorial: "Das klassische Roadtrip-Spiel. Wähle eine Farbe, entdecke Autos und tippe, um Punkte zu sammeln. Finde heraus, wer die meisten sieht!",
    skinTutorial: "Personalisiere das Aussehen deiner App. Skins verändern die Farben, Materialien und Animationen deiner Zähler.",
    guideCopy: "Entdecke ein gelbes Auto für <strong>1 Punkt</strong>. Erfasse jeden Fund und finde die meisten.",
    totalCount: "Gesamtzahl",
    activeCounters: "Aktive Zähler",
    renameHint: "Klicke auf den Namen eines Zählers, um ihn umzubenennen",
    keepItSimple: "Einfach halten.",
    viewTutorial: "Tutorial erneut ansehen",
    quickTour: "KURZTOUR",
    skipIntro: "Intro überspringen",
    continue: "Weiter",
    finish: "Fertig",
    tip: "TIPP",
    play: "SPIEL",
    car: "Auto",
    tapToAdjust: "Antippen zum Ändern",
    untitled: "Unbenannter Zähler",
    counter: "Zähler",
    resetConfirm: "Alle Zähler auf null zurücksetzen?",
    emptyTitle: "Dein Zählerbereich ist bereit.",
    emptyCopy: "Füge einen Zähler hinzu.",
    chooseLanguage: "Sprache auswählen",
    darkMode: "Dunkelmodus aktivieren",
    lightMode: "Hellmodus aktivieren",
    activateHunt: "Yellow Hunt aktivieren",
    exitHunt: "Yellow Hunt beenden",
    resetAll: "Alle Zähler zurücksetzen",
    counterName: "Name des Zählers",
    searchCounters: "Zähler suchen",
    noMatchingCounters: "Keine Zähler entsprechen deiner Suche.",
    aboutCountly: "Über Countly",
    aboutDesc: "Mit Präzision erstellt von <strong>Iven Singer</strong>.<br><br>Countly ist eine schöne, moderne Zähler-App. Bietet eine atemberaubende Liquid-Glass-Ästhetik, spezielle Sport-Anzeigetafeln und Minispiele.",
    close: "Schließen",
    resetSport: "%s-Spielstände auf null zurücksetzen?",
    remove: "Zähler entfernen",
    increase: "Erhöhen",
    decrease: "Verringern",
    carAria: "Erfasse ein %s für",
    tutorials: [
      [
        "Mach es zu deinem",
        "Füge beliebig viele Zähler hinzu und gib ihnen Namen, damit alles leicht zu finden bleibt."
      ],
      [
        "Mit einem Tipp zählen",
        "Nutze Plus und Minus auf jeder Karte. Dein Fortschritt wird automatisch gespeichert."
      ],
      [
        "Sport-Modus ausprobieren",
        "Tippe auf das 🏆 Pokal-Symbol und wähle eine Sportart – Basketball, Fußball oder Tennis. Jede hat eigene Punkte-Buttons und Farben."
      ],
      [
        "Yellow Hunt ausprobieren",
        "Aktiviere Yellow Hunt: Gelbe Autos zählen 1 Punkt."
      ],
      [
        "Skin auswählen",
        "Personalisiere das Aussehen deiner App. Skins verändern die Farben, Materialien und Animationen deiner Zähler."
      ],
      [
        "Sprache auswählen",
        "Öffne das Globusmenü und wähle deine Sprache."
      ],
      [
        "Stimmung festlegen",
        "Wechsle jederzeit zwischen hellem und dunklem Modus."
      ],
      [
        "Neu beginnen",
        "Setze alle Zähler zurück, um eine neue Runde zu starten."
      ]
    ],
    navCounters: "Zähler",
    navSports: "Sport",
    navHistory: "Verlauf",
    navGames: "Spiele",
    navSettings: "Einst.",
    sportsHeroTitle: "Jeden Punkt erfassen.",
    chooseSport: "Sportart wählen",
    chooseSportDesc: "Wähle ein Spiel, um Punkte zu erfassen",
    sportBasketball: "Basketball",
    descBasketball: "Freiwurf · Korb · 3-Punkte",
    sportSoccer: "Fußball",
    descSoccer: "Tore für Heim & Auswärts",
    sportTennis: "Tennis",
    descTennis: "Love · 15 · 30 · 40 · Einstand · Vorteil",
    sportFootball: "Am. Football",
    descFootball: "TDs, FGs und Safeties",
    sportF1: "Formel 1",
    descF1: "Podestplätze und Punkte",
    sportBaseball: "Baseball",
    descBaseball: "Runs für Heim & Auswärts",
    sportHockey: "Eishockey",
    descHockey: "Tore auf dem Eis",
    sportVolleyball: "Volleyball",
    descVolleyball: "Punkte und Sätze",
    cancelBtn: "Abbrechen",
    sportGuide: "Punkte über die Aktionsschaltflächen vergeben. Teamnamen zum Umbenennen antippen.",
    endGame: "Spiel beenden",
    historyHeroTitle: "Deine Zähl-Geschichte.",
    comingSoon: "Demnächst",
    historyDesc: "Der Verlauf zeigt deine Zählaktivität im Laufe der Zeit — Serien, Tagessummen und persönliche Rekorde.",
    gamesHero: "Minispiele",
    gamesHeroTitle: "Spielen und zählen.",
    gameCarHunt: "Autojagd",
    settingsHeroTitle: "Einstellungen.",
    settingsAppearance: "Erscheinungsbild",
    settingsDarkMode: "Dunkelmodus",
    settingsSkin: "Design",
    skinDefault: "Standard",
    settingsLanguage: "Sprache",
    settingsGeneral: "Allgemein",
    chooseSkin: "Design wählen",
    chooseSkinDesc: "Wähle einen visuellen Stil für Countly",
    settingsAppearance: "Glas",
    appearanceStandard: "Ausgewogen",
    chooseAppearance: "Glas-Erscheinungsbild",
    chooseAppearanceDesc: "Wähle die Intensität des Liquid Glass",
    appearanceClearName: "Transparent",
    appearanceClearDesc: "Lässt den Hintergrund durchscheinen",
    appearanceStandardName: "Ausgewogen",
    appearanceStandardDesc: "Der klassische Countly-Look",
    appearanceTintedName: "Mattiert",
    appearanceTintedDesc: "Fester und gedämpfter",
    skinDefaultName: "Standard (Liquid Glass)",
    skinDefaultDesc: "Die atemberaubende moderne Ästhetik",
    skinClassic: "Klassisch",
    skinClassicDesc: "Klar, flach und einfach",
    skinGlitched: "Glitched",
    skinGlitchedDesc: "Chaotische Cyberpunk-Vibes",
    skinNeon: "Neon",
    skinNeonDesc: "Lebhafte Synthwave-Farben",
    skinOcean: "Ozean",
    skinOceanDesc: "Tiefseeblau und Aquamarin",
    skinNature: "Natur",
    skinNatureDesc: "Beruhigende Grüntöne",
    skinSunset: "Sonnenuntergang",
    skinSunsetDesc: "Lebhafte Dämmerung",
    skinSpace: "Weltraum",
    skinSpaceDesc: "Tiefer Kosmos mit Sternen",
    skinMinimal: "Minimal",
    skinMinimalDesc: "Monochromer Fokus",
    skinRetro: "Retro",
    skinRetroDesc: "Nostalgische 8-Bit-Arcade-Ästhetik",
    viewOnGithub: "Auf GitHub ansehen",
    prevBtn: "Zurück",
    brainrotHint: "Tipp: Scrolle zum Ende des Sprachmenüs für eine Überraschung... 💀",
    quickCount: "Schnellzähler",
    finishBtn: "Fertig",
    saveCounterTitle: "Zähler speichern",
    namePlaceholder: "Zähler benennen...",
    discardBtn: "Verwerfen",
    saveBtn: "Speichern"
  },
  es: {
    language: "Idioma",
    yourCounters: "Tus contadores",
    heroTitle: "Lleva el control de lo que importa.",
    addCounter: "Añadir nuevo contador",
    howToPlay: "Cómo jugar",
    howItWorks: "Cómo funciona",
    sportTutorial: "Transforma tus contadores en marcadores especializados. Cada deporte cuenta con reglas de puntuación y un diseño únicos.",
    huntTutorial: "El clásico juego de viaje. Elige un color, busca coches y toca para sumar puntos. ¡Compite para ver quién encuentra más!",
    skinTutorial: "Personaliza la estética de tu aplicación. Los estilos cambian los colores, materiales y animaciones de tus contadores.",
    guideCopy: "Encuentra un coche amarillo por <strong>1 punto</strong>. Registra cada hallazgo y descubre quién encuentra más.",
    totalCount: "Cuenta total",
    activeCounters: "Contadores activos",
    renameHint: "Haz clic en el nombre para cambiarlo",
    keepItSimple: "Mantenlo simple.",
    viewTutorial: "Ver tutorial de nuevo",
    quickTour: "GUÍA RÁPIDA",
    skipIntro: "Omitir introducción",
    continue: "Continuar",
    finish: "Terminar",
    tip: "CONSEJO",
    play: "JUEGO",
    car: "Coche",
    tapToAdjust: "Toca para ajustar",
    untitled: "Contador sin título",
    counter: "Contador",
    resetConfirm: "¿Restablecer todos los contadores a cero?",
    emptyTitle: "Tu espacio de contadores está listo.",
    emptyCopy: "Añade un contador para empezar.",
    chooseLanguage: "Elegir idioma",
    darkMode: "Cambiar a modo oscuro",
    lightMode: "Cambiar a modo claro",
    activateHunt: "Activar Yellow Hunt",
    exitHunt: "Salir de Yellow Hunt",
    resetAll: "Restablecer contadores",
    counterName: "Nombre del contador",
    searchCounters: "Buscar contadores",
    noMatchingCounters: "Ningún contador coincide con tu búsqueda.",
    aboutCountly: "Acerca de Countly",
    aboutDesc: "Creado con precisión por <strong>Iven Singer</strong>.<br><br>Countly es una hermosa y moderna aplicación de contadores. Cuenta con una impresionante estética de Liquid Glass, marcadores deportivos y minijuegos.",
    close: "Cerrar",
    resetSport: "¿Restablecer las puntuaciones de %s a cero?",
    remove: "Eliminar contador",
    increase: "Aumentar",
    decrease: "Disminuir",
    carAria: "Registra un %s para",
    tutorials: [
      [
        "Hazlo tuyo",
        "Añade los contadores que necesites y ponles nombre para encontrar todo fácilmente."
      ],
      [
        "Cuenta con un toque",
        "Usa los controles más y menos. Tu progreso se guarda automáticamente."
      ],
      [
        "Prueba el modo Sport",
        "Toca el trofeo 🏆 para elegir un deporte: Baloncesto, Fútbol o Tenis. Cada uno tiene sus propios botones de puntuación y colores."
      ],
      [
        "Prueba Yellow Hunt",
        "Activa Yellow Hunt: los coches amarillos valen 1 punto."
      ],
      [
        "Elegir estilo",
        "Personaliza la estética de tu aplicación. Los estilos cambian los colores, materiales y animaciones de tus contadores."
      ],
      [
        "Elige tu idioma",
        "Abre el menú del globo para elegir idioma."
      ],
      [
        "Cambia el ambiente",
        "Alterna entre el modo claro y oscuro cuando quieras."
      ],
      [
        "Empieza de cero",
        "Restablece los contadores para comenzar una ronda nueva."
      ]
    ],
    navCounters: "Contadores",
    navSports: "Deportes",
    navHistory: "Historial",
    navGames: "Juegos",
    navSettings: "Ajustes",
    sportsHeroTitle: "Rastrea cada punto.",
    chooseSport: "Elige un Deporte",
    chooseSportDesc: "Elige un juego para registrar puntos",
    sportBasketball: "Baloncesto",
    descBasketball: "Tiro libre · Canasta · Triple",
    sportSoccer: "Fútbol",
    descSoccer: "Goles de Local y Visitante",
    sportTennis: "Tenis",
    descTennis: "Love · 15 · 30 · 40 · Deuce · Ad",
    sportFootball: "Fútbol Am.",
    descFootball: "TDs, FGs y Safeties",
    sportF1: "Fórmula 1",
    descF1: "Podios y puntos",
    sportBaseball: "Béisbol",
    descBaseball: "Carreras de Local y Visitante",
    sportHockey: "Hockey Hielo",
    descHockey: "Goles en el hielo",
    sportVolleyball: "Voleibol",
    descVolleyball: "Puntos y sets",
    cancelBtn: "Cancelar",
    sportGuide: "Anota puntos usando los botones de acción. Toca el nombre del equipo para cambiarlo.",
    endGame: "Terminar Juego",
    historyHeroTitle: "Tu historia de conteo.",
    comingSoon: "Próximamente",
    historyDesc: "El historial mostrará tu actividad a lo largo del tiempo: rachas, totales por día y récords personales.",
    gamesHero: "Minijuegos",
    gamesHeroTitle: "Juega y cuenta.",
    gameCarHunt: "Caza de Autos",
    settingsHeroTitle: "Preferencias.",
    settingsAppearance: "Apariencia",
    settingsDarkMode: "Modo Oscuro",
    settingsSkin: "Aspecto",
    skinDefault: "Por defecto",
    settingsLanguage: "Idioma",
    settingsGeneral: "General",
    chooseSkin: "Elige un Aspecto",
    chooseSkinDesc: "Selecciona un estilo visual",
    skinDefaultName: "Por defecto (Liquid Glass)",
    skinDefaultDesc: "La impresionante estética moderna",
    skinClassic: "Clásico",
    skinClassicDesc: "Limpio, plano y sencillo",
    skinGlitched: "Glitched",
    skinGlitchedDesc: "Vibras cyberpunk caóticas",
    skinNeon: "Neón",
    skinNeonDesc: "Colores synthwave vibrantes",
    skinOcean: "Océano",
    skinOceanDesc: "Azul mar profundo y aguamarina",
    skinNature: "Naturaleza",
    skinNatureDesc: "Verdes relajantes y tonos orgánicos",
    skinSunset: "Atardecer",
    skinSunsetDesc: "Crepúsculo vibrante",
    skinSpace: "Espacio",
    skinSpaceDesc: "Cosmos profundo con estrellas",
    skinMinimal: "Minimalista",
    skinMinimalDesc: "Enfoque monocromático ultralimpio",
    skinRetro: "Retro",
    skinRetroDesc: "Estética nostálgica de arcade de 8 bits",
    viewOnGithub: "Ver en GitHub",
    prevBtn: "Atrás",
    brainrotHint: "Pista: Desplázate hasta el final del menú de idiomas para una sorpresa... 💀",
    quickCount: "Conteo Rápido",
    finishBtn: "Terminar",
    saveCounterTitle: "Guardar contador",
    namePlaceholder: "Nombra este contador...",
    discardBtn: "Descartar",
    saveBtn: "Guardar"
  },
  zh: {
    language: "语言",
    yourCounters: "你的计数器",
    heroTitle: "记录重要的事情。",
    addCounter: "添加新计数器",
    howToPlay: "玩法",
    howItWorks: "功能介绍",
    sportTutorial: "将计数器变为专业计分板。每项运动都有专属的计分规则和独特主题。",
    huntTutorial: "经典的公路旅行游戏。选择一种颜色，发现汽车并点击得分。比比看谁找得最多！",
    skinTutorial: "个性化你的应用外观。皮肤可以改变计数器的颜色、材质和动画。",
    guideCopy: "发现黄色汽车得<strong>1分</strong>。记录每次发现，看看谁发现得最多。",
    totalCount: "总计数",
    activeCounters: "活动计数器",
    renameHint: "点击计数器名称即可重命名",
    keepItSimple: "保持简单。",
    viewTutorial: "再次查看教程",
    quickTour: "快速导览",
    skipIntro: "跳过介绍",
    continue: "继续",
    finish: "完成",
    tip: "提示",
    play: "游戏",
    car: "汽车",
    tapToAdjust: "点击调整",
    untitled: "未命名计数器",
    counter: "计数器",
    resetConfirm: "将所有计数器重置为零？",
    emptyTitle: "计数器空间已准备好。",
    emptyCopy: "添加一个计数器开始吧。",
    chooseLanguage: "选择语言",
    darkMode: "切换到深色模式",
    lightMode: "切换到浅色模式",
    activateHunt: "开启 Yellow Hunt",
    exitHunt: "退出 Yellow Hunt",
    resetAll: "重置所有计数器",
    counterName: "计数器名称",
    searchCounters: "搜索计数器",
    noMatchingCounters: "没有符合您搜索的计数器。",
    aboutCountly: "关于 Countly",
    aboutDesc: "由 <strong>Iven Singer</strong> 精心制作。<br><br>Countly 是一款精美的现代计数器应用。具有令人惊叹的液态玻璃美学、专门的运动计分板和迷你游戏。",
    close: "关闭",
    resetSport: "将 %s 的分数重置为零？",
    remove: "删除计数器",
    increase: "增加",
    decrease: "减少",
    carAria: "记录 %s，计数器为",
    tutorials: [
      [
        "打造专属计数器",
        "添加需要的计数器并命名，让一切都易于查找。"
      ],
      [
        "轻触即可计数",
        "使用加减按钮更新数字，进度会自动保存。"
      ],
      [
        "试试运动模式",
        "点击 🏆 奖杯按钮选择运动项目——篮球、足球或网球。每项运动有专属得分按钮和配色。"
      ],
      [
        "试试 Yellow Hunt",
        "开启 Yellow Hunt：黄色汽车得1分。"
      ],
      [
        "选择皮肤",
        "个性化你的应用外观。皮肤可以改变计数器的颜色、材质和动画。"
      ],
      [
        "选择语言",
        "打开地球图标菜单选择语言。"
      ],
      [
        "调整氛围",
        "随时切换浅色和深色模式。"
      ],
      [
        "重新开始",
        "重置所有计数器，开始新一轮。"
      ]
    ],
    navCounters: "计数器",
    navSports: "运动",
    navHistory: "历史",
    navGames: "游戏",
    navSettings: "设置",
    sportsHeroTitle: "记录每一分。",
    chooseSport: "选择一项运动",
    chooseSportDesc: "选择一个游戏开始记录分数",
    sportBasketball: "篮球",
    descBasketball: "罚球 · 投篮 · 三分球",
    sportSoccer: "足球",
    descSoccer: "主客场进球",
    sportTennis: "网球",
    descTennis: "Love · 15 · 30 · 40 · Deuce · Ad",
    sportFootball: "美式橄榄球",
    descFootball: "达阵、任意球和安全分",
    sportF1: "一级方程式",
    descF1: "领奖台和积分",
    sportBaseball: "棒球",
    descBaseball: "主客场得分",
    sportHockey: "冰球",
    descHockey: "冰上进球",
    sportVolleyball: "排球",
    descVolleyball: "分数和局数",
    cancelBtn: "取消",
    sportGuide: "使用操作按钮得分。点击球队名称重命名。",
    endGame: "结束比赛",
    historyHeroTitle: "你的计数故事。",
    comingSoon: "即将推出",
    historyDesc: "历史记录将显示你随时间推移的计数活动——连续记录、每日总计和个人最佳。",
    gamesHero: "迷你游戏",
    gamesHeroTitle: "边玩边数。",
    gameCarHunt: "找车游戏",
    settingsHeroTitle: "偏好设置。",
    settingsAppearance: "外观",
    settingsDarkMode: "深色模式",
    settingsSkin: "主题皮肤",
    skinDefault: "默认",
    settingsLanguage: "语言",
    settingsGeneral: "常规",
    chooseSkin: "选择皮肤",
    chooseSkinDesc: "为Countly选择视觉风格",
    skinDefaultName: "默认 (液态玻璃)",
    skinDefaultDesc: "令人惊叹的现代美学",
    skinClassic: "经典",
    skinClassicDesc: "干净、扁平、简单",
    skinGlitched: "故障",
    skinGlitchedDesc: "混乱的赛博朋克氛围",
    skinNeon: "霓虹",
    skinNeonDesc: "充满活力的合成器波颜色",
    skinOcean: "海洋",
    skinOceanDesc: "深海蓝和海蓝宝石",
    skinNature: "自然",
    skinNatureDesc: "平静的绿色和有机色调",
    skinSunset: "日落",
    skinSunsetDesc: "充满活力的暮光",
    skinSpace: "太空",
    skinSpaceDesc: "漂浮着星星的深邃宇宙",
    skinMinimal: "极简",
    skinMinimalDesc: "超干净的单色焦点",
    skinRetro: "复古",
    skinRetroDesc: "怀旧的8位街机美学",
    viewOnGithub: "在GitHub上查看",
    prevBtn: "返回",
    brainrotHint: "提示：滚动到语言菜单底部发现惊喜... 💀",
    quickCount: "快速计数",
    finishBtn: "完成",
    saveCounterTitle: "保存计数器",
    namePlaceholder: "命名此计数器...",
    discardBtn: "放弃",
    saveBtn: "保存"
  },
  hi: {
    language: "भाषा",
    yourCounters: "आपके काउंटर",
    heroTitle: "जो ज़रूरी है उसका हिसाब रखें।",
    addCounter: "नया काउंटर जोड़ें",
    howToPlay: "कैसे खेलें",
    howItWorks: "यह कैसे काम करता है",
    sportTutorial: "अपने काउंटरों को विशेष स्कोरबोर्ड में बदलें। प्रत्येक खेल में कस्टम स्कोरिंग नियम और एक अद्वितीय थीम है।",
    huntTutorial: "क्लासिक रोड ट्रिप गेम। एक रंग चुनें, कारें ढूंढें और पॉइंट स्कोर करने के लिए टैप करें। देखें कौन सबसे ज्यादा ढूंढता है!",
    skinTutorial: "अपने ऐप के एस्थेटिक को कस्टमाइज़ करें। स्किन्स आपके काउंटरों के रंग, मटीरियल और एनिमेशन बदल देते हैं।",
    guideCopy: "पीली कार के लिए <strong>1 अंक</strong> पाएं। हर खोज दर्ज करें और देखें किसने सबसे ज़्यादा पाया।",
    totalCount: "कुल गिनती",
    activeCounters: "सक्रिय काउंटर",
    renameHint: "नाम बदलने के लिए काउंटर के नाम पर क्लिक करें",
    keepItSimple: "सरल रखें।",
    viewTutorial: "ट्यूटोरियल फिर देखें",
    quickTour: "त्वरित परिचय",
    skipIntro: "परिचय छोड़ें",
    continue: "जारी रखें",
    finish: "समाप्त",
    tip: "सुझाव",
    play: "खेल",
    car: "कार",
    tapToAdjust: "बदलने के लिए टैप करें",
    untitled: "बिना नाम का काउंटर",
    counter: "काउंटर",
    resetConfirm: "सभी काउंटर शून्य पर रीसेट करें?",
    emptyTitle: "आपका काउंटर स्थान तैयार है।",
    emptyCopy: "शुरू करने के लिए काउंटर जोड़ें।",
    chooseLanguage: "भाषा चुनें",
    darkMode: "डार्क मोड पर जाएं",
    lightMode: "लाइट मोड पर जाएं",
    activateHunt: "Yellow Hunt शुरू करें",
    exitHunt: "Yellow Hunt से बाहर निकलें",
    resetAll: "सभी काउंटर रीसेट करें",
    counterName: "काउंटर का नाम",
    searchCounters: "काउंटर खोजें",
    noMatchingCounters: "कोई काउंटर आपकी खोज से मेल नहीं खाता।",
    aboutCountly: "Countly के बारे में",
    aboutDesc: "<strong>Iven Singer</strong> द्वारा सटीकता से बनाया गया。<br><br>Countly एक सुंदर, आधुनिक काउंटर ऐप है। इसमें शानदार लिक्विड ग्लास एस्थेटिक, स्पोर्ट्स स्कोरबोर्ड और मिनी-गेम शामिल हैं।",
    close: "बंद करें",
    resetSport: "क्या %s के स्कोर शून्य पर रीसेट करें?",
    remove: "काउंटर हटाएं",
    increase: "बढ़ाएं",
    decrease: "घटाएं",
    carAria: "एक %s दर्ज करें, काउंटर",
    tutorials: [
      [
        "इसे अपना बनाएं",
        "जितने काउंटर चाहिए जोड़ें और उन्हें नाम दें ताकि सब आसानी से मिल सके।"
      ],
      [
        "एक टैप में गिनें",
        "प्लस और माइनस बटन का उपयोग करें। प्रगति अपने आप सेव होती है।"
      ],
      [
        "स्पोर्ट मोड आज़माएं",
        "🏆 ट्रॉफी बटन टैप करें और खेल चुनें — बास्केटबॉल, सॉकर या टेनिस। हर खेल के अपने स्कोरिंग बटन और रंग हैं।"
      ],
      [
        "Yellow Hunt आज़माएं",
        "Yellow Hunt चालू करें: पीली कार 1 अंक देती है।"
      ],
      [
        "स्किन चुनें",
        "अपने ऐप के एस्थेटिक को कस्टमाइज़ करें। स्किन्स आपके काउंटरों के रंग, मटीरियल और एनिमेशन बदल देते हैं."
      ],
      [
        "भाषा चुनें",
        "भाषा चुनने के लिए ग्लोब मेनू खोलें।"
      ],
      [
        "मूड सेट करें",
        "जब चाहें लाइट और डार्क मोड बदलें।"
      ],
      [
        "फिर से शुरू करें",
        "नई शुरुआत के लिए सभी काउंटर रीसेट करें।"
      ]
    ],
    navCounters: "काउंटर",
    navSports: "खेल",
    navHistory: "इतिहास",
    navGames: "गेम्स",
    navSettings: "सेटिंग्स",
    sportsHeroTitle: "हर स्कोर ट्रैक करें।",
    chooseSport: "खेल चुनें",
    chooseSportDesc: "स्कोर ट्रैक करने के लिए एक गेम चुनें",
    sportBasketball: "बास्केटबॉल",
    descBasketball: "फ्री थ्रो · फील्ड गोल · 3-पॉइंटर",
    sportSoccer: "फ़ुटबॉल",
    descSoccer: "होम और अवे गोल",
    sportTennis: "टेनिस",
    descTennis: "लव · 15 · 30 · 40 · ड्यूस · एड",
    sportFootball: "अमेरिकन फ़ुटबॉल",
    descFootball: "टीडी, एफजी, और सेफ्टीज़",
    sportF1: "फॉर्मूला 1",
    descF1: "पोडियम फ़िनिश और पॉइंट",
    sportBaseball: "बेसबॉल",
    descBaseball: "होम और अवे रन",
    sportHockey: "आइस हॉकी",
    descHockey: "बर्फ पर गोल",
    sportVolleyball: "वॉलीबॉल",
    descVolleyball: "अंक और सेट",
    cancelBtn: "रद्द करें",
    sportGuide: "एक्शन बटन का उपयोग करके स्कोर करें। टीम का नाम बदलने के लिए उस पर टैप करें।",
    endGame: "गेम समाप्त करें",
    historyHeroTitle: "आपकी काउंटिंग कहानी।",
    comingSoon: "जल्द आ रहा है",
    historyDesc: "इतिहास समय के साथ आपकी काउंटिंग गतिविधि दिखाएगा - स्ट्रीक्स, दैनिक कुल और व्यक्तिगत सर्वश्रेष्ठ।",
    gamesHero: "मिनी गेम्स",
    gamesHeroTitle: "खेलें और गिनें।",
    gameCarHunt: "कार हंट",
    settingsHeroTitle: "प्राथमिकताएं।",
    settingsAppearance: "रंग-रूप",
    settingsDarkMode: "डार्क मोड",
    settingsSkin: "स्किन",
    skinDefault: "डिफ़ॉल्ट",
    settingsLanguage: "भाषा",
    settingsGeneral: "सामान्य",
    chooseSkin: "स्किन चुनें",
    chooseSkinDesc: "Countly के लिए एक दृश्य शैली चुनें",
    skinDefaultName: "डिफ़ॉल्ट (लिक्विड ग्लास)",
    skinDefaultDesc: "आश्चर्यजनक आधुनिक सौंदर्य",
    skinClassic: "क्लासिक",
    skinClassicDesc: "साफ, सपाट और सरल",
    skinGlitched: "ग्लिच्ड",
    skinGlitchedDesc: "अराजक साइबरपंक वाइब्स",
    skinNeon: "नियॉन",
    skinNeonDesc: "जीवंत सिंथवेव रंग",
    skinOcean: "महासागर",
    skinOceanDesc: "गहरे समुद्र का नीला और एक्वामरीन",
    skinNature: "प्रकृति",
    skinNatureDesc: "शांत हरा और जैविक स्वर",
    skinSunset: "सूर्यास्त",
    skinSunsetDesc: "जीवंत गोधूलि",
    skinSpace: "अंतरिक्ष",
    skinSpaceDesc: "तैरते सितारों के साथ गहरा ब्रह्मांड",
    skinMinimal: "न्यूनतम",
    skinMinimalDesc: "अल्ट्रा-क्लीन, मोनोक्रोम फोकस",
    skinRetro: "रेट्रो",
    skinRetroDesc: "उदासीन 8-बिट आर्केड सौंदर्य",
    viewOnGithub: "GitHub पर देखें",
    prevBtn: "पीछे",
    brainrotHint: "संकेत: एक आश्चर्य के लिए भाषा मेनू के नीचे स्क्रॉल करें... 💀",
    quickCount: "त्वरित गिनती",
    finishBtn: "समाप्त",
    saveCounterTitle: "काउंटर सहेजें",
    namePlaceholder: "इस काउंटर को नाम दें...",
    discardBtn: "खारिज करें",
    saveBtn: "सहेजें"
  },
  it: {
    language: "Lingua",
    yourCounters: "I tuoi contatori",
    heroTitle: "Tieni traccia di ciò che conta.",
    addCounter: "Aggiungi nuovo contatore",
    howToPlay: "Come si gioca",
    howItWorks: "Come funziona",
    sportTutorial: "Trasforma i tuoi contatori in tabelloni segnapunti. Ogni sport ha regole di punteggio e un tema unico.",
    huntTutorial: "Il classico gioco da viaggio. Scegli un colore, trova le auto e tocca per fare punti. Scopri chi ne trova di più!",
    skinTutorial: "Personalizza l'estetica dell'app. Le skin cambiano i colori, i materiali e le animazioni dei tuoi contatori.",
    guideCopy: "Trova un'auto gialla per <strong>1 punto</strong>. Registra ogni scoperta e vedi chi ne trova di più.",
    totalCount: "Conteggio totale",
    activeCounters: "Contatori attivi",
    renameHint: "Fai clic sul nome di un contatore per rinominarlo",
    keepItSimple: "Mantieni le cose semplici.",
    viewTutorial: "Rivedi il tutorial",
    quickTour: "TOUR RAPIDO",
    skipIntro: "Salta il tutorial",
    continue: "Continua",
    finish: "Fine",
    tip: "SUGGERIMENTO",
    play: "GIOCO",
    car: "Auto",
    tapToAdjust: "Tocca per regolare",
    untitled: "Contatore senza titolo",
    counter: "Contatore",
    resetConfirm: "Vuoi azzerare tutti i contatori?",
    emptyTitle: "Il tuo spazio per i contatori è pronto.",
    emptyCopy: "Aggiungi un contatore per iniziare.",
    chooseLanguage: "Scegli la lingua",
    darkMode: "Passa alla modalità scura",
    lightMode: "Passa alla modalità chiara",
    activateHunt: "Attiva la modalità Yellow Hunt",
    exitHunt: "Esci dalla modalità Yellow Hunt",
    resetAll: "Azzera tutti i contatori",
    counterName: "Nome del contatore",
    searchCounters: "Cerca contatori",
    noMatchingCounters: "Nessun contatore corrisponde alla tua ricerca.",
    aboutCountly: "Informazioni su Countly",
    aboutDesc: "Creato con precisione da <strong>Iven Singer</strong>.<br><br>Countly è una bellissima app moderna per tenere il conto di ciò che conta. Presenta un'incredibile estetica Liquid Glass, tabelloni sportivi specializzati e mini-giochi.",
    close: "Chiudi",
    resetSport: "Azzerare i punteggi di %s?",
    remove: "Rimuovi",
    increase: "Aumenta",
    decrease: "Riduci",
    carAria: "Registra un %s per",
    tutorials: [
      [
        "Fallo tuo",
        "Aggiungi quanti contatori vuoi, poi dai a ciascuno un nome in modo da trovare tutto facilmente."
      ],
      [
        "Conta con un tocco",
        "Usa i pulsanti più e meno su qualsiasi scheda per aggiornare i numeri. I tuoi progressi vengono salvati automaticamente."
      ],
      [
        "Prova la Modalità Sport",
        "Tocca il pulsante con il trofeo 🏆 per scegliere uno sport — Pallacanestro, Calcio o Tennis. Ogni sport ha i propri pulsanti di punteggio e tema di colori."
      ],
      [
        "Prova Yellow Hunt",
        "Attiva Yellow Hunt: registra le auto gialle per 1 punto."
      ],
      [
        "Scegli una skin",
        "Personalizza l'estetica dell'app. Le skin cambiano i colori, i materiali e le animazioni dei tuoi contatori."
      ],
      [
        "Scegli la lingua",
        "Apri il menu del mappamondo per scegliere la lingua."
      ],
      [
        "Imposta l'atmosfera",
        "Passa dalla modalità chiara a quella scura quando vuoi."
      ],
      [
        "Inizia da capo",
        "Usa azzera ogni volta che vuoi riportare i contatori a zero per iniziare una nuova partita."
      ]
    ],
    navCounters: "Contatori",
    navSports: "Sport",
    navHistory: "Cronologia",
    navGames: "Giochi",
    navSettings: "Impostaz.",
    sportsHeroTitle: "Tieni traccia di ogni punto.",
    chooseSport: "Scegli uno Sport",
    chooseSportDesc: "Scegli un gioco per registrare i punti",
    sportBasketball: "Basket",
    descBasketball: "Tiro libero · Canestro · Tripla",
    sportSoccer: "Calcio",
    descSoccer: "Gol in casa e trasferta",
    sportTennis: "Tennis",
    descTennis: "Love · 15 · 30 · 40 · Parità · Vantaggio",
    sportFootball: "Football Am.",
    descFootball: "TD, FG e Safety",
    sportF1: "Formula 1",
    descF1: "Podi e punti",
    sportBaseball: "Baseball",
    descBaseball: "Punti in casa e trasferta",
    sportHockey: "Hockey Ghiaccio",
    descHockey: "Gol sul ghiaccio",
    sportVolleyball: "Pallavolo",
    descVolleyball: "Punti e set",
    cancelBtn: "Annulla",
    sportGuide: "Assegna punti con i pulsanti. Tocca il nome della squadra per rinominarla.",
    endGame: "Termina Partita",
    historyHeroTitle: "La tua storia di conteggi.",
    comingSoon: "In arrivo",
    historyDesc: "La cronologia mostrerà la tua attività nel tempo: serie, totali giornalieri e record personali.",
    gamesHero: "Minigiochi",
    gamesHeroTitle: "Gioca e conta.",
    gameCarHunt: "Caccia all'auto",
    settingsHeroTitle: "Preferenze.",
    settingsAppearance: "Aspetto",
    settingsDarkMode: "Modalità Scura",
    settingsSkin: "Tema",
    skinDefault: "Predefinito",
    settingsLanguage: "Lingua",
    settingsGeneral: "Generale",
    chooseSkin: "Scegli un Tema",
    chooseSkinDesc: "Seleziona uno stile visivo",
    skinDefaultName: "Predefinito (Liquid Glass)",
    skinDefaultDesc: "La straordinaria estetica moderna",
    skinClassic: "Classico",
    skinClassicDesc: "Pulito, piatto e semplice",
    skinGlitched: "Glitched",
    skinGlitchedDesc: "Vibrazioni cyberpunk caotiche",
    skinNeon: "Neon",
    skinNeonDesc: "Colori synthwave vivaci",
    skinOcean: "Oceano",
    skinOceanDesc: "Blu mare profondo e acquamarina",
    skinNature: "Natura",
    skinNatureDesc: "Verdi rilassanti e toni organici",
    skinSunset: "Tramonto",
    skinSunsetDesc: "Crepuscolo vibrante",
    skinSpace: "Spazio",
    skinSpaceDesc: "Cosmo profondo con stelle",
    skinMinimal: "Minimale",
    skinMinimalDesc: "Focus monocromatico ultra-pulito",
    skinRetro: "Retro",
    skinRetroDesc: "Estetica nostalgica arcade a 8 bit",
    viewOnGithub: "Vedi su GitHub",
    prevBtn: "Indietro",
    brainrotHint: "Suggerimento: Scorri fino in fondo al menu delle lingue per una sorpresa... 💀",
    quickCount: "Conteggio Rapido",
    finishBtn: "Finito",
    saveCounterTitle: "Salva Contatore",
    namePlaceholder: "Dai un nome...",
    discardBtn: "Scarta",
    saveBtn: "Salva"
  },
  fr: {
    language: "Langue",
    yourCounters: "Vos compteurs",
    heroTitle: "Gardez une trace de ce qui compte.",
    addCounter: "Ajouter un compteur",
    howToPlay: "Comment jouer",
    howItWorks: "Comment ça marche",
    sportTutorial: "Transformez vos compteurs en tableaux d'affichage spécialisés. Chaque sport propose des règles de score personnalisées et un thème unique.",
    huntTutorial: "Le jeu classique des voyages en voiture. Choisissez une couleur, repérez des voitures et tapez pour marquer des points. Rivalisez pour voir qui en repère le plus !",
    skinTutorial: "Personnalisez l'esthétique de votre application. Les thèmes modifient les couleurs, les matériaux et les animations de vos compteurs.",
    guideCopy: "Repérez une voiture jaune pour <strong>1 point</strong>. Enregistrez chaque trouvaille et voyez qui en trouve le plus.",
    totalCount: "Compte total",
    activeCounters: "Compteurs actifs",
    renameHint: "Cliquez sur le nom d'un compteur pour le renommer",
    keepItSimple: "Faites simple.",
    viewTutorial: "Revoir le tutoriel",
    quickTour: "VISITE RAPIDE",
    skipIntro: "Passer l'intro",
    continue: "Continuer",
    finish: "Terminer",
    tip: "ASTUCE",
    play: "JEU",
    car: "Voiture",
    tapToAdjust: "Appuyez pour ajuster",
    untitled: "Compteur sans titre",
    counter: "Compteur",
    resetConfirm: "Remettre tous les compteurs à zéro ?",
    emptyTitle: "Votre espace compteur est prêt.",
    emptyCopy: "Ajoutez un compteur pour commencer.",
    chooseLanguage: "Choisir la langue",
    darkMode: "Passer en mode sombre",
    lightMode: "Passer en mode clair",
    activateHunt: "Activer le mode Yellow Hunt",
    exitHunt: "Quitter le mode Yellow Hunt",
    resetAll: "Réinitialiser tous les compteurs",
    counterName: "Nom du compteur",
    searchCounters: "Rechercher des compteurs",
    noMatchingCounters: "Aucun compteur ne correspond à votre recherche.",
    aboutCountly: "À propos de Countly",
    aboutDesc: "Créé avec précision par <strong>Iven Singer</strong>.<br><br>Countly est une belle application de comptage moderne. Elle présente une superbe esthétique Liquid Glass, des tableaux d'affichage sportifs spécialisés et des mini-jeux.",
    close: "Fermer",
    resetSport: "Remettre les scores de %s à zéro ?",
    remove: "Supprimer",
    increase: "Augmenter",
    decrease: "Diminuer",
    carAria: "Enregistrer un %s pour",
    tutorials: [
      [
        "Appropriez-le-vous",
        "Ajoutez autant de compteurs que nécessaire, puis donnez-leur un nom pour tout retrouver facilement."
      ],
      [
        "Comptez d'un geste",
        "Utilisez les boutons plus et moins pour ajuster vos nombres. Votre progression est enregistrée automatiquement."
      ],
      [
        "Essayez le mode Sport",
        "Appuyez sur le bouton trophée 🏆 pour choisir un sport — Basket-ball, Football ou Tennis. Chacun a ses propres boutons de score et couleurs."
      ],
      [
        "Essayez Yellow Hunt",
        "Activez Yellow Hunt pour le jeu de route : les voitures jaunes valent 1 point."
      ],
      [
        "Choisir un thème",
        "Personnalisez l'esthétique de votre application. Les thèmes modifient les couleurs, les matériaux et les animations de vos compteurs."
      ],
      [
        "Choisissez votre langue",
        "Ouvrez le menu globe pour choisir votre langue."
      ],
      [
        "Plantez le décor",
        "Basculez entre le mode clair et sombre à tout moment."
      ],
      [
        "Repartez à zéro",
        "Utilisez la réinitialisation pour remettre tous les compteurs à zéro et commencer une nouvelle partie."
      ]
    ],
    navCounters: "Compteurs",
    navSports: "Sports",
    navHistory: "Historique",
    navGames: "Jeux",
    navSettings: "Réglages",
    sportsHeroTitle: "Suivez chaque score.",
    chooseSport: "Choisir un Sport",
    chooseSportDesc: "Choisissez un jeu pour enregistrer les scores",
    sportBasketball: "Basket",
    descBasketball: "Lancer franc · Panier · 3-Points",
    sportSoccer: "Football",
    descSoccer: "Buts Domicile & Extérieur",
    sportTennis: "Tennis",
    descTennis: "Love · 15 · 30 · 40 · Égalité · Avantage",
    sportFootball: "Football Am.",
    descFootball: "TDs, FGs et Safeties",
    sportF1: "Formule 1",
    descF1: "Podiums et points",
    sportBaseball: "Baseball",
    descBaseball: "Points Domicile & Extérieur",
    sportHockey: "Hockey sur glace",
    descHockey: "Buts sur la glace",
    sportVolleyball: "Volley-ball",
    descVolleyball: "Points et sets",
    cancelBtn: "Annuler",
    sportGuide: "Marquez des points avec les boutons. Touchez le nom de l'équipe pour la renommer.",
    endGame: "Fin de partie",
    historyHeroTitle: "Votre histoire de comptage.",
    comingSoon: "Bientôt disponible",
    historyDesc: "L'historique montrera votre activité au fil du temps : séries, totaux par jour et records personnels.",
    gamesHero: "Mini-Jeux",
    gamesHeroTitle: "Jouez et comptez.",
    gameCarHunt: "Chasse aux Voitures",
    settingsHeroTitle: "Préférences.",
    settingsAppearance: "Apparence",
    settingsDarkMode: "Mode Sombre",
    settingsSkin: "Thème",
    skinDefault: "Par défaut",
    settingsLanguage: "Langue",
    settingsGeneral: "Général",
    chooseSkin: "Choisir un Thème",
    chooseSkinDesc: "Sélectionnez un style visuel",
    skinDefaultName: "Par défaut (Liquid Glass)",
    skinDefaultDesc: "L'esthétique moderne époustouflante",
    skinClassic: "Classique",
    skinClassicDesc: "Propre, plat et simple",
    skinGlitched: "Glitched",
    skinGlitchedDesc: "Ambiance cyberpunk chaotique",
    skinNeon: "Néon",
    skinNeonDesc: "Couleurs synthwave vibrantes",
    skinOcean: "Océan",
    skinOceanDesc: "Bleu mer profonde et aigue-marine",
    skinNature: "Nature",
    skinNatureDesc: "Verts apaisants et tons organiques",
    skinSunset: "Coucher de soleil",
    skinSunsetDesc: "Crépuscule vibrant",
    skinSpace: "Espace",
    skinSpaceDesc: "Cosmos profond avec étoiles",
    skinMinimal: "Minimal",
    skinMinimalDesc: "Mise au point monochrome ultra-propre",
    skinRetro: "Rétro",
    skinRetroDesc: "Esthétique nostalgique d'arcade 8 bits",
    viewOnGithub: "Voir sur GitHub",
    prevBtn: "Retour",
    brainrotHint: "Astuce : Faites défiler jusqu'en bas du menu des langues pour une surprise... 💀",
    quickCount: "Comptage Rapide",
    finishBtn: "Terminer",
    saveCounterTitle: "Enregistrer le compteur",
    namePlaceholder: "Nommez ce compteur...",
    discardBtn: "Ignorer",
    saveBtn: "Enregistrer"
  },
  pt: {
    language: "Idioma",
    yourCounters: "Seus contadores",
    heroTitle: "Acompanhe o que importa.",
    addCounter: "Adicionar contador",
    howToPlay: "Como jogar",
    howItWorks: "Como funciona",
    sportTutorial: "Transforme seus contadores em placares especializados. Cada esporte apresenta regras de pontuação personalizadas e um tema único.",
    huntTutorial: "O clássico jogo de viagem. Escolha uma cor, encontre carros e toque para marcar pontos. Compita para ver quem encontra mais!",
    skinTutorial: "Personalize a estética do seu aplicativo. Os visuais mudam as cores, os materiais e as animações de seus contadores.",
    guideCopy: "Encontre um carro amarelo por <strong>1 ponto</strong>. Registre cada descoberta e veja quem encontra mais.",
    totalCount: "Contagem total",
    activeCounters: "Contadores ativos",
    renameHint: "Clique no nome de um contador para renomeá-lo",
    keepItSimple: "Mantenha a simplicidade.",
    viewTutorial: "Ver tutorial novamente",
    quickTour: "TOUR RÁPIDO",
    skipIntro: "Pular introdução",
    continue: "Continuar",
    finish: "Concluir",
    tip: "DICA",
    play: "JOGO",
    car: "Carro",
    tapToAdjust: "Toque para ajustar",
    untitled: "Contador sem título",
    counter: "Contador",
    resetConfirm: "Zerar todos os contadores?",
    emptyTitle: "Seu espaço de contador está pronto.",
    emptyCopy: "Adicione um contador para começar.",
    chooseLanguage: "Escolher idioma",
    darkMode: "Mudar para modo escuro",
    lightMode: "Mudar para modo claro",
    activateHunt: "Ativar modo Yellow Hunt",
    exitHunt: "Sair do modo Yellow Hunt",
    resetAll: "Zerar todos os contadores",
    counterName: "Nome do contador",
    searchCounters: "Buscar contadores",
    noMatchingCounters: "Nenhum contador corresponde à sua busca.",
    aboutCountly: "Sobre o Countly",
    aboutDesc: "Criado com precisão por <strong>Iven Singer</strong>.<br><br>Countly é um aplicativo de contagem moderno e bonito. Possui uma impressionante estética Liquid Glass, placares esportivos especializados e minijogos.",
    close: "Fechar",
    resetSport: "Zerar pontuações de %s?",
    remove: "Remover",
    increase: "Aumentar",
    decrease: "Diminuir",
    carAria: "Registrar um %s para",
    tutorials: [
      [
        "Deixe com a sua cara",
        "Adicione quantos contadores precisar e dê um nome a eles para facilitar a busca."
      ],
      [
        "Conte com um toque",
        "Use os botões de mais e menos em qualquer cartão para manter seus números em movimento. Seu progresso é salvo automaticamente."
      ],
      [
        "Experimente o Modo Esporte",
        "Toque no botão de troféu 🏆 para escolher um esporte — Basquete, Futebol ou Tênis. Cada esporte tem seus próprios botões de pontuação e tema de cor."
      ],
      [
        "Experimente Yellow Hunt",
        "Ative Yellow Hunt para o jogo de estrada: carros amarelos valem 1 ponto."
      ],
      [
        "Escolher visual",
        "Personalize a estética do seu aplicativo. Os visuais mudam as cores, os materiais e as animações de seus contadores."
      ],
      [
        "Escolha o seu idioma",
        "Abra o menu do globo para escolher o seu idioma."
      ],
      [
        "Defina o clima",
        "Alterne entre o modo claro e escuro quando quiser."
      ],
      [
        "Comece do zero",
        "Use a redefinição sempre que quiser zerar todos os contadores e começar uma nova rodada."
      ]
    ],
    navCounters: "Contadores",
    navSports: "Esportes",
    navHistory: "Histórico",
    navGames: "Jogos",
    navSettings: "Ajustes",
    sportsHeroTitle: "Acompanhe cada ponto.",
    chooseSport: "Escolha um Esporte",
    chooseSportDesc: "Escolha um jogo para registrar pontos",
    sportBasketball: "Basquete",
    descBasketball: "Lance Livre · Cesta · 3 Pontos",
    sportSoccer: "Futebol",
    descSoccer: "Gols de Mandante e Visitante",
    sportTennis: "Tênis",
    descTennis: "Love · 15 · 30 · 40 · Deuce · Vantagem",
    sportFootball: "Futebol Am.",
    descFootball: "TDs, FGs e Safeties",
    sportF1: "Fórmula 1",
    descF1: "Pódios e pontos",
    sportBaseball: "Beisebol",
    descBaseball: "Corridas de Mandante e Visitante",
    sportHockey: "Hóquei no Gelo",
    descHockey: "Gols no gelo",
    sportVolleyball: "Vôlei",
    descVolleyball: "Pontos e sets",
    cancelBtn: "Cancelar",
    sportGuide: "Marque pontos com os botões de ação. Toque no nome do time para renomeá-lo.",
    endGame: "Fim de Jogo",
    historyHeroTitle: "Sua história de contagem.",
    comingSoon: "Em breve",
    historyDesc: "O histórico mostrará sua atividade ao longo do tempo: sequências, totais por dia e recordes pessoais.",
    gamesHero: "Minijogos",
    gamesHeroTitle: "Jogue e conte.",
    gameCarHunt: "Caça aos Carros",
    settingsHeroTitle: "Preferências.",
    settingsAppearance: "Aparência",
    settingsDarkMode: "Modo Escuro",
    settingsSkin: "Visual",
    skinDefault: "Padrão",
    settingsLanguage: "Idioma",
    settingsGeneral: "Geral",
    chooseSkin: "Escolher Visual",
    chooseSkinDesc: "Selecione um estilo visual",
    skinDefaultName: "Padrão (Liquid Glass)",
    skinDefaultDesc: "A deslumbrante estética moderna",
    skinClassic: "Clássico",
    skinClassicDesc: "Limpo, plano e simples",
    skinGlitched: "Glitched",
    skinGlitchedDesc: "Vibrações cyberpunk caóticas",
    skinNeon: "Neon",
    skinNeonDesc: "Cores synthwave vibrantes",
    skinOcean: "Oceano",
    skinOceanDesc: "Azul mar profundo e água-marinha",
    skinNature: "Natureza",
    skinNatureDesc: "Verdes calmantes e tons orgânicos",
    skinSunset: "Pôr do sol",
    skinSunsetDesc: "Crepúsculo vibrante",
    skinSpace: "Espaço",
    skinSpaceDesc: "Cosmos profundo com estrelas",
    skinMinimal: "Minimalista",
    skinMinimalDesc: "Foco monocromático ultra-limpo",
    skinRetro: "Retrô",
    skinRetroDesc: "Estética nostálgica de fliperama 8 bits",
    viewOnGithub: "Ver no GitHub",
    prevBtn: "Voltar",
    brainrotHint: "Dica: Role até o final do menu de idiomas para uma surpresa... 💀",
    quickCount: "Contagem Rápida",
    finishBtn: "Terminar",
    saveCounterTitle: "Salvar Contador",
    namePlaceholder: "Nomeie este contador...",
    discardBtn: "Descartar",
    saveBtn: "Salvar"
  },
  ko: {
    language: "언어",
    yourCounters: "카운터",
    heroTitle: "중요한 것을 기록하세요.",
    addCounter: "새 카운터 추가",
    howToPlay: "플레이 방법",
    howItWorks: "작동 방식",
    sportTutorial: "카운터를 전문 점수판으로 변환하세요. 각 스포츠마다 사용자 지정 채점 규칙과 독특한 테마가 있습니다.",
    huntTutorial: "클래식 로드 트립 게임. 색상을 선택하고 자동차를 찾아 터치하여 점수를 얻으세요. 누가 가장 많이 찾는지 경쟁해 보세요!",
    skinTutorial: "앱의 미학을 맞춤 설정하세요. 스킨은 카운터의 색상, 질감 및 애니메이션을 변경합니다.",
    guideCopy: "노란색 자동차를 찾으면 <strong>1점</strong>입니다. 찾을 때마다 기록하고 누가 가장 많이 찾는지 확인하세요.",
    totalCount: "총 개수",
    activeCounters: "활성 카운터",
    renameHint: "이름을 변경하려면 카운터 이름을 클릭하세요",
    keepItSimple: "간단하게 유지하세요.",
    viewTutorial: "튜토리얼 다시 보기",
    quickTour: "빠른 둘러보기",
    skipIntro: "인트로 건너뛰기",
    continue: "계속",
    finish: "완료",
    tip: "팁",
    play: "플레이",
    car: "자동차",
    tapToAdjust: "터치하여 조정",
    untitled: "제목 없는 카운터",
    counter: "카운터",
    resetConfirm: "모든 카운터를 0으로 초기화하시겠습니까?",
    emptyTitle: "카운터 공간이 준비되었습니다.",
    emptyCopy: "시작하려면 카운터를 추가하세요.",
    chooseLanguage: "언어 선택",
    darkMode: "다크 모드로 전환",
    lightMode: "라이트 모드로 전환",
    activateHunt: "Yellow Hunt 모드 활성화",
    exitHunt: "Yellow Hunt 모드 종료",
    resetAll: "모든 카운터 초기화",
    counterName: "카운터 이름",
    searchCounters: "카운터 검색",
    noMatchingCounters: "검색과 일치하는 카운터가 없습니다.",
    aboutCountly: "Countly 정보",
    aboutDesc: "<strong>Iven Singer</strong>가 정밀하게 제작했습니다.<br><br>Countly는 아름답고 현대적인 카운터 앱입니다. 놀라운 Liquid Glass 미학, 특수 스포츠 점수판 및 미니 게임을 제공합니다.",
    close: "닫기",
    resetSport: "%s 점수를 0으로 초기화하시겠습니까?",
    remove: "제거",
    increase: "증가",
    decrease: "감소",
    carAria: "기록할 %s (대상:",
    tutorials: [
      [
        "나만의 설정",
        "필요한 만큼 카운터를 추가하고 각각 이름을 지정하여 쉽게 찾을 수 있게 하세요."
      ],
      [
        "터치로 카운트",
        "카드의 플러스 및 마이너스 컨트롤을 사용하여 숫자를 변경하세요. 진행 상황이 자동으로 저장됩니다."
      ],
      [
        "스포츠 모드 체험",
        "🏆 트로피 버튼을 눌러 농구, 축구 또는 테니스 중 스포츠를 선택하세요. 각 스포츠마다 고유한 점수 버튼과 색상 테마가 있습니다."
      ],
      [
        "Yellow Hunt 체험",
        "도로 게임을 위해 Yellow Hunt를 켜세요: 노란색 자동차는 1점입니다."
      ],
      [
        "스킨 선택",
        "앱의 미학을 맞춤 설정하세요. 스킨은 카운터의 색상, 질감 및 애니메이션을 변경합니다."
      ],
      [
        "언어 선택",
        "지구본 메뉴를 열어 언어를 선택하세요."
      ],
      [
        "분위기 설정",
        "원할 때마다 라이트 모드와 다크 모드 간에 전환하세요."
      ],
      [
        "새로 시작",
        "모든 카운터를 0으로 되돌리고 새로운 라운드를 시작하고 싶을 때 초기화하세요."
      ]
    ],
    navCounters: "카운터",
    navSports: "스포츠",
    navHistory: "기록",
    navGames: "게임",
    navSettings: "설정",
    sportsHeroTitle: "모든 점수를 기록하세요.",
    chooseSport: "스포츠 선택",
    chooseSportDesc: "점수 기록을 시작할 게임을 선택하세요",
    sportBasketball: "농구",
    descBasketball: "자유투 · 야투 · 3점슛",
    sportSoccer: "축구",
    descSoccer: "홈 & 어웨이 골",
    sportTennis: "테니스",
    descTennis: "러브 · 15 · 30 · 40 · 듀스 · 어드밴티지",
    sportFootball: "미식축구",
    descFootball: "터치다운, 필드골, 세이프티",
    sportF1: "포뮬러 1",
    descF1: "포디움 마감 및 포인트",
    sportBaseball: "야구",
    descBaseball: "홈 & 어웨이 득점",
    sportHockey: "아이스 하키",
    descHockey: "아이스링크 골",
    sportVolleyball: "배구",
    descVolleyball: "점수 및 세트",
    cancelBtn: "취소",
    sportGuide: "액션 버튼을 사용하여 점수를 냅니다. 팀 이름을 탭하여 이름을 변경하세요.",
    endGame: "게임 종료",
    historyHeroTitle: "당신의 카운팅 스토리.",
    comingSoon: "곧 출시 예정",
    historyDesc: "기록 탭에서 시간에 따른 카운팅 활동을 볼 수 있습니다. 연속 기록, 일일 총계 및 개인 최고 기록.",
    gamesHero: "미니 게임",
    gamesHeroTitle: "플레이하고 세어보세요.",
    gameCarHunt: "자동차 사냥",
    settingsHeroTitle: "환경 설정.",
    settingsAppearance: "모양",
    settingsDarkMode: "다크 모드",
    settingsSkin: "스킨",
    skinDefault: "기본값",
    settingsLanguage: "언어",
    settingsGeneral: "일반",
    chooseSkin: "스킨 선택",
    chooseSkinDesc: "Countly의 시각적 스타일을 선택하세요",
    settingsAppearance: "유리",
    appearanceStandard: "균형 잡힌",
    chooseAppearance: "유리 외관",
    chooseAppearanceDesc: "리퀴드 글래스 강도 선택",
    appearanceClearName: "투명함",
    appearanceClearDesc: "배경이 더 잘 보입니다",
    appearanceStandardName: "균형 잡힌",
    appearanceStandardDesc: "기본 Countly 스타일",
    appearanceTintedName: "불투명한",
    appearanceTintedDesc: "더 단단하고 부드러운",
    skinDefaultName: "기본값 (Liquid Glass)",
    skinDefaultDesc: "놀라운 현대적 미학",
    skinClassic: "클래식",
    skinClassicDesc: "깔끔하고 평평하며 단순함",
    skinGlitched: "글리치",
    skinGlitchedDesc: "혼란스러운 사이버펑크 분위기",
    skinNeon: "네온",
    skinNeonDesc: "생생한 신스웨이브 색상",
    skinOcean: "오션",
    skinOceanDesc: "심해의 푸른색과 아쿠아마린",
    skinNature: "자연",
    skinNatureDesc: "마음을 진정시키는 녹색과 유기적인 색조",
    skinSunset: "선셋",
    skinSunsetDesc: "생생한 황혼과 신스웨이브 분위기",
    skinSpace: "우주",
    skinSpaceDesc: "별이 떠다니는 깊은 우주",
    skinMinimal: "미니멀",
    skinMinimalDesc: "매우 깔끔한 단색 포커스",
    skinRetro: "레트로",
    skinRetroDesc: "향수를 불러일으키는 8비트 아케이드 미학",
    viewOnGithub: "GitHub에서 보기",
    prevBtn: "이전",
    brainrotHint: "힌트: 언어 메뉴 하단으로 스크롤하여 깜짝 선물을 확인하세요... 💀",
    quickCount: "빠른 카운트",
    finishBtn: "완료",
    saveCounterTitle: "카운터 저장",
    namePlaceholder: "카운터 이름...",
    discardBtn: "취소",
    saveBtn: "저장"
  },
  ja: {
    language: "言語",
    yourCounters: "あなたのカウンター",
    heroTitle: "大切なことを記録しましょう。",
    addCounter: "新しいカウンターを追加",
    howToPlay: "遊び方",
    howItWorks: "使い方",
    sportTutorial: "カウンターを専用のスコアボードに変換します。各スポーツにはカスタムのスコアリングルールとユニークなテーマがあります。",
    huntTutorial: "クラシックなロードトリップゲーム。色を選び、車を見つけてタップしてポイントを獲得します。誰が一番多く見つけるか競いましょう！",
    skinTutorial: "アプリのデザインをカスタマイズします。スキンはカウンターの色、素材、アニメーションを変更します。",
    guideCopy: "黄色い車を見つけると<strong>1ポイント</strong>。見つけた車を記録して、誰が一番多く見つけるか競いましょう。",
    totalCount: "合計カウント",
    activeCounters: "アクティブなカウンター",
    renameHint: "カウンターの名前をクリックして名前を変更",
    keepItSimple: "シンプルに保つ。",
    viewTutorial: "チュートリアルをもう一度見る",
    quickTour: "クイックツアー",
    skipIntro: "スキップ",
    continue: "続ける",
    finish: "完了",
    tip: "ヒント",
    play: "プレイ",
    car: "車",
    tapToAdjust: "タップして調整",
    untitled: "無題のカウンター",
    counter: "カウンター",
    resetConfirm: "すべてのカウンターをゼロにリセットしますか？",
    emptyTitle: "カウンターの準備ができました。",
    emptyCopy: "開始するにはカウンターを追加してください。",
    chooseLanguage: "言語を選択",
    darkMode: "ダークモードに切り替え",
    lightMode: "ライトモードに切り替え",
    activateHunt: "Yellow Hunt モードを有効化",
    exitHunt: "Yellow Hunt モードを終了",
    resetAll: "すべてのカウンターをリセット",
    counterName: "カウンター名",
    searchCounters: "カウンターを検索",
    noMatchingCounters: "検索に一致するカウンターはありません。",
    aboutCountly: "Countlyについて",
    aboutDesc: "<strong>Iven Singer</strong>によって精密に作成されました。<br><br>Countlyは美しくモダンなカウンターアプリです。見事なリキッドガラスの美学、専用のスポーツスコアボード、ミニゲームを備えています。",
    close: "閉じる",
    resetSport: "%sのスコアをゼロにリセットしますか？",
    remove: "削除",
    increase: "増やす",
    decrease: "減らす",
    carAria: "%sを記録：",
    tutorials: [
      [
        "自分らしく",
        "必要なだけカウンターを追加し、それぞれに名前を付けて、すべてを簡単に見つけられるようにします。"
      ],
      [
        "タップでカウント",
        "カードのプラスとマイナスのコントロールを使用して数値を変更します。進行状況は自動的に保存されます。"
      ],
      [
        "スポーツモードを試す",
        "🏆 トロフィーボタンをタップして、バスケットボール、サッカー、またはテニスからスポーツを選択します。各スポーツには独自のスコアボタンとカラーテーマがあります。"
      ],
      [
        "Yellow Huntを試す",
        "ロードゲームのためにYellow Huntをオンにします：黄色い車で1ポイント。"
      ],
      [
        "スキンを選択",
        "アプリのデザインをカスタマイズします。スキンはカウンターの色、素材、アニメーションを変更します。"
      ],
      [
        "言語を選択",
        "地球儀メニューを開いて言語を選択してください。"
      ],
      [
        "ムードを設定",
        "いつでもライトモードとダークモードを切り替えます。"
      ],
      [
        "新しく始める",
        "すべてのカウンターをゼロに戻して新しいラウンドを始めたいときは、リセットを使用してください。"
      ]
    ],
    navCounters: "カウンター",
    navSports: "スポーツ",
    navHistory: "履歴",
    navGames: "ゲーム",
    navSettings: "設定",
    sportsHeroTitle: "すべてのスコアを記録。",
    chooseSport: "スポーツを選択",
    chooseSportDesc: "スコアを記録するゲームを選択してください",
    sportBasketball: "バスケットボール",
    descBasketball: "フリースロー · フィールドゴール · 3ポイント",
    sportSoccer: "サッカー",
    descSoccer: "ホーム＆アウェイのゴール",
    sportTennis: "テニス",
    descTennis: "ラブ · 15 · 30 · 40 · デュース · アドバンテージ",
    sportFootball: "アメリカンフットボール",
    descFootball: "タッチダウン、フィールドゴール、セーフティ",
    sportF1: "F1",
    descF1: "表彰台とポイント",
    sportBaseball: "野球",
    descBaseball: "ホーム＆アウェイの得点",
    sportHockey: "アイスホッケー",
    descHockey: "氷上のゴール",
    sportVolleyball: "バレーボール",
    descVolleyball: "ポイントとセット",
    cancelBtn: "キャンセル",
    sportGuide: "アクションボタンを使用してポイントを獲得します。チーム名をタップして名前を変更します。",
    endGame: "ゲーム終了",
    historyHeroTitle: "あなたのカウントストーリー。",
    comingSoon: "近日公開",
    historyDesc: "履歴には、時間の経過に伴うカウントアクティビティが表示されます。連続記録、1日の合計、自己ベストなど。",
    gamesHero: "ミニゲーム",
    gamesHeroTitle: "遊んで数える。",
    gameCarHunt: "車探し",
    settingsHeroTitle: "設定。",
    settingsAppearance: "外観",
    settingsDarkMode: "ダークモード",
    settingsSkin: "スキン",
    skinDefault: "デフォルト",
    settingsLanguage: "言語",
    settingsGeneral: "一般",
    chooseSkin: "スキンを選択",
    chooseSkinDesc: "Countlyの視覚スタイルを選択してください",
    skinDefaultName: "デフォルト (Liquid Glass)",
    skinDefaultDesc: "見事なモダンな美学",
    skinClassic: "クラシック",
    skinClassicDesc: "クリーンでフラットでシンプル",
    skinGlitched: "グリッチ",
    skinGlitchedDesc: "混沌としたサイバーパンクの雰囲気",
    skinNeon: "ネオン",
    skinNeonDesc: "鮮やかなシンセウェーブカラー",
    skinOcean: "オーシャン",
    skinOceanDesc: "深海の青とアクアマリン",
    skinNature: "ネイチャー",
    skinNatureDesc: "落ち着いた緑と有機的な色調",
    skinSunset: "サンセット",
    skinSunsetDesc: "鮮やかな夕暮れとシンセウェーブの雰囲気",
    skinSpace: "スペース",
    skinSpaceDesc: "星が浮かぶ深い宇宙",
    skinMinimal: "ミニマル",
    skinMinimalDesc: "超クリーンなモノクロフォーカス",
    skinRetro: "レトロ",
    skinRetroDesc: "ノスタルジックな8ビットアーケードの美学",
    viewOnGithub: "GitHubで表示",
    prevBtn: "戻る",
    brainrotHint: "ヒント：言語メニューの一番下までスクロールしてサプライズを見つけてください... 💀",
    quickCount: "クイックカウント",
    finishBtn: "完了",
    saveCounterTitle: "カウンターを保存",
    namePlaceholder: "カウンター名を入力...",
    discardBtn: "破棄",
    saveBtn: "保存"
  },
  tr: {
    language: "Dil",
    yourCounters: "Sayaçlarınız",
    heroTitle: "Sizin için önemli olanı takip edin.",
    addCounter: "Yeni sayaç ekle",
    howToPlay: "Nasıl oynanır",
    howItWorks: "Nasıl çalışır",
    sportTutorial: "Sayaçlarınızı özel skor tablolarına dönüştürün. Her sporun özel puanlama kuralları ve benzersiz bir teması vardır.",
    huntTutorial: "Klasik yolculuk oyunu. Bir renk seçin, arabaları bulun ve puan kazanmak için dokunun. Kimin daha çok bulduğunu görmek için yarışın!",
    skinTutorial: "Uygulamanızın estetiğini kişiselleştirin. Görünümler sayaçlarınızın renklerini, malzemelerini ve animasyonlarını değiştirir.",
    guideCopy: "Sarı bir araba bulursanız <strong>1 puan</strong>. Her bulduğunuzu kaydedin ve kimin daha çok bulduğunu görün.",
    totalCount: "Toplam sayı",
    activeCounters: "Aktif sayaçlar",
    renameHint: "Yeniden adlandırmak için sayacın adına tıklayın",
    keepItSimple: "Basit tutun.",
    viewTutorial: "Eğitimi tekrar izle",
    quickTour: "KISA TUR",
    skipIntro: "Tanıtımı atla",
    continue: "Devam et",
    finish: "Bitir",
    tip: "İPUCU",
    play: "OYUN",
    car: "Araba",
    tapToAdjust: "Ayarlamak için dokunun",
    untitled: "İsimsiz sayaç",
    counter: "Sayaç",
    resetConfirm: "Tüm sayaçlar sıfırlansın mı?",
    emptyTitle: "Sayaç alanınız hazır.",
    emptyCopy: "Başlamak için bir sayaç ekleyin.",
    chooseLanguage: "Dil seçin",
    darkMode: "Karanlık moda geç",
    lightMode: "Aydınlık moda geç",
    activateHunt: "Yellow Hunt modunu etkinleştir",
    exitHunt: "Yellow Hunt modundan çık",
    resetAll: "Tüm sayaçları sıfırla",
    counterName: "Sayaç adı",
    searchCounters: "Sayaçları ara",
    noMatchingCounters: "Aramanızla eşleşen sayaç yok.",
    aboutCountly: "Countly Hakkında",
    aboutDesc: "<strong>Iven Singer</strong> tarafından hassasiyetle oluşturuldu.<br><br>Countly, önemli olanı takip etmek için tasarlanmış güzel, modern bir sayaç uygulamasıdır. Çarpıcı Likit Cam estetiği, özel spor skor tabloları ve mini oyunlar sunar.",
    close: "Kapat",
    resetSport: "%s skorları sıfırlansın mı?",
    remove: "Kaldır",
    increase: "Artır",
    decrease: "Azalt",
    carAria: "Şunun için bir %s kaydet:",
    tutorials: [
      [
        "Size özel yapın",
        "İhtiyacınız olduğu kadar sayaç ekleyin, ardından her birine isim verin ki her şeyi bulmak kolay olsun."
      ],
      [
        "Bir dokunuşla sayın",
        "Sayıları değiştirmek için herhangi bir karttaki artı ve eksi kontrollerini kullanın. İlerlemeniz otomatik olarak kaydedilir."
      ],
      [
        "Spor Modunu Deneyin",
        "🏆 kupa düğmesine dokunarak bir spor seçin — Basketbol, Futbol veya Tenis. Her sporun kendi puanlama düğmeleri ve renk teması vardır."
      ],
      [
        "Yellow Hunt'ı Deneyin",
        "Yol oyunu için Yellow Hunt'ı açın: sarı arabalar 1 puan değerindedir."
      ],
      [
        "Görünüm Seç",
        "Uygulamanızın estetiğini kişiselleştirin. Görünümler sayaçlarınızın renklerini, malzemelerini ve animasyonlarını değiştirir."
      ],
      [
        "Dilinizi seçin",
        "Dilinizi seçmek için küre menüsünü açın."
      ],
      [
        "Ruh halini ayarlayın",
        "İstediğiniz zaman aydınlık ve karanlık mod arasında geçiş yapın."
      ],
      [
        "Yeniden başla",
        "Tüm sayaçları sıfıra döndürmek ve yeni bir tura başlamak istediğinizde sıfırlamayı kullanın."
      ]
    ],
    navCounters: "Sayaçlar",
    navSports: "Spor",
    navHistory: "Geçmiş",
    navGames: "Oyunlar",
    navSettings: "Ayarlar",
    sportsHeroTitle: "Her skoru takip et.",
    chooseSport: "Bir Spor Seçin",
    chooseSportDesc: "Skorları takip etmek için bir oyun seç",
    sportBasketball: "Basketbol",
    descBasketball: "Serbest Atış · İsabet · 3 Sayı",
    sportSoccer: "Futbol",
    descSoccer: "İç Saha & Deplasman",
    sportTennis: "Tenis",
    descTennis: "Love · 15 · 30 · 40 · Beraberlik · Avantaj",
    sportFootball: "Am. Futbolu",
    descFootball: "TD, FG ve Safety",
    sportF1: "Formula 1",
    descF1: "Podyumlar ve puanlar",
    sportBaseball: "Beyzbol",
    descBaseball: "İç Saha & Deplasman Sayıları",
    sportHockey: "Buz Hokeyi",
    descHockey: "Buzda goller",
    sportVolleyball: "Voleybol",
    descVolleyball: "Sayılar ve setler",
    cancelBtn: "İptal",
    sportGuide: "Aksiyon butonlarını kullanarak puan ekleyin. Takım ismini değiştirmek için dokunun.",
    endGame: "Oyunu Bitir",
    historyHeroTitle: "Sayma hikayeniz.",
    comingSoon: "Yakında",
    historyDesc: "Geçmiş, zaman içindeki sayma aktivitenizi gösterecektir - seriler, günlük toplamlar ve kişisel rekorlar.",
    gamesHero: "Mini Oyunlar",
    gamesHeroTitle: "Oyna ve say.",
    gameCarHunt: "Araba Avı",
    settingsHeroTitle: "Tercihler.",
    settingsAppearance: "Görünüm",
    settingsDarkMode: "Karanlık Mod",
    settingsSkin: "Tema",
    skinDefault: "Varsayılan",
    settingsLanguage: "Dil",
    settingsGeneral: "Genel",
    chooseSkin: "Tema Seç",
    chooseSkinDesc: "Görsel bir stil seçin",
    skinDefaultName: "Varsayılan (Liquid Glass)",
    skinDefaultDesc: "Çarpıcı modern estetik",
    skinClassic: "Klasik",
    skinClassicDesc: "Temiz, düz ve basit",
    skinGlitched: "Glitched",
    skinGlitchedDesc: "Kaotik siberpunk hissi",
    skinNeon: "Neon",
    skinNeonDesc: "Canlı synthwave renkleri",
    skinOcean: "Okyanus",
    skinOceanDesc: "Derin deniz mavisi ve akuamarin",
    skinNature: "Doğa",
    skinNatureDesc: "Sakinleştirici yeşiller",
    skinSunset: "Gün Batımı",
    skinSunsetDesc: "Canlı alacakaranlık",
    skinSpace: "Uzay",
    skinSpaceDesc: "Yıldızlarla dolu derin kozmos",
    skinMinimal: "Minimal",
    skinMinimalDesc: "Ultra temiz, tek renk odaklı",
    skinRetro: "Retro",
    skinRetroDesc: "Nostaljik 8-bit arcade estetiği",
    viewOnGithub: "GitHub'da Gör",
    prevBtn: "Geri",
    brainrotHint: "İpucu: Sürpriz için dil menüsünün en altına kaydırın... 💀",
    quickCount: "Hızlı Sayım",
    finishBtn: "Bitir",
    saveCounterTitle: "Sayacı Kaydet",
    namePlaceholder: "Bu sayaca ad ver...",
    discardBtn: "Vazgeç",
    saveBtn: "Kaydet"
  },
  "en-online": {
    language: "Language (no cap)",
    yourCounters: "Your Ws & Ls",
    heroTitle: "Keep track of the vibes.",
    addCounter: "Drop a new counter",
    howToPlay: "How to grind",
    howItWorks: "The lore",
    sportTutorial: "Turn your counters into tryhard scoreboards. Each sport got custom rules and drip.",
    huntTutorial: "The OG road trip game. Pick a color, spot cars, tap for Ws. See who's got the most rizz!",
    skinTutorial: "Level up your aesthetic. Skins change the drip, textures, and vibes of your counters.",
    guideCopy: "Spot a yellow car for <strong>1 W</strong>. Log it and see who's the goat.",
    totalCount: "Total Ws",
    activeCounters: "Active grinds",
    renameHint: "Click a counter's name to change its vibe",
    keepItSimple: "Keep it bussin.",
    viewTutorial: "Run that back",
    quickTour: "VIBE CHECK",
    skipIntro: "Nah, skip",
    continue: "Bet",
    finish: "Donezo",
    tip: "LIFE HACK",
    play: "GRIND",
    car: "Whip",
    tapToAdjust: "Tap to fix",
    untitled: "Nameless af",
    counter: "Tracker",
    resetConfirm: "Nuke all counters to zero? Fr?",
    emptyTitle: "Your space is bare af.",
    emptyCopy: "Drop a counter to start cooking.",
    chooseLanguage: "Pick your slang",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    activateHunt: "Turn on Yellow Hunt",
    exitHunt: "Dip out of Yellow Hunt",
    resetAll: "Nuke all counters",
    counterName: "Counter vibe",
    searchCounters: "Search the stash",
    noMatchingCounters: "Ain't finding nothing like that.",
    aboutCountly: "The Tea on Countly",
    aboutDesc: "Cooked up with precision by <strong>Iven Singer</strong>.<br><br>Countly is a cracked counter app. It brings crazy liquid glass drip, sport scoreboards, and mini games.",
    close: "Yeet",
    resetSport: "Nuke %s's score? No cap?",
    remove: "Delete",
    increase: "W",
    decrease: "L",
    carAria: "%s spotted:",
    tutorials: [
      [
        "Make it yours",
        "Add as many trackers as you want and name them so you know what's cooking."
      ],
      [
        "Tap to grind",
        "Use the plus and minus buttons to change the number. Your grind auto-saves."
      ],
      [
        "Try Sport Mode",
        "Tap the 🏆 to pick Basketball, Soccer, or Tennis. Each sport got its own drip and buttons."
      ],
      [
        "Try Yellow Hunt",
        "Turn on Yellow Hunt for road trips: yellow whips are 1 point."
      ],
      [
        "Pick a Skin",
        "Change up your aesthetic. Skins change the colors, textures, and vibes of the app."
      ],
      [
        "Choose Language",
        "Open the globe menu to pick your slang."
      ],
      [
        "Set the Vibe",
        "Swap between Light and Dark mode whenever you want."
      ],
      [
        "Start Fresh",
        "Use reset when you want to nuke everything back to zero and start a new era."
      ]
    ],
    navCounters: "Trackers",
    navSports: "Tryhard",
    navHistory: "Lore",
    navGames: "Grind",
    navSettings: "Vibes",
    sportsHeroTitle: "Track every W.",
    chooseSport: "Pick your poison",
    chooseSportDesc: "Choose a game to start tracking Ws",
    sportBasketball: "Hoops",
    descBasketball: "Free Throw · Field Goal · 3-Pointer",
    sportSoccer: "Futbol",
    descSoccer: "Log Ws for Home & Away",
    sportTennis: "Tennis",
    descTennis: "Love · 15 · 30 · 40 · Deuce · Ad",
    sportFootball: "Gridiron",
    descFootball: "TDs, FGs, and Safeties",
    sportF1: "Formula 1",
    descF1: "Podiums and points",
    sportBaseball: "Baseball",
    descBaseball: "Runs for Home & Away",
    sportHockey: "Hockey",
    descHockey: "Goals on the ice",
    sportVolleyball: "Volleyball",
    descVolleyball: "Points and sets",
    cancelBtn: "Nah",
    sportGuide: "Tap buttons to score. Tap a team name to change the vibe.",
    endGame: "GG",
    historyHeroTitle: "Your lore.",
    comingSoon: "Cooking soon",
    historyDesc: "Lore will show your grind over time — streaks, daily totals, and personal Ws.",
    gamesHero: "Mini Games",
    gamesHeroTitle: "Play and grind.",
    gameCarHunt: "Whip Hunt",
    settingsHeroTitle: "Your vibes.",
    settingsAppearance: "Drip",
    settingsDarkMode: "Dark Mode",
    settingsSkin: "Aesthetic",
    skinDefault: "Vanilla",
    settingsLanguage: "Slang",
    settingsGeneral: "Basic af",
    chooseSkin: "Pick an Aesthetic",
    chooseSkinDesc: "Choose a vibe for Countly",
    skinDefaultName: "Vanilla (Liquid Glass)",
    skinDefaultDesc: "The clean modern drip",
    skinClassic: "Boomer",
    skinClassicDesc: "Clean, flat, simple af",
    skinGlitched: "Glitched",
    skinGlitchedDesc: "Crazy cyberpunk vibes",
    skinNeon: "Neon",
    skinNeonDesc: "Loud synthwave colors",
    skinOcean: "Ocean",
    skinOceanDesc: "Deep sea drip",
    skinNature: "Grass",
    skinNatureDesc: "Go touch grass",
    skinSunset: "Sunset",
    skinSunsetDesc: "Golden hour vibes",
    skinSpace: "Space",
    skinSpaceDesc: "Floating in the cosmos",
    skinMinimal: "Tryhard Minimal",
    skinMinimalDesc: "Sweaty monochrome focus",
    skinRetro: "Retro",
    skinRetroDesc: "Old school 8-bit aesthetic",
    viewOnGithub: "Check the GitHub",
    prevBtn: "Wait, go back",
    brainrotHint: "Pro tip: Scroll to the bottom of the language menu for some crazy drip... 💀",
    quickCount: "Speedrun",
    finishBtn: "Donezo",
    saveCounterTitle: "Keep the receipts",
    namePlaceholder: "Name this vibe...",
    discardBtn: "Trash it",
    saveBtn: "Lock in"
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
  football: {
    emoji: "🏈", name: "Am. Football", defaultTeams: ["Home", "Away"], scoreUnit: "pts",
    actions: [
      { label: "Touchdown", short: "TD", points: 6 },
      { label: "Field Goal", short: "FG", points: 3 },
      { label: "Safety", short: "SAF", points: 2 },
      { label: "2-Pt Conv", short: "2PT", points: 2 },
      { label: "Extra Point", short: "XP", points: 1 },
    ],
    formatScore: (score)        => String(score),
  },
  f1: {
    emoji: "🏎️", name: "Formula 1", defaultTeams: ["Driver 1", "Driver 2"], scoreUnit: "pts",
    actions: [
      { label: "Win (1st)", short: "1ST", points: 25 },
      { label: "2nd Place", short: "2ND", points: 18 },
      { label: "3rd Place", short: "3RD", points: 15 },
      { label: "Fastest Lap", short: "FL", points: 1 },
      { label: "Point", short: "PT", points: 1 },
    ],
    formatScore: (score)        => String(score),
  },
  baseball: {
    emoji: "⚾", name: "Baseball", defaultTeams: ["Home", "Away"], scoreUnit: "runs",
    actions: [
      { label: "Run", short: "RUN", points: 1 },
    ],
    formatScore: (score)        => String(score),
  },
  hockey: {
    emoji: "🏒", name: "Ice Hockey", defaultTeams: ["Home", "Away"], scoreUnit: "goals",
    actions: [
      { label: "Goal", short: "GOAL", points: 1 },
    ],
    formatScore: (score)        => String(score),
  },
  volleyball: {
    emoji: "🏐", name: "Volleyball", defaultTeams: ["Home", "Away"], scoreUnit: "pts",
    actions: [
      { label: "Point", short: "PT", points: 1 },
    ],
    formatScore: (score)        => String(score),
  },
};
const starterCounters = [
  { id: generateId(), name: "Water glasses", count: 4, icon: "💧", createdAt: Date.now() },
  { id: generateId(), name: "Daily steps", count: 1250, icon: "👟", createdAt: Date.now() },
  { id: generateId(), name: "Books read", count: 2, icon: "📚", createdAt: Date.now() },
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

function readCounters(key) {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return null;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : null;
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
let huntColor = localStorage.getItem(HUNT_COLOR_KEY) || "yellow";

let appearance = localStorage.getItem("countlyAppearance") || "standard";
document.documentElement.classList.add("appearance-" + appearance);

let currentSkin = localStorage.getItem(SKIN_KEY) || "default";
let counters = huntMode
  ? savedHuntCounters ?? (isYellowHuntCounters(legacyCounters) ? legacyCounters : createYellowHuntCounters())
  : (isYellowHuntCounters(legacyCounters) ? starterCounters : legacyCounters ?? starterCounters);

const grid = document.querySelector("#counter-grid");
const total = document.querySelector("#total-count");
const active = document.querySelector("#counter-count");
const counterSearch = document.querySelector("#counter-search-input");
const themeToggle = document.querySelector("#settings-theme-row");
const gamesHuntBtn = document.querySelector("#games-hunt-btn");
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
const languageChoices = [...document.querySelectorAll(".lang-row")];
const redoTutorial = document.querySelector("#redo-tutorial");

// Navigation & Tab State
const tabs = {
  counters: document.querySelector("#tab-counters"),
  sports: document.querySelector("#tab-sports"),
  history: document.querySelector("#tab-history"),
  games: document.querySelector("#tab-games"),
  settings: document.querySelector("#tab-settings"),
};
const navButtons = document.querySelectorAll(".nav-tab");
let currentTab = localStorage.getItem("countly-tab") || "counters";

function navigateTo(tabId) {
  currentTab = tabId;
  localStorage.setItem("countly-tab", tabId);
  Object.entries(tabs).forEach(([id, el]) => { el.hidden = id !== tabId; });
  navButtons.forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.tab === tabId);
    if (btn.dataset.tab === tabId) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
  document.body.dataset.tab = tabId;
  applySportMode(); // Ensure sport classes are only active on sports tab
  if (tabId === "sports") { if (sportMode) renderSport(); }
  else if (tabId === "counters") render();
}
navButtons.forEach(btn => btn.addEventListener("click", () => navigateTo(btn.dataset.tab)));

let tutorialIndex = 0;
let searchQuery = "";
let sportMode = false;
let sportType = "basketball";
let sportScores = null;

function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark-mode", dark);
  document.documentElement.classList.toggle("dark-mode", dark);
  
  const metaThemeColor = document.getElementById("meta-theme-color");
  if (metaThemeColor) {
    if (currentSkin === "glitch") {
      metaThemeColor.setAttribute("content", "#000000");
    } else {
      metaThemeColor.setAttribute("content", dark ? "#000000" : "#f5f5f7");
    }
  }

  themeToggle.title = dark ? t("lightMode") : t("darkMode");
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}

function applySkin() {
  document.body.classList.remove("skin-classic", "skin-glitch", "skin-neon", "skin-ocean", "skin-nature", "skin-sunset", "skin-space", "skin-minimal", "skin-retro");
  document.documentElement.classList.remove("skin-classic", "skin-glitch", "skin-neon", "skin-ocean", "skin-nature", "skin-sunset", "skin-space", "skin-minimal", "skin-retro");
  
  if (currentSkin !== "default") {
    document.body.classList.add(`skin-${currentSkin}`);
    document.documentElement.classList.add(`skin-${currentSkin}`);
  }
  
  if (currentSkin === "ocean") {
    startOceanAnimation();
  } else {
    stopOceanAnimation();
  }

  if (currentSkin === "space") {
    startSpaceAnimation();
  } else {
    stopSpaceAnimation();
  }
  
  const dark = document.body.classList.contains("dark-mode");
  const metaThemeColor = document.getElementById("meta-theme-color");
  if (metaThemeColor) {
    if (currentSkin === "glitch") {
      metaThemeColor.setAttribute("content", "#000000");
    } else {
      metaThemeColor.setAttribute("content", dark ? "#000000" : "#f5f5f7");
    }
  }
}

function applyLanguage(language) {
  const selected = languageChoices.some((choice) => choice.dataset.language === language) ? language : "en";
  currentLanguage = selected;
  document.documentElement.lang = selected;
  localizeStarterCounters(selected);
  
  languageChoices.forEach((choice) => {
    choice.querySelector(".lang-check").classList.toggle("is-active", choice.dataset.language === selected);
  });
  
  const selectedChoice = languageChoices.find(c => c.dataset.language === selected);
  if (selectedChoice) {
    document.querySelector("#settings-language-value").textContent = selectedChoice.querySelector(".settings-row-label").textContent;
  }

  if(typeof updateSettingsText === 'function') updateSettingsText();
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n);
    if (element.dataset.i18n === "guideCopy" || element.dataset.i18n === "aboutDesc") element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  
  themeToggle.title = document.body.classList.contains("dark-mode") ? t("lightMode") : t("darkMode");
  themeToggle.setAttribute("aria-label", themeToggle.title);
  document.querySelector("#settings-reset-row").title = t("resetAll");
  document.querySelector("#settings-reset-row").setAttribute("aria-label", t("resetAll"));
  applyHuntMode();
  if (tutorialOverlay && !tutorialOverlay.hidden) showTutorialStep();
  
  if (currentTab === "sports" && sportMode) {
    applySportMode();
    renderSport();
  } else if (currentTab === "counters") {
    render();
  }
  localStorage.setItem(LANGUAGE_KEY, selected);
}

function applyHuntMode() {
  ["hunt-yellow", "hunt-red", "hunt-blue", "hunt-green", "hunt-pink"].forEach(c => {
    document.body.classList.remove(c);
    document.documentElement.classList.remove(c);
  });
  document.body.classList.toggle("hunt-mode", huntMode);
  document.documentElement.classList.toggle("hunt-mode", huntMode);
  if (huntMode) {
    document.body.classList.add(`hunt-${huntColor}`);
    document.documentElement.classList.add(`hunt-${huntColor}`);
  }
}

if (gamesHuntBtn) {
  gamesHuntBtn.addEventListener("click", () => {
    enterHuntMode();
  });
}

function save() {
  localStorage.setItem(huntMode ? HUNT_COUNTERS_KEY : STORAGE_KEY, JSON.stringify(counters));
}
function formatCount(value) { return new Intl.NumberFormat(currentLanguage).format(value); }

// ── Sport mode functions ──────────────────────────────────────────────────────
const summaryLabelTotal  = document.querySelector("#total-count + .summary-label");
const summaryLabelActive = document.querySelector("#counter-count + .summary-label");

function createSportScores(type) {
  return SPORT_CONFIGS[type].defaultTeams.map(name => ({ id: generateId(), name, score: 0 }));
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
  const sportGrid = document.querySelector("#sport-grid");
  sportGrid.innerHTML = "";
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
      ? `<div class="sport-score-raw">${team.score} ${team.score === 1 && config.scoreUnit === "goals" ? "goal" : config.scoreUnit}</div>`
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
    sportGrid.appendChild(card);
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
  ["sport-basketball", "sport-soccer", "sport-tennis", "sport-football", "sport-f1", "sport-baseball", "sport-hockey", "sport-volleyball"].forEach(c => {
    document.body.classList.remove(c);
    document.documentElement.classList.remove(c);
  });
  
  const isSportTab = document.body.dataset.tab === "sports";
  
  document.body.classList.toggle("sport-mode", sportMode && isSportTab);
  document.documentElement.classList.toggle("sport-mode", sportMode && isSportTab);

  const sportsStart = document.querySelector("#sports-start");
  if (sportsStart) sportsStart.hidden = sportMode;
  const sportsActions = document.querySelector("#sports-tab-actions");
  if (sportsActions) sportsActions.hidden = !sportMode;

  const sportGuide  = document.querySelector("#sport-guide");
  if (sportGuide) sportGuide.hidden = !sportMode;

  if (sportMode) {
    if (isSportTab) {
      document.body.classList.add(`sport-${sportType}`);
      document.documentElement.classList.add(`sport-${sportType}`);
    }
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
  // Mutually exclusive with Hunt Mode
  if (huntMode) {
    exitHuntMode();
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
  navigateTo("sports");
}

function exitSportMode() {
  sportMode = false;
  localStorage.setItem(SPORT_KEY, "false");
  
  const sportGrid = document.querySelector("#sport-grid");
  if (sportGrid) sportGrid.innerHTML = "";
  
  applySportMode();
  applyHuntMode();
  applyLanguage(currentLanguage); // restores i18n labels including summary labels
}

function animateIncrement(button, countEl) {
  // Spring scale on button
  button.classList.remove('plus-pop');
  void button.offsetWidth; // force reflow
  button.classList.add('plus-pop');

  // Ripple effect
  const ripple = document.createElement('span');
  ripple.className = 'plus-ripple';
  button.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());

  // Count bump animation
  if (countEl) {
    countEl.classList.remove('count-bump');
    void countEl.offsetWidth;
    countEl.classList.add('count-bump');
  }

  // Floating +1 indicator
  const floater = document.createElement('span');
  floater.className = 'plus-float';
  floater.textContent = '+1';
  button.closest('.counter-card').appendChild(floater);
  floater.addEventListener('animationend', () => floater.remove());
}

function render() {
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
  todayCounts = loadTodayCounts();
  visibleCounters.forEach((counter) => {
    const card = document.createElement("article");
    card.className = "counter-card";
    const icon = getIconForCounter(counter);
    const todayCount = todayCounts[counter.id] || 0;
    const createdDate = counter.createdAt ? new Date(counter.createdAt) : null;
    const daysActive = createdDate ? Math.max(1, Math.ceil((Date.now() - createdDate.getTime()) / 86400000)) : null;
    const avgPerDay = daysActive && counter.count > 0 ? (counter.count / daysActive).toFixed(1) : null;

    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon-name">
          <input class="card-icon-input" type="text" value="${icon}" maxlength="4" title="Change icon" aria-label="Change icon for ${escapeHtml(counter.name)}" readonly style="cursor:pointer;" />
          <input class="counter-name" value="${escapeHtml(counter.name)}" aria-label="${t("counterName")}" maxlength="32" />
        </div>
        <button class="delete-button" type="button" title="${t("remove")}" aria-label="${t("remove")} ${escapeHtml(counter.name)}">×</button>
      </div>
      <div class="count-hero">
        <div class="count" id="count-${counter.id}">${formatCount(counter.count)}</div>
        ${counter.goal ? `<div class="counter-goal" style="font-size: 13px; color: var(--muted); margin-top: 4px; font-weight: 600; cursor: pointer;" data-action="set-goal" data-id="${counter.id}">Goal: ${formatCount(counter.goal)} &middot; ${Math.max(0, counter.goal - counter.count)} to go</div>` : `<button class="redo-tutorial" style="margin-top: 6px; padding: 4px 12px; cursor: pointer;" data-action="set-goal" data-id="${counter.id}" type="button">Set Goal</button>`}
      </div>
      <div class="card-actions-row">
        <button class="step-button decrement" type="button" aria-label="${t("decrease")} ${escapeHtml(counter.name)}">−</button>
        <button class="plus-button increment" type="button" aria-label="${t("increase")} ${escapeHtml(counter.name)}">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6v16M6 14h16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
        </button>
        <button class="step-button decrement-right" type="button" aria-label="${t("decrease")} ${escapeHtml(counter.name)}" style="visibility:hidden">−</button>
      </div>
      <div class="card-meta">
        <div class="card-meta-item today-badge${todayCount > 0 ? ' has-count' : ''}">
          <span class="meta-label">Today</span>
          <span class="meta-value">${todayCount > 0 ? '+' + formatCount(todayCount) : '—'}</span>
        </div>
        ${avgPerDay ? `<div class="card-meta-item">
          <span class="meta-label">Avg/day</span>
          <span class="meta-value">${avgPerDay}</span>
        </div>` : ''}
      </div>`;

    const incrementBtn = card.querySelector(".increment");
    const countEl = card.querySelector(".count");

    incrementBtn.addEventListener("click", () => {
      animateIncrement(incrementBtn, countEl);
      updateCount(counter.id, 1);
      // Track today's count
      todayCounts[counter.id] = (todayCounts[counter.id] || 0) + 1;
      saveTodayCounts(todayCounts);
    });
    card.querySelector(".decrement").addEventListener("click", () => updateCount(counter.id, -1));
    card.querySelector(".delete-button").addEventListener("click", () => removeCounter(counter.id));
    const goalBtn = card.querySelector('[data-action="set-goal"]');
    if (goalBtn) {
      goalBtn.addEventListener("click", () => {
        const currentStr = counter.goal !== undefined ? String(counter.goal) : "";
        openGoalPicker(counter.id);
      });
    }
    card.querySelector(".counter-name").addEventListener("change", (event) => {
      counter.name = event.target.value.trim() || t("untitled");
      save(); render();
    });
    // Icon picker on click
    card.querySelector(".card-icon-input").addEventListener("click", () => {
      openIconPicker(counter.id);
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
function showVehicle(color = huntColor) {
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
  vehicle.textContent = HUNT_CONFIG[color]?.emoji || "🚕";
  vehicleLayer.appendChild(vehicle);
  vehicle.addEventListener("animationend", () => vehicle.remove());
}

const onboardingSlides = [
  { emoji: "✨", title: "Welcome to Countly", copy: "Keep track of what matters. A beautiful, modern way to tally everything in your life." },
  { emoji: "👆", title: "Tap to Tally", copy: "Use the plus and minus controls to keep your numbers moving. Your progress is saved automatically." },
  { emoji: "➕", title: "Create Counters", copy: "Add as many counters as you need, then give each one a name so everything is easy to find." },
  { emoji: "🎨", title: "Make it Yours", copy: "Personalize your app's aesthetic. Skins change the colors, materials, and animations of your counters." },
  { emoji: "🏆", title: "Mini Games & Sports", copy: "Transform your counters into specialized scoreboards or play the classic Car Hunt road trip game." },
  { emoji: "📊", title: "History (Coming Soon)", copy: "History will show your counting activity over time — streaks, totals by day, and personal bests." },
  { emoji: "🚀", title: "Ready to count?", copy: "You're all set! Let's start tracking what matters." }
];

function showTutorialStep() {
  const slide = onboardingSlides[tutorialIndex];
  
  const carousel = document.getElementById("onboarding-carousel");
  
  // Create new slide element
  const slideEl = document.createElement("div");
  slideEl.className = "onboarding-slide";
  slideEl.innerHTML = `
    <div class="onboarding-graphic">${slide.emoji}</div>
    <h2 class="onboarding-title">${slide.title}</h2>
    <p class="onboarding-copy">${slide.copy}</p>
  `;
  
  // Transition logic
  const oldSlide = carousel.querySelector(".onboarding-slide.is-active");
  if (oldSlide) {
    oldSlide.classList.remove("is-active");
    oldSlide.classList.add("is-leaving");
    setTimeout(() => oldSlide.remove(), 500);
  }
  
  carousel.appendChild(slideEl);
  // Force reflow
  void slideEl.offsetWidth;
  slideEl.classList.add("is-active");

  // Render dots
  const dotsContainer = document.getElementById("onboarding-dots");
  dotsContainer.innerHTML = onboardingSlides.map((_, i) => 
    `<div class="onboarding-dot ${i === tutorialIndex ? "is-active" : ""}"></div>`
  ).join("");

  const skipBtn = document.getElementById("skip-tutorial");
  const prevBtn = document.getElementById("prev-tutorial");
  if (tutorialIndex === 0) {
    skipBtn.style.display = "";
    prevBtn.style.display = "none";
  } else {
    skipBtn.style.display = "none";
    prevBtn.style.display = "";
  }

  continueTutorial.innerHTML = tutorialIndex === onboardingSlides.length - 1 ? `${t("finish")} <span aria-hidden="true">✓</span>` : `${t("continue")} <span aria-hidden="true">→</span>`;
  tutorialOverlay.hidden = false;
}

function launchConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;inset:0;z-index:120;pointer-events:none;";
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const W = window.innerWidth;
  const H = window.innerHeight;
  const colors = [
    "#4169e1", "#ffd24d", "#ff9d72", "#8ed1c4", "#b79aff",
    "#ff6b8a", "#47d7ac", "#f9a03f", "#a78bfa", "#34d399"
  ];
  const PARTICLE_COUNT = 120;
  const GRAVITY = 520;       // px/s²
  const DRAG = 0.97;
  const WIND = 18;           // gentle horizontal drift (px/s)
  const particles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6; // fan upward ±~46°
    const speed = 420 + Math.random() * 560;
    const side = Math.random() < 0.5 ? -1 : 1;
    const originX = W / 2 + side * (Math.random() * W * 0.32);
    const originY = H * 0.92 + Math.random() * H * 0.08;      // bottom region
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed * (Math.random() < 0.5 ? 1 : -1),
      vy: Math.sin(angle) * speed,
      color: colors[i % colors.length],
      w: 5 + Math.random() * 6,
      h: 7 + Math.random() * 9,
      shape: Math.random() < 0.45 ? "rect" : Math.random() < 0.6 ? "circle" : "ribbon",
      rotation: Math.random() * Math.PI * 2,
      spin: (2 + Math.random() * 8) * (Math.random() < 0.5 ? 1 : -1),
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 2 + Math.random() * 4,
      opacity: 1,
      life: 2.4 + Math.random() * 1.8, // seconds before fading
      age: -Math.random() * 0.25,       // stagger start
    });
  }

  let lastTime = performance.now();
  let running = true;

  function tick(now) {
    if (!running) return;
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    ctx.clearRect(0, 0, W, H);
    let alive = 0;

    for (const p of particles) {
      p.age += dt;
      if (p.age < 0) { alive++; continue; } // still staggering

      // physics
      p.vy += GRAVITY * dt;
      p.vx += WIND * Math.sin(p.wobblePhase + p.age * p.wobbleSpeed) * dt;
      p.vx *= DRAG;
      p.vy *= DRAG;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rotation += p.spin * dt;

      // fade out near end of life
      const fadeStart = p.life * 0.65;
      if (p.age > fadeStart) {
        p.opacity = Math.max(0, 1 - (p.age - fadeStart) / (p.life * 0.35));
      }

      if (p.opacity <= 0 || p.y > H + 60) continue;
      alive++;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      // 3D-ish wobble: scale X by a sine wave
      const scaleX = 0.4 + 0.6 * Math.abs(Math.cos(p.age * p.wobbleSpeed + p.wobblePhase));
      ctx.scale(scaleX, 1);
      ctx.fillStyle = p.color;

      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === "ribbon") {
        ctx.fillRect(-p.w * 0.5, -p.h * 0.8, p.w * 0.6, p.h * 1.6);
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx.restore();
    }

    if (alive > 0) {
      requestAnimationFrame(tick);
    } else {
      canvas.remove();
      running = false;
    }
  }

  requestAnimationFrame(tick);
}

function closeTutorial(completed = false) {
  tutorialOverlay.hidden = true;
  localStorage.setItem(TUTORIAL_KEY, "true");
  if (completed) launchConfetti();
}

document.querySelector("#add-counter").addEventListener("click", () => {
  searchQuery = "";
  counterSearch.value = "";
  const iconIdx = counters.length % COUNTER_ICONS.length;
  counters.push({ id: generateId(), name: `${t("counter")} ${counters.length + 1}`, count: 0, icon: COUNTER_ICONS[iconIdx], createdAt: Date.now() });
  save(); render();
  setTimeout(() => grid.lastElementChild?.querySelector(".counter-name")?.select(), 0);
});
document.querySelector("#settings-reset-row").addEventListener("click", () => {
  if (sportMode) {
    const config = SPORT_CONFIGS[sportType];
    if (confirm(t("resetSport").replace('%s', config.name))) {
      sportScores.forEach(team => { team.score = 0; });
      saveSportScores(); renderSport();
    }
  } else if (counters.length && confirm(t("resetConfirm"))) {
    counters.forEach(counter => { counter.count = 0; }); save(); render();
  }
});


function renderHunt() {
  const gamesGrid = document.querySelector("#games-grid");
  if (!gamesGrid) return;
  gamesGrid.innerHTML = "";
  
  if (!huntScores.length) return;
  
  huntScores.forEach((counter) => {
    const card = document.createElement("article");
    card.className = `counter-card hunt-card hunt-card-${counter.color}`;
    
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon-name">
          <span class="card-icon-static">${counter.icon}</span>
          <span class="counter-name">${escapeHtml(counter.name)} Car</span>
        </div>
        <button class="sport-undo" type="button" title="Undo" aria-label="Undo">↩</button>
      </div>
      <div class="count-hero">
        <div class="count" id="hunt-count-${counter.id}">${counter.count}</div>
      </div>
      <div class="card-actions-row">
        <button class="plus-button increment hunt-increment" type="button" aria-label="Add ${counter.name} car">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6v16M6 14h16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
        </button>
      </div>
    `;
    
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

if (gamesHuntBtn) {
  gamesHuntBtn.addEventListener("click", () => {
    if (huntMode) {
      exitHuntMode();
    } else {
      openHuntPicker();
    }
  });
}

// Hunt Picker removed in favor of Dedicated Games Tab
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

// ── Ocean Skin Animation ──────────────────────────────────────────────────────
let oceanInterval = null;
const seaEmojis = ["🐟", "🐠", "🐡", "🐢", "🐬", "🐙", "🦀", "🦑"];

function spawnSeaCreature() {
  if (document.hidden || currentSkin !== "ocean") return;
  const creature = document.createElement("div");
  creature.className = "sea-creature-animated";
  creature.textContent = seaEmojis[Math.floor(Math.random() * seaEmojis.length)];
  
  const isRightToLeft = Math.random() > 0.5;
  const startY = 10 + Math.random() * 80;
  const endY = startY + (Math.random() * 40 - 20);
  const travelTime = 15 + Math.random() * 15;
  const size = 2 + Math.random() * 3;
  
  creature.style.setProperty("--start-y", `${startY}vh`);
  creature.style.setProperty("--end-y", `${endY}vh`);
  creature.style.setProperty("--travel-time", `${travelTime}s`);
  creature.style.fontSize = `${size}rem`;
  creature.style.opacity = 0.4 + Math.random() * 0.4;
  
  creature.classList.add(isRightToLeft ? "swim-rtl" : "swim-ltr");
  
  const ambientScene = document.querySelector(".ambient-scene");
  if (ambientScene) ambientScene.appendChild(creature);
  
  creature.addEventListener("animationend", () => creature.remove());
}

function startOceanAnimation() {
  if (!oceanInterval) {
    for(let i = 0; i < 4; i++) setTimeout(spawnSeaCreature, Math.random() * 2000);
    oceanInterval = setInterval(spawnSeaCreature, 4000);
  }
}

function stopOceanAnimation() {
  if (oceanInterval) {
    clearInterval(oceanInterval);
    oceanInterval = null;
  }
  document.querySelectorAll(".sea-creature-animated").forEach(el => el.remove());
}

let spaceInterval;
const spaceStars = ["✨", "🌟", "💫", "⭐"];

function spawnSpaceStar() {
  if (document.hidden || currentSkin !== "space") return;
  const star = document.createElement("div");
  star.className = "space-star float-anim";
  star.textContent = spaceStars[Math.floor(Math.random() * spaceStars.length)];
  
  const startX = Math.random() * 100;
  const driftX = (Math.random() - 0.5) * 20;
  const travelTime = 10 + Math.random() * 20;
  const size = 1 + Math.random() * 1.5;
  const maxOpacity = 0.3 + Math.random() * 0.5;
  
  star.style.setProperty("--start-x", `${startX}vw`);
  star.style.setProperty("--drift-x", `${driftX}vw`);
  star.style.setProperty("--travel-time", `${travelTime}s`);
  star.style.setProperty("--max-opacity", maxOpacity);
  star.style.fontSize = `${size}rem`;
  
  const ambientScene = document.querySelector(".ambient-scene");
  if (ambientScene) ambientScene.appendChild(star);
  
  star.addEventListener("animationend", () => star.remove());
}

function startSpaceAnimation() {
  if (!spaceInterval) {
    for(let i = 0; i < 6; i++) setTimeout(spawnSpaceStar, Math.random() * 3000);
    spaceInterval = setInterval(spawnSpaceStar, 2000);
  }
}

function stopSpaceAnimation() {
  if (spaceInterval) {
    clearInterval(spaceInterval);
    spaceInterval = null;
  }
  document.querySelectorAll(".space-star").forEach(el => el.remove());
}

requestAnimationFrame(() => {
  document.body.classList.add("app-ready");
  if (!localStorage.getItem(TUTORIAL_KEY)) setTimeout(showTutorialStep, 760);
});

document.querySelector("#continue-tutorial").addEventListener("click", () => {
  if (tutorialIndex === onboardingSlides.length - 1) closeTutorial(true);
  else { tutorialIndex += 1; showTutorialStep(); }
});
document.querySelector("#prev-tutorial").addEventListener("click", () => {
  if (tutorialIndex > 0) { tutorialIndex -= 1; showTutorialStep(); }
});
document.querySelector("#skip-tutorial").addEventListener("click", closeTutorial);
redoTutorial.addEventListener("click", () => {
  tutorialIndex = 0;
  showTutorialStep();
});
document.querySelector(".brand").addEventListener("click", (e) => {
  e.preventDefault();
  if (sportMode) exitSportMode();
  if (huntMode) exitHuntMode();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  tutorialIndex = 0;
  showTutorialStep();
});

// ── About Modal ─────────────────────────────────────────────────────────────
const aboutModal = document.querySelector("#about-modal");
document.querySelector("#settings-about-row").addEventListener("click", () => {
  aboutModal.hidden = false;
});
document.querySelector("#close-about").addEventListener("click", () => {
  aboutModal.hidden = true;
});
document.querySelector("#about-backdrop").addEventListener("click", () => {
  aboutModal.hidden = true;
});


// Settings / Language screen wiring
document.querySelector("#settings-language-row").addEventListener("click", () => {
  document.querySelector("#settings-main").hidden = true;
  document.querySelector("#settings-language-screen").hidden = false;
});
document.querySelector("#lang-screen-back").addEventListener("click", () => {
  document.querySelector("#settings-language-screen").hidden = true;
  document.querySelector("#settings-main").hidden = false;
});
languageChoices.forEach((choice) => choice.addEventListener("click", () => {
  applyLanguage(choice.dataset.language);
  document.querySelector("#settings-language-screen").hidden = true;
  document.querySelector("#settings-main").hidden = false;
}));

applyLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");
applySkin();

// ── Skin Picker event listeners ───────────────────────────────────────────────
const skinPicker = document.querySelector("#skin-picker");
function openSkinPicker() { skinPicker.hidden = false; }
function closeSkinPicker() { skinPicker.hidden = true; }

document.querySelector("#settings-skin-row").addEventListener("click", openSkinPicker);
if (document.querySelector("#skin-toggle")) {
  document.querySelector("#skin-toggle").addEventListener("click", openSkinPicker);
}
document.querySelector("#skin-picker-cancel").addEventListener("click", closeSkinPicker);
document.querySelector("#skin-picker-backdrop").addEventListener("click", closeSkinPicker);
document.querySelectorAll("#skin-picker .sport-option").forEach(btn => {
  btn.addEventListener("click", () => {
    currentSkin = btn.dataset.skin;
    localStorage.setItem(SKIN_KEY, currentSkin);
    applySkin();
    if(typeof updateSettingsText === 'function') updateSettingsText();
    closeSkinPicker();
  });
});

// Restore current tab on load
navigateTo(currentTab);

// ── Sport mode event listeners ────────────────────────────────────────────────
document.querySelectorAll(".sport-quick-btn").forEach(btn => {
  btn.addEventListener("click", () => enterSportMode(btn.dataset.sport));
});
document.querySelector("#sport-exit-btn").addEventListener("click", exitSportMode);
document.querySelector("#reset-sport-btn").addEventListener("click", () => {
  const config = SPORT_CONFIGS[sportType];
  if (confirm(t("resetSport").replace('%s', config.name))) {
    sportScores.forEach(team => { team.score = 0; });
    saveSportScores(); renderSport();
  }
});
document.querySelector("#sport-picker-cancel").addEventListener("click", closeSportPicker);
document.querySelector("#sport-picker-backdrop").addEventListener("click", closeSportPicker);
document.querySelectorAll(".sport-option[data-sport]").forEach(btn => {
  btn.addEventListener("click", () => enterSportMode(btn.dataset.sport));
});
document.querySelectorAll(".sport-switch-btn[data-switch-sport]").forEach(btn => {
  btn.addEventListener("click", () => switchSport(btn.dataset.switchSport));
});


const endGameBtn = document.querySelector("#end-game-btn");
if (endGameBtn) {
  endGameBtn.addEventListener("click", exitHuntMode);
}


// ── Quick Count Feature ───────────────────────────────────────────────────────
const qcModal = document.getElementById("quick-count-modal");
const qcCloseBtn = document.getElementById("qc-close-btn");
const qcGoalBtn = document.getElementById("qc-goal-btn");
const qcGoalText = document.getElementById("qc-goal-text");
const qcValue = document.getElementById("qc-value");
const qcGoalRemaining = document.getElementById("qc-goal-remaining");
const qcIncreaseBtn = document.getElementById("qc-increase-btn");
const qcDecreaseBtn = document.getElementById("qc-decrease-btn");
const qcFinishBtn = document.getElementById("qc-finish-btn");
const qcSaveSheet = document.getElementById("qc-save-sheet");
const qcSaveSheetBackdrop = document.getElementById("qc-save-sheet-backdrop");
const qcNameInput = document.getElementById("qc-name-input");
const qcDiscardBtn = document.getElementById("qc-discard-btn");
const qcSaveBtn = document.getElementById("qc-save-btn");

const goalPicker = document.getElementById("goal-picker");
const goalPickerBackdrop = document.getElementById("goal-picker-backdrop");
const goalPickerInput = document.getElementById("goal-picker-input");
const goalPickerCancelBtn = document.getElementById("goal-picker-cancel");
const goalPickerSaveBtn = document.getElementById("goal-picker-save");
let activeGoalCounterId = null;
const qcProgressRing = document.getElementById("qc-progress-ring");
const qcProgressFill = document.getElementById("qc-progress-fill");

let qcCount = 0;
let qcGoal = null;

function openGoalPicker(counterId) {
  activeGoalCounterId = counterId;
  let currentVal = "";
  if (counterId === "quick-count") {
    currentVal = qcGoal !== null ? String(qcGoal) : "";
  } else {
    const counter = counters.find(c => c.id === counterId);
    if (counter && counter.goal !== undefined) currentVal = String(counter.goal);
  }
  goalPickerInput.value = currentVal;
  goalPicker.hidden = false;
  setTimeout(() => goalPickerInput.focus(), 100);
}

function closeGoalPicker() {
  goalPicker.hidden = true;
  activeGoalCounterId = null;
}

goalPickerCancelBtn.addEventListener("click", closeGoalPicker);
goalPickerBackdrop.addEventListener("click", closeGoalPicker);

goalPickerSaveBtn.addEventListener("click", () => {
  const input = goalPickerInput.value.trim();
  const parsed = parseInt(input, 10);
  
  if (activeGoalCounterId === "quick-count") {
    if (!isNaN(parsed) && parsed > 0) {
      qcGoal = parsed;
    } else if (input === "") {
      qcGoal = null;
    }
    updateQcUI();
  } else {
    const counter = counters.find(c => c.id === activeGoalCounterId);
    if (counter) {
      if (!isNaN(parsed) && parsed > 0) {
        counter.goal = parsed;
      } else if (input === "") {
        delete counter.goal;
      }
      save();
      render();
    }
  }
  closeGoalPicker();
});

function updateQcUI() {
  qcValue.textContent = formatCount(qcCount);
  
  if (qcGoal !== null) {
    qcGoalBtn.classList.add("has-goal");
    qcGoalText.textContent = "Goal: " + formatCount(qcGoal);
    qcGoalRemaining.hidden = false;
    
    let remaining = qcGoal - qcCount;
    if (remaining > 0) {
      qcGoalRemaining.textContent = formatCount(remaining) + " to go";
    } else {
      qcGoalRemaining.textContent = "Goal reached! 🎉";
    }
    
    qcProgressRing.hidden = false;
    const radius = 90;
    const circumference = 2 * Math.PI * radius; // ~565.48
    let progress = Math.min(qcCount / qcGoal, 1);
    qcProgressFill.style.strokeDasharray = circumference;
    qcProgressFill.style.strokeDashoffset = circumference - (progress * circumference);
  } else {
    qcGoalBtn.classList.remove("has-goal");
    qcGoalText.textContent = "Set Goal";
    qcGoalRemaining.hidden = true;
    qcProgressRing.hidden = true;
  }
}

function openQuickCount() {
  qcCount = 0;
  qcGoal = null;
  qcSaveSheet.hidden = true;
  qcNameInput.value = "";
  updateQcUI();
  qcModal.hidden = false;
}

function closeQuickCount() {
  qcModal.hidden = true;
}

document.getElementById("quick-count-btn")?.addEventListener("click", openQuickCount);
qcCloseBtn.addEventListener("click", closeQuickCount);

qcIncreaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  qcCount++;
  updateQcUI();
  if ('vibrate' in navigator) navigator.vibrate(5);
});

qcDecreaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); // prevent tapping the tap area
  if (qcCount > 0) {
    qcCount--;
    updateQcUI();
    if ('vibrate' in navigator) navigator.vibrate([10, 30, 10]);
  }
});

qcGoalBtn.addEventListener("click", () => {
  const currentStr = qcGoal !== null ? String(qcGoal) : "";
  openGoalPicker("quick-count");
});

qcFinishBtn.addEventListener("click", () => {
  qcSaveSheet.hidden = false;
  setTimeout(() => qcNameInput.focus(), 100);
});

qcSaveSheetBackdrop.addEventListener("click", () => {
  qcSaveSheet.hidden = true;
});

qcDiscardBtn.addEventListener("click", () => {
  closeQuickCount();
});

qcSaveBtn.addEventListener("click", () => {
  let name = qcNameInput.value.trim();
  if (!name) name = "Quick Count";
  
  const newCounter = {
    id: generateId(),
    name: name,
    count: qcCount,
    icon: COUNTER_ICONS[Math.floor(Math.random() * COUNTER_ICONS.length)],
    createdAt: Date.now()
  };
  
  if (qcGoal !== null) {
    newCounter.goal = qcGoal;
  }
  
  counters.push(newCounter);
  save();
  render();
  updateStats();
  
  closeQuickCount();
});


// Appearance Picker
const appearancePicker = document.getElementById("appearance-picker");
function openAppearancePicker() {
  if(appearancePicker) {
    appearancePicker.hidden = false;
    setTimeout(() => {
      const panel = appearancePicker.querySelector(".sport-picker-panel");
      if(panel) panel.style.transform = "translateY(0)";
    }, 10);
  }
}
function closeAppearancePicker() {
  if(appearancePicker) appearancePicker.hidden = true;
}
document.querySelector("#settings-appearance-row")?.addEventListener("click", openAppearancePicker);
document.querySelector("#appearance-picker-cancel")?.addEventListener("click", closeAppearancePicker);
document.querySelector("#appearance-picker-backdrop")?.addEventListener("click", closeAppearancePicker);

appearancePicker?.querySelectorAll(".sport-option").forEach(btn => {
  btn.addEventListener("click", () => {
    document.documentElement.classList.remove("appearance-" + appearance);
    appearance = btn.dataset.appearance;
    document.documentElement.classList.add("appearance-" + appearance);
    localStorage.setItem("countlyAppearance", appearance);
    if(typeof updateSettingsText === 'function') updateSettingsText();
    closeAppearancePicker();
  });
});

// Icon Picker
const iconPicker = document.getElementById("icon-picker");
const iconPickerInput = document.getElementById("icon-picker-input");
let activeIconCounterId = null;

function openIconPicker(counterId) {
  activeIconCounterId = counterId;
  const counter = counters.find(c => c.id === counterId);
  if(iconPickerInput) iconPickerInput.value = counter ? counter.icon : "";
  if(iconPicker) iconPicker.hidden = false;
}
function closeIconPicker() {
  if(iconPicker) iconPicker.hidden = true;
  activeIconCounterId = null;
}
document.getElementById("icon-picker-cancel")?.addEventListener("click", closeIconPicker);
document.getElementById("icon-picker-backdrop")?.addEventListener("click", closeIconPicker);

document.querySelectorAll("#icon-picker .icon-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    if(iconPickerInput) iconPickerInput.value = e.target.textContent;
  });
});

document.getElementById("icon-picker-save")?.addEventListener("click", () => {
  if (activeIconCounterId) {
    const counter = counters.find(c => c.id === activeIconCounterId);
    if (counter) {
      counter.icon = (iconPickerInput && iconPickerInput.value.trim()) || "🎯";
      save();
      render();
    }
  }
  closeIconPicker();
});

window.openIconPicker = openIconPicker; // Make it global just in case it's called from inline HTML or other scopes

function updateSettingsText() {
  const skinEl = document.querySelector("#settings-skin-value");
  if (skinEl && typeof currentSkin !== 'undefined') {
    let skinKey = "skin" + currentSkin.charAt(0).toUpperCase() + currentSkin.slice(1) + "Name";
    if (currentSkin === 'default') skinKey = 'skinDefaultName';
    skinEl.textContent = t(skinKey) || currentSkin;
  }
  const appearanceEl = document.querySelector("#settings-appearance-value");
  if (appearanceEl && typeof appearance !== 'undefined') {
    let appearanceKey = "appearance" + appearance.charAt(0).toUpperCase() + appearance.slice(1) + "Name";
    appearanceEl.textContent = t(appearanceKey) || appearance;
  }
}
// Run it once on load
updateSettingsText();

// Hook it into applyLanguage
const origApplyLanguageRegex = /document.querySelectorAll\("\[data-i18n\]"\)\.forEach\(\(element\) => \{/;
