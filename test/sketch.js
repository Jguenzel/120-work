var sqaures = [];

function setup() {
  createCanvas(windowWidth, 800);
for (var i = 0; i < 10; i++) {
  sqaures[i] = new Block(random(width),random(height));
  }
}

function draw() {
  background('rgb(244, 66, 226)');
  for (var i = 0; i < sqaures.length; i++){
  sqaures[i].update();
  sqaures[i].display();
  for (var j = 0; j < sqaures.length; j++){
    if (i != j && sqaures[i].intersects(sqaures[j])) {
      sqaures[i].changeColor();
      sqaures[j].changeColor();
      }
    }
  }
}
  //var d = dist(b1.x, b1.y, b2.x, b2.y);

  //if (d < b1.r + b2.r) {
    //b1.changeColor();
    //b2.changeColor();
  //}

//}
