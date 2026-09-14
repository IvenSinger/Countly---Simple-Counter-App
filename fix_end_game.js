const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const handler = `
const endGameBtn = document.querySelector("#end-game-btn");
if (endGameBtn) {
  endGameBtn.addEventListener("click", exitHuntMode);
}
`;

js = js + '\n' + handler;
fs.writeFileSync('app.js', js);
console.log('App.js updated');
