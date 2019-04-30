let img;
let song;
let dance;
function preload(){
  img = loadImage("pixelart.png");
  song = loadSound("Dancing in the moonlight.mp3");
  dance = createImg("dance.gif");
}
function setup(){
song.play();
createCanvas(2000,1500);
background(img);
}
function draw(){
push();
fill(0);
if (mouseIsPressed){
  noStroke()
  fill(255);
  ellipse(random(2000), random(950), random(3), random(3));
}
dance.size(900, 900);
dance.position(500, 600);
}
