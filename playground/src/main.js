// Import TailorDS SCSS Framework
import "./style.scss";

console.log("TailorDS Design System Playground loaded!");

// Simple interactive example
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(`Button clicked: ${e.target.textContent}`);
    });
  });
});
