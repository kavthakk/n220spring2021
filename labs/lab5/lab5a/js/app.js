let trafficLight = ["#FE0002", "#FFFF0E", "#01FF01"];
function setup() {
  createCanvas(300, 300);
  strokeWeight(8);
  fill(100);
  rect(100, 25, 100, 250, 20);
  for (i = 0; i < trafficLight.length; i++) {
    strokeWeight(2);
    stroke(0);
    fill(trafficLight[i]);
    circle(150, (75 * i) + 75, 25);
  }
}