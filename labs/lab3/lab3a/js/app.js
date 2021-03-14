//FizzBuzz
function setup() {
    createCanvas(1500, 300);

    //for loop, going through 25 iterations
for (let i = 0; i < 25; i++) {
    let x = i * 45;
    //if i is divisible by 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {
      //draw a blue square
      fill(0, 0, 255);
      square(x, 150, 30);
         }
    //if i is divisible by 5
         else if (i % 5 == 0) {
      //draw a green square
          fill(0, 255, 0);
      square(x, 150, 30);
        }
    //if i is divisible by 3
        else if (i % 3 == 0) {
      //draw a purple circle
          fill(150, 50, 150);
      circle(x+15, 165, 15);
        }
    //if i isn't divisible by 3, 5, or 3 and 5
        else {
      //draw a black circle
          fill(0);
      circle(x+15, 165, 15);
        }
    }
}