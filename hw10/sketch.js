let col = ['rgb(66, 244, 146)', 'rgb(244, 167, 66)', 'rgb(255, 42, 0)'];
var index = 0;

function setup(){
  createCanvas(windowWidth, 800);
  frameRate(5);
}

function draw(){
  background(random(255));
  draweyeguy();
  index = index + 1
  if (index == col.length){
    index = 0;
  }
  fill(random(255));
  textSize(50);
  text("I see you", 800, 600);
}


function draweyeguy(){
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(900, 250, 500, 500);
  pop();
  fill(col[index]);
  ellipse(900, 250, 300, 300);
  push();
  fill(0, 0, 0);
  ellipse(900, 250, 100, 100);
  pop();

}
