/*Create a personal project that uses at least 3/4 of the facets below:
1. Accessing and modifying an array
2. Animating an object on the page
3. Loops (either in tandem with an array, or by themselves)
4. Keyboard input
5. Object to represent an item on the page
6. Function that takes an argument, returns an output
7. An if / else if / else block of code */

tlObject = {
    color: [25, 50, 100],
    xPos: 0,
    yPos: 0,
    radius: 25,
    update: function () {
      fill(this.color);
      this.xPos += 0.5;
      this.yPos += 0.5;
      this.radius += 0.05;
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  trObject = {
    color: [133, 180, 255],
    xPos: 300,
    yPos: 0,
    radius: 25,
    update: function () {
      fill(this.color);
      this.xPos -= 0.5;
      this.yPos += 0.5;
      this.radius += 0.05;
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  leftObject = {
    color: [200, 0, 200],
    xPos: 0,
    yPos: 150,
    radius: 25,
    update: function () {
      fill(this.color);
      this.xPos += 0.5;
      this.radius += 0.05;
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  rightObject = {
    color: [250, 250, 0],
    xPos: 300,
    yPos: 150,
    radius: 25,
    update: function () {
      fill(this.color);
      this.xPos -= 0.5;
      this.radius += 0.05;
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  topObject = {
    color: [0, 255, 255],
    xPos: 150,
    yPos: 0,
    radius: 25,
    update: function () {
      fill(this.color);
      this.yPos += 0.5;
      this.radius += 0.05;
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  bottomObject = {
    color: [255, 0, 0],
    xPos: 150,
    yPos: 300,
    radius: 25,
    update: function () {
      fill(this.color);
      this.yPos -= 0.5;
      this.radius += 0.05;
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  brObject = {
    color: [133, 180, 255],
    xPos: 300,
    yPos: 300,
    radius: 25,
    update: function () {
      fill(this.color);
      this.xPos -= 0.5;
      this.yPos -= 0.5;
      this.radius += 0.05;
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  blObject = {
    color: [25, 50, 100],
    xPos: 0,
    yPos: 300,
    radius: 25,
    update: function () {
      fill(this.color);
      this.xPos += 0.5;
      this.yPos -= 0.5;
      this.radius += 0.05;
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  coolTransform = {
    update: function () {
      if (tlObject.yPos > 150 || trObject.yPos > 150) {
        tlObject.radius -= 0.1;
        trObject.radius -= 0.1;
      }
      if (leftObject.xPos > 150 || rightObject.xPos < 150) {
        leftObject.radius -= 0.1;
        rightObject.radius -= 0.1;
      }
      if (topObject.yPos > 150 || bottomObject.yPos < 150) {
        topObject.radius -= 0.1;
        bottomObject.radius -= 0.1;
      }
      if (brObject.yPos < 150 || blObject.yPos < 150) {
        brObject.radius -= 0.1;
        blObject.radius -= 0.1;
      }
    }
  }
  whiteDot = {
    xPos: 150,
    yPos: 150,
    radius: 15,
    color: [255],
    update: function () {
      fill(this.color);
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  greenDot = {
    xPos: 150,
    yPos: 150,
    radius: 0,
    color: [0, 85, 35],
    update: function () {
      fill(this.color);
      circle(this.xPos, this.yPos, this.radius);
    }
  }
  nextFunk = {
    update: function () {
      if (leftObject.xPos > 250) {
        whiteDot.radius += 0.5;
      }
    }
  }
  lastFunk = {
    update: function () {
      if (whiteDot.radius > 125) {
        greenDot.update();
        greenDot.radius += 1;
      }
    }
  }
  
  function setup() {
    createCanvas(300, 300);
    //feel free to remove this background for a "blank" canvas
    background(0, 85, 35);
  }
  
  // for a more interactive version, uncomment one of the following lines
  mouseMoved =  
  //keyPressed = 
  function draw() {
    noStroke();
    //for distinct circle shapes, uncomment the next line
    //background(0, 85, 35);
    tlObject.update();
    trObject.update();
    leftObject.update();
    rightObject.update();
    topObject.update();
    bottomObject.update();
    brObject.update();
    blObject.update();
    whiteDot.update();
    coolTransform.update();
    nextFunk.update();
    lastFunk.update();
  }