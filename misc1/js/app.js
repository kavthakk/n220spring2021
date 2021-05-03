//1- Counter Create an application that outputs a number to the console every draw call of P5. 
//This number should start at zero, and increase by one every frame.


var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1;

function setup() {  
  createCanvas(240, 120);  
  ellipseMode(RADIUS);
  }


function draw() {  
    background(0);  
    x += speed * direction;  // Increase the value of x
    if ((x > width-radius) || (x < radius)) {
        direction = -direction; //flip direction
    }
    if (direction==1) {
        arc(x, 60, radius, radius, 0.52, 5.76); //face right
    } else {
        arc(x, 60, radius, radius, 3.67, 8.9); //face left
    } 
  }
