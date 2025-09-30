const title = document.querySelector("h1");
const text = title.textContent;
title.textContent = "";


for (let i = 0; i < text.length; i++) {
  let span = document.createElement("span");
  span.textContent = text[i];
  span.style.display = "inline-block";
  span.style.animation = `wave 1.5s ease-in-out infinite`;
  span.style.animationDelay = `${i * 0.1}s`;
  title.appendChild(span);
}