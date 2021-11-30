const hovContainer = document.getElementById("hoverboard-container");
// const colors = [
//   "#f55919",
//   "#68e17f",
//   "#c0cbff",
//   "#fff",
//   "#ff1efe",
//   "#b1ff00",
//   "#00d2ff",
//   "#ff3a67",
// ];
// const colors = [
//   "red",
//   "#ff4500",
//   "yellow",
//   "#66ff00",
//   "cyan",
//   "magenta",
//   "#0096ff",
//   "#ee4b2b",
// ];
// const colors = ["#3e74d1", "#00cbef", "#39e0ef", "#78ed86", "#f2ff66"];
const colors = ["#84f4ff", "#9effaa", "#31f484", "#0ff1ff", "#2672ec"];
const SQUARES = 10000;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  hovContainer.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#000";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
