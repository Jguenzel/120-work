let img;
function preload(){
  img = loadImage("pixelart.png");
}
function setup(){
createCanvas(2000,2000);
}

function draw(){
  image(img, 0, 0);
}
