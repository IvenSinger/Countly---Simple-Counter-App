const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

const insertionPoint = `function updateQcUI() {`;

const insertionCode = `function openGoalPicker(counterId) {
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
      saveCounters();
      render();
    }
  }
  closeGoalPicker();
});

function updateQcUI() {`;

app = app.replace(insertionPoint, insertionCode);

fs.writeFileSync('app.js', app);
console.log("Patched app.js with missing goal picker functions.");
