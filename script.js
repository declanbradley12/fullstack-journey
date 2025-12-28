const output = document.getElementById("output");
const clickMeBtn = document.getElementById("clickMe");
const bgButton = document.getElementById("bgToggle");

bgButton.addEventListener("click", () => {
  document.body.classList.toggle("alt-bg");

  if (document.body.classList.contains("alt-bg")) {
    bgButton.textContent = "Light Mode";
  } else {
    bgButton.textContent = "Dark Mode";
  }
});
let clickCount = 0;

clickMeBtn.addEventListener("click", () => {
  clickCount++;
 output.textContent =
  clickCount === 1
    ? "Button clicked 1 time"
    : `Button clicked ${clickCount} times`;
});
