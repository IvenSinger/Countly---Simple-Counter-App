const fs = require('fs');
const newLogic = `

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
      saveCounters();
      render();
    }
  }
  closeIconPicker();
});

window.openIconPicker = openIconPicker; // Make it global just in case it's called from inline HTML or other scopes
`;

fs.appendFileSync('app.js', newLogic);
console.log("Appended missing logic to app.js");
