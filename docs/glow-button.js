const header = document.querySelector("h1");

function toggleGlow() {
  header.classList.toggle("glow");
}

header.addEventListener("click", toggleGlow);