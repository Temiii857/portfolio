window.addEventListener('DOMContentLoaded', init, false);

function init() {
const title = document.querySelector("h1"); //Select the <h1> element
const text = title.textContent;
title.textContent = "";

//Wave Effect!
// loop through each character in the text
for (let i = 0; i < text.length; i++) {
  let span = document.createElement("span");
  span.textContent = text[i];
  span.style.display = "inline-block"; // makes the letters behave individually
  span.style.animation = `wave 1.5s ease-in-out infinite`; // applied the wave animation
  span.style.animationDelay = `${i * 0.1}s`;
  title.appendChild(span);
}
//Glow Button!
  function toggleGlow() {
    title.classList.toggle("glow"); // toggle glow on/off
  }


  title.addEventListener("click", toggleGlow);
}