let circleX = 100;
let circleY = 25;
let rectX = 0;
let rectY = 275;
let rectW = 300;
let rectH = 25;
let xSpeed = 3;
let ySpeed = 3;
function setup() {
  createCanvas(300, 300);
}
function draw() {
  background(0);
  noStroke();
  circle(circleX, circleY, 50);
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  if (circleX < 0 || circleX > (width - 25) || circleX < 25) {
    xSpeed = xSpeed * -1;
  }
  if (circleY < 0 || circleY > (height - 25) || circleY < 25) {
    ySpeed = ySpeed * -1;
  }

if (collideRect(circleX, circleY+25, rectX, rectY, rectW, rectH)) {
  xSpeed = xSpeed * 1;
  ySpeed = ySpeed * -1;
}
  noStroke();
  fill(120, 50, 36);
  rect(rectX, rectY, rectW, rectH);
  fill(100, 120, 160);
}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {
  var colliding = false;
  if (circleX > rectX && circleX < rectX + rectW) {
    if (circleY > rectY && circleY < rectY + rectH) {
      return true;
    }
  }
  return false;
}