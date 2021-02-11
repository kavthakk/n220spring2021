//circles inside of circles
function setup() {
  createCanvas(300, 300);
  background(200);
  for (var i = 36; i > 0; i--) {
    fill(255);
    stroke(50);
    circle(150, 150, i * 8.33);
  }
}