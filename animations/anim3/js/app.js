//Create a canvas 800px x 600 px.
//Make an application that starts drawing a ball on the left hand of the screen - make it move to the right 5 pixels per frame.
//Write the code so that when the circle reaches 800 pixels to the right, move the circle to the far left of the screen.

var xPos = 100;
var xSpeed = 5;
var xStop = 700;

function setup(){
    createCanvas(800, 600);
    
}
function draw(){
background(11,147,85);
fill(15,90,200);
noStroke();
circle(xPos, 300, 100);
xPos += xSpeed;

if (xPos==xStop) {
    xPos = 100;
}


}