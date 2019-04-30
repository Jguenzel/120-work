let img;
let song;
let dance;
function preload(){
  img = loadImage("pixelart.png");
  song = loadSound("media.io_04 Dancing In the Moonlight (2001 Remix).mp3");
  dance = createImg("dance.gif");
}
function setup(){
song.play();
createCanvas(2000,1500);
}

function draw(){
  image(img, 0, 0);
  dance.size(900, 900);
  dance.position(500, 600);
}
