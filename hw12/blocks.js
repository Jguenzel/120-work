function Blood(x, y) {
  this.x = x;
  this.y = y;
  this.r = 25;
  this.heartAttack = function(){
    this.col = background(color(random(255)), color(random(255)), color(random(255)));
  }
  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
    return true;
  } else {
    return false;
    }
  }

this.display = function() {
  stroke(255);
  fill('rgb(255, 0, 0)');
  ellipse(this.x, this.y, this.r * 2, this.r * 2);
  fill('rgb(255, 0, 0)');
  ellipse(this.x, this.y, this.r, this.r);
}

this.update = function() {
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
  }
}
