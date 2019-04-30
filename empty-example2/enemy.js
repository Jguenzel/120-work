class Enemy {
  constructor(x, y, r = 50){
  this.x = random(width);
  this.y = random(height);
  this.r = r;
  }
display(){
  fill(255);
  ellipse(this.x, this.y, this.r);
  }
}
