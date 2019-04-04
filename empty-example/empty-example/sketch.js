let firefly = [];
function setup() {
  createCanvas(windowWidth, 800);
    for (let i = 0; i < 100; i++){
      firefly.push(new Flying());
    }

  }

function draw() {
  background('rgb(0, 0, 0)');
    for (let i = 0; i < firefly.length; i++) {
      firefly[i].move();
      firefly[i].display();
  }
}
class Flying {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(20, 60);
      this.speed = 15;
      this.color = ('rgb(244, 209, 66)');
    }
move() {
  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);
}
display() {
  fill(this.color);
  rect(this.x, this.y, this.diameter, this.diameter);
  }
}
