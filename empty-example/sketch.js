
var x1 = 100;
var y1 = 100;
var s = 10;
speed = 20;
var ene = [];

function setup(){

  for ( let i = 0; i < 10; i++){
    ene.push( new Enemy);
  }

  createCanvas(windowWidth, 800);
}

function draw(){
  background(0);
  if (x1 < 0){
    x1 = x1 + speed;
  }
  if (x1 > windowWidth){
    x1 = x1 - speed;
  }
  if (y1 < 0){
    y1 = y1 + speed;
  }
  if (y1 > 800){
    y1 = y1 - speed;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x1 = x1 + speed;
  }
  if(keyIsDown(LEFT_ARROW)){
    x1 = x1 - speed;
  }

  if(keyIsDown(UP_ARROW)){
    y1 = y1 - speed;
  }
  if(keyIsDown(DOWN_ARROW)){
    y1 = y1 + speed;
  }
  for (let i = 0; i < ene.length; i++) {
      ene[i].display();
    }
  fill(255);
  ellipse(x1, y1, s, s);

}
