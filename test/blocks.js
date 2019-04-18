function Block(x, y) {
  this.x = x;
  this.y = y;
  this.r = 25;
  this.col = color('rgb(244, 229, 66)');
  this.changeSize = function(){
    this.col = color(random(255));
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
  fill(this.col);
  rect(this.x, this.y, this.r * 4, this.r * 4);
}

this.update = function() {
  this.x = this.x + random(-3, 3);
  this.y = this.y + random(-3, 3);
  }
}
