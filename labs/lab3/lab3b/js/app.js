//pyramid
function setup() {
  createCanvas(150, 150);
let rowStack = 3;
  for (let rowValue = 0; rowValue <= rowStack; rowValue++) {
    for (let columnValue = 0; columnValue <= rowValue; columnValue++) {
      stroke(255,255,255, 200);
      fill(255, 1, 1);
      square(columnValue * 25, rowValue * 25, 25);
    }
  }
}