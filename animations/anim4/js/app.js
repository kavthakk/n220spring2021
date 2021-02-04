//Make a canvas 800 px x 600 px
//Create a sketch with a circle moving left and down at 5px per update. 
//This speed should be stored as separate speed variables in your code (this is required to solve this problem).
//Assume a 'world bounds' for this object to be 800x600
//When the ball reaches the edge of the bounds, 
//bounce it by multiplying the associated velocity variable by *= -1, to make the ball be moving in the opposite direction. 
//If you have found a hit on the right or left bounds, it should be the x velocity variable you are modifying. 
//If its on the top or bottom bounds, you should be modifying the y velocity variable.
//Hint: To check to see if a ball is at the bounds, check to see if it is at or past the bounds.

let x = 750;
let y = 50;
var xSpeed = -5;
var ySpeed = 5; 

function setup(){
    createCanvas(800, 600);
}
function draw(){
    background(0);
    circle(x,y,50);
    x += xSpeed;
    y += ySpeed;

    if (x >= 750 || x <= 50) {
        xSpeed = xSpeed *= -1;
    } 
    if (y >= 550 || y <= 50) {
        ySpeed = ySpeed *= -1;
    }
}

