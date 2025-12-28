const output = document.getElementById("output");
const clickMeBtn = document.getElementById("clickMe");
const resetBtn = document.getElementById("resetBtn");
const bgButton = document.getElementById("bgToggle");
const nameInput = document.getElementById("nameInput");

let clickCount = 0;

function timesWord(n) {
  return n === 1 ? "time" : "times";
}

function renderMessage() {
  const name = nameInput.value.trim();

  if (!name) {
    output.textContent = `Please enter your name. Button clicked ${clickCount} ${timesWord(clickCount)}.`;
    return;
  }

  output.textContent = `Hello ${name} — button clicked ${clickCount} ${timesWord(clickCount)}.`;
}

clickMeBtn.addEventListener("click", () => {
  clickCount++;
  renderMessage();
});

resetBtn.addEventListener("click", () => {
  clickCount = 0;
  output.textContent = "Reset. Type your name, then click.";
  nameInput.focus();
});

nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clickMeBtn.click();
  }
});

bgButton.addEventListener("click", () => {
  document.body.classList.toggle("alt-bg");
  const isAlt = document.body.classList.contains("alt-bg");
  bgButton.textContent = isAlt ? "Light Mode" : "Dark Mode";
});

nameInput.focus();
