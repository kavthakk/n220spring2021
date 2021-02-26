//sets all color variables
let peanutButter = "#d18241";
let jelly = "#8823c4";
let bread = "#e6caaa";
let crust = "#876237";
let globSize = 25;

//sets up the bread, ready for magic
function setup() {
  createCanvas(300, 300);
  fill(bread);
  strokeWeight(30);
  stroke(crust);
  rect(0, 0, 300, 300);
  noStroke();
}

//if the mouse is pressed, a circle of peanutButter is applied
function mousePressed() {
  fill(peanutButter);
  circle(mouseX, mouseY, globSize);
}

//if the mouse is dragged, a shmear of peanutButter is applied
function mouseDragged() {
  fill(peanutButter);
  circle(mouseX, mouseY, globSize);
}

//if the mouse is released, a circle of peanutButter is applied
function mouseReleased() {
  fill(peanutButter);
  circle(mouseX, mouseY, globSize);
}

//if a key is pressed, a glob of jelly is applied
function keyPressed() {
  fill(jelly);
  circle(mouseX, mouseY, globSize);
}

//if a key is released, a glob of jelly is applied
function keyReleased() {
  fill(jelly);
  circle(mouseX, mouseY, globSize);
}

//if the mouse scrolls, then the bread is cleared of all peanutButter and jelly
function mouseWheel() {
  fill(bread);
  strokeWeight(30);
  stroke(crust);
  rect(0, 0, 300, 300);
  noStroke();
}