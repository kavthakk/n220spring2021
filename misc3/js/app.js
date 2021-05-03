let xPos = 0;
let yPos = 0;

let xSpeed = 5;
let ySpeed = -1;

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(0,100,120);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    ySpeed = ySpeed + .1;

    fill(255,255,255);
    strokeWeight(2);
    stroke(255,0,0);
    circle (xPos, yPos, 30);

  }

