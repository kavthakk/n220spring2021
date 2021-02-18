let neaColors = ["#9D6C4C", "#FEFDDF", "#FA8CB1"];
function setup() {
  createCanvas(300, 300);

  for (i = 0; i < neaColors.length; i++) {
    noStroke();
    fill(neaColors[i]);
    rect(0, 100 * i, 300, 300);
  }
}