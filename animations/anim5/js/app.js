//5 - Ever Larger, until not
//Create an application that draws a circle to the center of the screen every update frame, starting with a diameter of 1. 
//Using a global variable, change increase the diameter of the circle by 1 every frame. 
//Once the circle gets a diameter of 200, set its diameter back to 1.

var cRadius = 0.5;
var diameter = 2*= cRadius;

function setup(){
    createCanvas(300,300);
}
function draw(){
    background(0);
circle(150,150,cRadius);

}