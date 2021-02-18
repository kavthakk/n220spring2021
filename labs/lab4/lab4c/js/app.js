var value = 10;
let x = [];
let y = [];

function setup() {
    createCanvas(600,600);
    noStroke()

    for (var i=0; i < value; i++) {
        x[i] = 0;
        y[i] = 0;
    }
}

function draw() {
    background(77, 45, 11);

    x.push(mouseX);
    x.shift();

    y.push(mouseY);
    y.shift();

    for (var i = 0; i < value; i++) {
        fill(0, 194, 16);
        circle(x[i], y[i], 20);
        fill(0, 77, 10);
        ellipse(x[i], y[i], 25, 40);
    }
}