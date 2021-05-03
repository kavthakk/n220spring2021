function setup(){
    createCanvas(400, 300);
    background(200);
    
    for (var i=9; i > 0; i--) {
        var randRColor = Math.random() * 255;
        var randGColor = Math.random() * 255;
        var randBColor = Math.random() * 255;
        fill(randRColor, randGColor, randBColor);

        stroke(255 - (i*15));

        circle(200,150, i * 25);
    }
}