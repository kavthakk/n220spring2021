//circles inside of circles
function setup() {
  createCanvas(400, 400);
  background(200);
  //for loop, going through smaller and smaller iterations
  for (var i = 50; i > 0; i--) {
    //draw circles with decreasing radii
    fill(255);
    stroke(50);
    circle(200, 200, i * 4);
  }
}