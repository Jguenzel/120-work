let img;
let song;
function preload(){
  img = loadImage("pixelart.png");
  song = loadSound("media.io_04 Dancing In the Moonlight (2001 Remix).mp3");
}
function setup(){
song.play();
createCanvas(2000,1500);
}

function draw(){
  image(img, 0, 0);
}
