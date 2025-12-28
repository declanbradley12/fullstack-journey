// Grab elements from the page
const output = document.getElementById("output");
const clickMeBtn = document.getElementById("clickMe");
const bgButton = document.getElementById("bgToggle");
const nameInput = document.getElementById("nameInput");

// State
let clickCount = 0;

// Click button logic
clickMeBtn.addEventListener("click", () => {
  clickCount++;

  const name = nameInput.value;

  if (name === "") {
    output.textContent = `Please enter your name. Button clicked ${clickCount} times.`;
  } else {
    output.textContent = `Hello ${name} — button clicked ${clickCount} times.`;
  }
});

// Background toggle
bgButton.addEventListener("click", () => {
  document.body.classList.toggle("alt-bg");

  if (document.body.classList.contains("alt-bg")) {
    bgButton.textContent = "Light Mode";
  } else {
    bgButton.textContent = "Dark Mode";
  }
});
