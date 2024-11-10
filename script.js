
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.body;
const cssOutput = document.querySelector("#css-output");

function setGradient() {
  const gradientStyle = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  body.style.background = gradientStyle;
  cssOutput.textContent = `background: ${gradientStyle};`;
}

// Initialize with default values
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
