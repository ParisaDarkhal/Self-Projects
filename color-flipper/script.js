function colorMaker() {
  let randomR = Math.floor(Math.random() * 255);
  let randomG = Math.floor(Math.random() * 255);
  let randomB = Math.floor(Math.random() * 255);
  return "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
}

function colorFlipper() {
  document.querySelector("body").style.backgroundColor = colorMaker();
  document.querySelector("span").innerText = colorMaker();
}
