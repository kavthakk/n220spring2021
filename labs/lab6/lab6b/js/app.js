ballObject = {
  x: 750,
  y: 50,
  radius: 50,
  xSpeed: -5,
  ySpeed: 5,
  color: [0, 255, 255],
  xlBound: 50,
  xrBound: 750,
  ytBound: 50,
  ybBound: 550,
  bounceFactor: -1,
  update: function () {
    fill(this.color);
    circle(this.x, this.y, this.radius);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x >= this.xrBound || this.x <= this.xlBound) {
      this.xSpeed *= this.bounceFactor;
    }
    if (this.y >= this.ybBound || this.y <= this.ytBound) {
      this.ySpeed = this.ySpeed *= this.bounceFactor;
    }
  }
}
function setup() {
  createCanvas(800, 600);
}
function draw() {
  //remove background to see the bounce pattern
  background(0);
  ballObject.update();
}
