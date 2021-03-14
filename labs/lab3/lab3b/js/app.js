//pyramid
function setup() {
  createCanvas(150, 150);
//have 3 rows
  let rowStack = 3;
  for (let rowValue = 0; rowValue <= rowStack; rowValue++) {
    for (let columnValue = 0; columnValue <= rowValue; columnValue++) {
      stroke(255,255,255, 200);
      //draw red squares in iterative positions
      fill(255, 1, 1);
      square(columnValue * 25, rowValue * 25, 25);
    }
  }
}