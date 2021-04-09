//Personal Composition
//Create a composition that, at minimum:
//1. Changes the css property of an asset on a mouse interaction (mouse over, mouse out, click)
//2. Modifies and changes the inner html of one element
//3. Accesses and modifies a variable outside of a local, function scope

var dvThingone = document.getElementById("dvThingone");
var dvThingtwo = document.getElementById("dvThingtwo");
var dvThingthree = document.getElementById("dvThingthree");
var dvThingfour = document.getElementById("dvThingfour");

let colors = [ "#229954", "#2E86C1", "#7D3C98", "#A93226", "#F4D03F", "#E67E22" ];

function doThingone() {
  let i = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 5);
  dvThingone.innerHTML = i + " pixel square with hex code " + colors[c]; 

  dvThingone.style.height = i + "px";
  dvThingone.style.width = i + "px";
  dvThingone.style.backgroundColor = colors[c];
}

function doThingtwo() {
  let i = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 5);
  dvThingtwo.innerHTML = i + " pixel square with hex code " + colors[c];

  dvThingtwo.style.height = i + "px";
  dvThingtwo.style.width = i + "px";
  dvThingtwo.style.backgroundColor = colors[c];
}

function doThingthree() {
  let i = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 5);
  dvThingthree.innerHTML = i + " pixel square with hex code " + colors[c];

  dvThingthree.style.height = i + "px";
  dvThingthree.style.width = i + "px";
  dvThingthree.style.backgroundColor = colors[c];
}

function doThingfour() {
  let i = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 5);
  dvThingfour.innerHTML = i + " pixel square with hex code " + colors[c];

  dvThingfour.style.height = i + "px";
  dvThingfour.style.width = i + "px";
  dvThingfour.style.backgroundColor = colors[c];
}