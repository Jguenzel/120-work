var cells = [];

function setup() {
  frameRate(20);
  createCanvas(windowWidth, windowHeight);
for (var i = 0; i < 20; i++) {
  cells[i] = new Blood(random(width),random(height));
  }
}

function draw() {
  background('rgb(102, 18, 18)');
  for (var i = 0; i < cells.length; i++){
  cells[i].update();
  cells[i].display();
  for (var z = 0; z < cells.length; z++){
    if (i != z && cells[i].intersects(cells[z])) {
      cells[i].heartAttack();
      cells[z].heartAttack();
      }
    }
  }
}
