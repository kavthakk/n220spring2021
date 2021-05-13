//Color Mixer
//This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.

//9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
//1 div that will change colors to the rgb color calculated
//1 div that shows the current calculated rgb color

//You must use attributes on the buttons for the values to change the colors by.

var block = document.getElementById("block");
var colorCode = document.getElementById("colorCode");
var red1 = document.getElementById("red1");
var red5 = document.getElementById("red5");
var red10 = document.getElementById("red10");
var green1 = document.getElementById("green1");
var green5 = document.getElementById("green5");
var green10 = document.getElementById("green10");
var blue1 = document.getElementById("blue1");
var blue5 = document.getElementById("blue5");
var blue10 = document.getElementById("blue10");
var reset = document.getElementById("reset");

let redVal = 0;
let greenVal = 0;
let blueVal = 0;
let luminance = 0;

red1.addEventListener("click", redChange);
red5.addEventListener("click", redChange);
red10.addEventListener("click", redChange);
green1.addEventListener("click", greenChange);
green5.addEventListener("click", greenChange);
green10.addEventListener("click", greenChange);
blue1.addEventListener("click", blueChange);
blue5.addEventListener("click", blueChange);
blue10.addEventListener("click", blueChange);
reset.addEventListener("click", resetMixer);

function redChange(event) {
  redAdd = Number(event.target.getAttribute("data-red"));
  redVal += redAdd;
  block.style.backgroundColor = "rgb(" + redVal + ","+ greenVal + ","+ blueVal + ")";
  block.innerHTML = block.style.backgroundColor;
  colorCode.innerHTML = block.style.backgroundColor;
  luminance = (redVal*0.2126) + (greenVal*0.7152) + (blueVal*0.0722);
  //(0.2126*R + 0.7152*G + 0.0722*B)
  if (luminance >= 200) {
    block.style.color = "rgb(" + 0 + ","+ 0 + ","+ 0 + ")";
    console.log("luminated!");
  }
}
function greenChange(event) {
  greenAdd = Number(event.target.getAttribute("data-green"));
  greenVal += greenAdd;
  block.style.backgroundColor = "rgb(" + redVal + ","+ greenVal + ","+ blueVal + ")";
  block.innerHTML = block.style.backgroundColor;
  colorCode.innerHTML = block.style.backgroundColor;
  luminance = (redVal*0.2126) + (greenVal*0.7152) + (blueVal*0.0722);
  //(0.2126*R + 0.7152*G + 0.0722*B)
  if (luminance >= 200) {
    block.style.color = "rgb(" + 0 + ","+ 0 + ","+ 0 + ")";
    console.log("luminated!");
  }
}
function blueChange(event) {
  blueAdd = Number(event.target.getAttribute("data-blue"));
  blueVal += blueAdd;
  block.style.backgroundColor = "rgb(" + redVal + ","+ greenVal + ","+ blueVal + ")";
  block.innerHTML = block.style.backgroundColor;
  colorCode.innerHTML = block.style.backgroundColor;
  luminance = (redVal*0.2126) + (greenVal*0.7152) + (blueVal*0.0722);
  //(0.2126*R + 0.7152*G + 0.0722*B)
  if (luminance >= 200) {
    block.style.color = "rgb(" + 0 + ","+ 0 + ","+ 0 + ")";
    console.log("luminated!");
  }
}
function resetMixer() {
  location.reload();
}