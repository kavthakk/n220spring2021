function setup() {
  createCanvas(300, 300);
}

let coolThings = [
  thingOne = {
    x: 20,
    y: 50,
    radius: 15,
  },
  thingTwo = {
    x: 40,
    y: 150,
    radius: 30,
  },
  thingThree = {
    x: 60,
    y: 250,
    radius: 45,
  }
];

function draw() {
  background(200);
  for (i = 0; i < coolThings.length; i++) {
    noStroke();
    fill(50);
    circle(thingOne.x, thingOne.y, thingOne.radius);
    circle(thingTwo.x, thingTwo.y, thingTwo.radius);
    circle(thingThree.x, thingThree.y, thingThree.radius);
    thingOne.x += 1;
    thingTwo.x += 1;
    thingThree.x += 1;
  }
}