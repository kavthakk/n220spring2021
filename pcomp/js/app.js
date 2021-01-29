function setup() {
    createCanvas(500,500);
}
function draw() {
    
    let navy = color(11, 28, 71);
    let xPos = 250;
    let yPos = 250;
    
    background(navy);
    
    
    //light blue circle
    noStroke();
    fill(3, 252, 232);
    circle (xPos, yPos, 250);

    //white circle with dark green stroke
    fill(255, 255, 255);
    strokeWeight(20);
    stroke(11, 71, 11)
    circle (xPos, yPos, 200);

    //black rectangle in middle
    noStroke();
    fill(0,0,0);
    rect(60,240,380,20);

    //pinkish line across
    strokeWeight(10);
    stroke(255, 150, 150);
    line(0, yPos, 500, yPos);

    //tall K
    noStroke();
    fill(navy);
    rect(115, 120, 20, 260, 10);

    //tall T
    noStroke();
    fill(navy);
    rect(305, 125, 20, xPos, 10);

    //top K
    strokeWeight(20);
    stroke(navy);
    line(135, yPos, 225, 130);

    //bottom K
    strokeWeight(20);
    stroke(navy);
    line(135, yPos, 225, 370);

    //top T
    strokeWeight(20);
    stroke(navy);
    line(xPos, 130, 380, 130);

}