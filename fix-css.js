const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const newCSS = `
/* ═══════════════════════════════════════════════════════════════════════════════
   ONBOARDING OVERLAY
   ═══════════════════════════════════════════════════════════════════════════════ */
.onboarding-overlay { position: fixed; z-index: 100; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); opacity: 1; transition: opacity 0.4s ease; }
.onboarding-overlay[hidden] { opacity: 0; pointer-events: none; display: flex !important; }
.onboarding-modal { width: min(380px, calc(100vw - 48px)); padding: 40px 32px 32px; border: 1px solid var(--glass-border); border-radius: var(--radius-xl); background: var(--glass-bg-elevated); box-shadow: var(--specular-strong), var(--inner-depth), 0 24px 48px rgba(0,0,0,0.25); backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur); overflow: hidden; transform: translateY(0) scale(1); transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); display: flex; flex-direction: column; align-items: center; text-align: center; }
.onboarding-overlay[hidden] .onboarding-modal { transform: translateY(20px) scale(0.95); }
.onboarding-carousel { width: 100%; position: relative; display: flex; justify-content: center; overflow: hidden; }
.onboarding-slide { display: flex; flex-direction: column; align-items: center; opacity: 0; transform: translateX(20px); transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); pointer-events: none; }
.onboarding-slide.is-active { opacity: 1; transform: translateX(0); pointer-events: auto; }
.onboarding-slide.is-leaving { opacity: 0; transform: translateX(-20px); position: absolute; inset: 0; }
.onboarding-graphic { font-size: 80px; line-height: 1; margin-bottom: 24px; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15)); animation: float-anim 4s ease-in-out infinite; }
.onboarding-title { margin: 0 0 12px; font-size: 26px; font-weight: 800; letter-spacing: -0.8px; color: var(--ink); }
.onboarding-copy { margin: 0; color: var(--muted); font-size: 15px; line-height: 1.6; max-width: 280px; }
.onboarding-bottom { width: 100%; margin-top: 24px; display: flex; flex-direction: column; align-items: center; gap: 24px; z-index: 2; position: relative; }
.onboarding-dots { display: flex; gap: 8px; }
.onboarding-dot { width: 8px; height: 8px; border-radius: 4px; background: rgba(150,150,150,0.3); transition: all 0.3s ease; }
.onboarding-dot.is-active { background: var(--blue); width: 24px; }
.onboarding-actions { width: 100%; display: flex; justify-content: space-between; align-items: center; }
.skip-tutorial { border: 0; padding: 12px 0; color: var(--muted); background: transparent; font-size: 14px; font-weight: 600; cursor: pointer; transition: color 0.2s; }
.skip-tutorial:hover { color: var(--ink); }
.continue-tutorial { padding: 12px 24px; border-radius: var(--radius-pill); font-size: 15px; font-weight: 700; border: .5px solid rgba(255,255,255,.2); color: #fff; background: var(--blue); box-shadow: inset 0 .5px 0 0 rgba(255,255,255,.25), 0 4px 12px rgba(0,122,255,.2); transition: all .25s; cursor: pointer; }
.continue-tutorial:hover { background: var(--blue-dark); transform: scale(1.02); }
.continue-tutorial span { margin-left: 7px; font-size: 16px; vertical-align: -1px; }
@media (prefers-reduced-motion: reduce) { .onboarding-modal, .onboarding-slide { transition: none; transform: none !important; animation: none; } }
`;

css = css.replace('/* ═══════════════════════════════════════════════════════════════════════════════\n\n\n/* ═══════════════════════════════════════════════════════════════════════════════\n   SPORT MODE', newCSS + '\n/* ═══════════════════════════════════════════════════════════════════════════════\n   SPORT MODE');
fs.writeFileSync('styles.css', css);
