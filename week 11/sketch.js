function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
    strokeWeight(2);
    noFill();
    stroke(255, 0, 0);
    
  }
  
  function draw() {
    background(20, 0, 0);
    orbitControl();
  
    for (let zAngle = 0; zAngle < 180; zAngle += 20) {
      for (let xAngle = 0; xAngle < 360; xAngle += 20) {
        push();
        rotateZ(zAngle + frameCount * 0.5);
        rotateX(xAngle + frameCount * 0.3);
        translate(0, 300, 0);
        scaryFace();
        pop();
      }
    }
  }
  
  function scaryFace() {
    push();
    stroke(150, 0, 0);
    sphere(30);
    stroke(255, 255, 255);
    strokeWeight(1.5);
    push();
    translate(-10, -10, 25);
    sphere(5);
    pop();
    push();
    translate(10, -10, 25);
    sphere(5);
    pop();
    stroke(200, 0, 0);
    push();
    translate(0, 10, 30);
    rotateX(90);
    ellipse(0, 0, 15, 7);
    pop();
    pop();
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  