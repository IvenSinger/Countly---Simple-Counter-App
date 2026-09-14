const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const newCSS = `
/* ═══════════════════════════════════════════════════════════════════════════════
   HUNT MODE
   ═══════════════════════════════════════════════════════════════════════════════ */
.hunt-card { flex-direction: column; align-items: stretch; justify-content: space-between; }
.hunt-card .card-top { display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 12px; }
.hunt-card .card-icon-static { font-size: 24px; line-height: 1; padding: 4px; border-radius: 8px; background: rgba(0,0,0,0.1); margin-right: 8px; }
.hunt-card .card-icon-name { display: flex; align-items: center; font-weight: 600; }
.hunt-card .count-hero { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 80px; }
.hunt-card .count { font-size: 56px; font-weight: 800; font-variant-numeric: tabular-nums; line-height: 1; text-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.hunt-card .card-actions-row { width: 100%; }
.hunt-card .hunt-increment { width: 100%; max-width: none; border-radius: 16px; padding: 12px; }

.hunt-card-yellow { --blue: #eab308; background: rgba(234,179,8,.15); border-color: rgba(234,179,8,.3); }
.hunt-card-red { --blue: #ef4444; background: rgba(239,68,68,.15); border-color: rgba(239,68,68,.3); }
.hunt-card-blue { --blue: #3b82f6; background: rgba(59,130,246,.15); border-color: rgba(59,130,246,.3); }
.hunt-card-green { --blue: #22c55e; background: rgba(34,197,94,.15); border-color: rgba(34,197,94,.3); }
.hunt-card-pink { --blue: #ec4899; background: rgba(236,72,153,.15); border-color: rgba(236,72,153,.3); }
`;

css = css + '\n' + newCSS;
fs.writeFileSync('styles.css', css);
console.log('CSS updated');
