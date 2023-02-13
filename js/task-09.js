function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector(".change-color");
console.dir(btnEl);
btnEl.addEventListener("click", changeColor);

const bodyEl = document.querySelector("body");

function changeColor() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = `${hexColor}`;
  document.querySelector(".color").textContent = hexColor;
}
