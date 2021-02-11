//FizzBuzz
function setup() {
    createCanvas(1500, 300);

for (let i = 0; i < 25; i++) {
    let x = i * 45;
    if (i % 3 == 0 && i % 5 == 0) {
      fill(0, 0, 255);
      square(x, 150, 30);
         }
    else if (i % 5 == 0) {
      fill(0, 255, 0);
      square(x, 150, 30);
        }
    else if (i % 3 == 0) {
      fill(150, 50, 150);
      circle(x+15, 165, 15);
        }
    else {
      fill(0);
      circle(x+15, 165, 15);
        }
    }
}