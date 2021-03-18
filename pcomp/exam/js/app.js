// write out the problems, what skills or methods to use, what you did, what you debugged, where you are at, etc.
// The essay is graded, not the app.
// Comment the code!
// Focus on drawing visual elements first, then motion.
// Break it down
// document the process


//Each circle's color is based off how close it is in the x-axis to the mouse x position, with closer circles being brighter
//When the mouse button is pressed down, animate all the circles downward
//When the mouse button is released, put the circles at the y location of the mouse
//Do not let the circles go beyond the bottom of the screen


function setup() {
  createCanvas(1020, 1020);
}

//draw 10 circles at mouseY. This requires a loop. // achieved!
//the problem is drawing the circles at mouseY. Solution: have the y value of the circle be at mouseY. 
//the problem is changing color based on mouseX. Solution: make a color variable dependent on mouseX. 
//the problem is changing radius based on mouseX. Solution: make the radius dependent on mouseX. 
    //not sure why, but it isn't letting me use circles.radius as my current radius value.
//Also, I have the circles coming from a loop, but I'm not sure if it would be better to have them all be separate objects, 
//in order to change color and radius as per mouseX. 
function draw() {
  background(255);

  circles = {
    cirColor: [mouseX/4],
    xPos: 510,
    yPos: mouseY,
    radius: i * mouseX/25,
  }
  
  for (var i = 10; i > 0; i--) {
  fill(circles.cirColor);
  stroke(25);
  circle(circles.xPos, circles.yPos, i * mouseX / 45);
  
}
//I tried to have some sort of if greater than or less than thing with mouseX to change the radius, but the loop seems to do it fine. 
//Although, I don't think my radius and color solutions are exactly what the assignment is, but it has a similar kind of visual response.
//For the color solution, I expanded the canvas size so that the range of colors can be maximized. And accordingly, had the color... 
//...be responsive to 1/4 of the mouseX value. 


//big problem: having the circles drop when the mouse is pressed.
//I've tried doing if statements, but it seems like I need to define mousePressed.
//Which is weird because it's just a system value thing. Not a variable that I think needs defining.
//Also for some reason, my object strategy isn't working either. 

mousePressed = 
function drop() {
  circles.yPos += 25;
  console.log(drop);
  //the console.log is working when I press the mouse, but I have to work on figuring out how to actually make something else happen.
  //I have the circles.yPos dropping code here, but again, only the console.log is working right now. 
} 

mouseReleased = 
function reset() {
  circles.yPos = mouseY;
  console.log(reset);
  //similar thing here; how to actually make the function--well, function. 
}

if (mouseY > 1020 || mouseX > 1020) {
  background(255);
}

  }

