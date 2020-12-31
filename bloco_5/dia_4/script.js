const content = document.getElementById("lorem");
const backgroundWhite = document.getElementById("background-white");
const backgroundSilver = document.getElementById("background-silver");
const backgroundBlack = document.getElementById("background-black");
const colorBlack = document.getElementById("color-black");
const colorWhite = document.getElementById("color-white");
const shadowWhite = document.getElementById("textshadow-white");
const shadowBlack = document.getElementById("textshadow-black");
const fontUp = document.getElementById("fontsize-up");
const fontDown = document.getElementById("fontsize-down");
const spaceUp = document.getElementById("letterspacing-up");
const spaceDown = document.getElementById("letterspacing-down");
const fontArial = document.getElementById("fontfamily-arial");
const fontTimes = document.getElementById("fontfamily-timesnewroman");
const fontConsolas = document.getElementById("fontfamily-consolas");

function savePreferences() {
  localStorage.setItem("background", content.style.backgroundColor);
  localStorage.setItem("color", content.style.color);
  localStorage.setItem("shadow", content.style.textShadow);
  localStorage.setItem("fsize", content.style.fontSize);
  localStorage.setItem("fspacing", content.style.letterSpacing);
  localStorage.setItem("ffamily", content.style.fontFamily);
}

function backgroundColorWhite() {
  content.style.backgroundColor = "white";
  savePreferences();
}
function backgroundColorSilver() {
  content.style.backgroundColor = "silver";
  savePreferences();
}
function backgroundColorBlack() {
  content.style.backgroundColor = "black";
  savePreferences();
}

backgroundWhite.addEventListener("click", backgroundColorWhite);
backgroundSilver.addEventListener("click", backgroundColorSilver);
backgroundBlack.addEventListener("click", backgroundColorBlack);

function textColorBlack() {
  content.style.color = "black";
  savePreferences();
}
function textColorWhite() {
  content.style.color = "white";
  savePreferences();
}

colorBlack.addEventListener("click", textColorBlack);
colorWhite.addEventListener("click", textColorWhite);

function textShadowWhite() {
  content.style.textShadow = "1.2px 1.2px white";
  savePreferences();
}
function textShadowBlack() {
  content.style.textShadow = "1.2px 1.2px black";
  savePreferences();
}

shadowWhite.addEventListener("click", textShadowWhite);
shadowBlack.addEventListener("click", textShadowBlack);

function fontFamilyArial() {
  content.style.fontFamily = "Arial, san-serif";
  savePreferences();
}
function fontFamilyTimes() {
  content.style.fontFamily = "Times New Roman, serif";
  savePreferences();
}
function fontFamilyConsolas() {
  content.style.fontFamily = "Consolas, monospace";
  savePreferences();
}

fontArial.addEventListener("click", fontFamilyArial);
fontTimes.addEventListener("click", fontFamilyTimes);
fontConsolas.addEventListener("click", fontFamilyConsolas);

function fontSizeUp() {
  let helper = content.style.fontSize;
  let fontSize = parseInt(helper.split("px")[0]);
  fontSize += 1;
  content.style.fontSize = fontSize.toString() + "px";
  savePreferences();
}
function fontSizeDown() {
  let helper = content.style.fontSize;
  let fontSize = parseInt(helper.split("px")[0]);
  fontSize -= 1;
  content.style.fontSize = fontSize.toString() + "px";
  savePreferences();
}

fontUp.addEventListener("click", fontSizeUp);
fontDown.addEventListener("click", fontSizeDown);

function letterSpacingUp() {
  let helper = content.style.letterSpacing;
  let spacing = parseInt(helper.split("px")[0]);
  spacing += 1;
  content.style.letterSpacing = spacing.toString() + "px";
  savePreferences();
}
function letterSpacingDown() {
  let helper = content.style.letterSpacing;
  let spacing = parseInt(helper.split("px")[0]);
  spacing -= 1;
  content.style.letterSpacing = spacing.toString() + "px";
  savePreferences();
}

spaceUp.addEventListener('click', letterSpacingUp);
spaceDown.addEventListener('click', letterSpacingDown);

function pageSetup() {
  if(localStorage.length === 0) {
    return;
  }
  content.style.backgroundColor = localStorage.getItem('background');
  content.style.color = localStorage.getItem('color');
  content.style.textShadow = localStorage.getItem('shadow');
  content.style.fontSize = localStorage.getItem('fsize');
  content.style.letterSpacing = localStorage.getItem('fspacing');
  content.style.fontFamily = localStorage.getItem('ffamily');
}

pageSetup();
