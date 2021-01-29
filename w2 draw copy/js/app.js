function setup() {
    createCanvas(500,500);
}


function draw() {
    background(11,28,71);

    //light blue circle
    noStroke();
    fill(3, 252, 232);
    circle (250, 250, 250);

    //white circle with dark green stroke
    fill(255, 255, 255);
    strokeWeight(20);
    stroke(11, 71, 11)
    circle (250, 250, 200);

    //black rectangle in middle
    noStroke();
    fill(0,0,0);
    rect(60,237.5,380,25);

    //pinkish line across
    strokeWeight(10);
    stroke(255, 150, 150);
    line(0, 250, 500, 250);

    //tall K
    noStroke();
    fill(11,28,71);
    rect(115, 120, 20, 260, 10);

    //tall T
    noStroke();
    fill(11,28,71);
    rect(305, 125, 20, 250, 10);

    //top K
    strokeWeight(20);
    stroke(11,28,71);
    line(135, 250, 225, 130);

    //bottom K
    strokeWeight(20);
    stroke(11,28,71);
    line(135, 250, 225, 370);

    //top T
    strokeWeight(20);
    stroke(11,28,71);
    line(250, 130, 380, 130);

}