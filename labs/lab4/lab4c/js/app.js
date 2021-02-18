//Personal Composition
let colorWheel = ["#0a003b", "#ffc2c2", "#047000", "#0a003b", "#ffc2c2", "#047000", "#0a003b", "#ffc2c2", "#047000", "#0a003b", "#ffc2c2", "#047000", "#0a003b", "#ffc2c2", "#047000", "#0a003b", "#ffc2c2", "#047000"];
function setup() {
  createCanvas(600, 600);

  for (i = 0; i < colorWheel.length; i++) {
    noStroke();
    fill(colorWheel[i]);
    rect(100 * i, 100 * i, 300, 300);
    circle(50 * i, 50 * i, 50);
    circle(50 * i, 100 * i, 25);
    circle(100 * i, 50 * i, 25);
    circle(50 * i, i + 10, 15);
    circle(i + 10, 50 * i, 15);
  }
}