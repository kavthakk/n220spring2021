let xPos = 0;
let yPos = 0;

let xSpeed = 1;
let ySpeed = -2;

function setup() {
    createCanvas(400,400);
}

function draw() {
    background(62,237,108);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    ySpeed = ySpeed + .1;

    fill(19,71,26);
    circle (xPos, yPos, 30);
}