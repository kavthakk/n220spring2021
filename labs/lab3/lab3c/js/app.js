//circles inside of circles
function setup() {
  createCanvas(400, 400);
  background(200);
  for (var i = 50; i > 0; i--) {
    fill(255);
    stroke(50);
    circle(200, 200, i * 4);
  }
}