
function setup(){
  createCanvas(windowWidth, 800);
  background(0);
}
function draw(){
    let y = 0;

    while (y <= height) {
      fill(color(random(245, random(255), random(205))));
      ellipse(500, y, 255, 255);
      y = y + 1;
    }
}
