//loads background image
let img;
//loads song
let song;
//loads dancing stick figure
let dance;
//preloads images and song
function preload(){
//loads background image from github directory
  img = loadImage("pixelart.png");
// loads music from github directory; source - https://soundcloud.com/haffymusic/toploader-dancing-in-the-moonlight-haffy-remix-pm-me-if-you-want-to-do-vocals-on-this
  song = loadSound("Dancing in the moonlight.mp3");
// loads sprite animation of stick figure
  dance = createImg("dance.gif");
}
function setup(){
// plays song
song.play();
createCanvas(2000,1500);
// sets pixelart as background
background(img);
}
function draw(){
push();
fill(0);
// creates stars in set random values
if (mouseIsPressed){
  noStroke()
  fill(255);
  ellipse(random(2000), random(950), random(3), random(3));
}
// size of the stick figure
dance.size(900, 900);
// position of the stickfigure
dance.position(500, 600);
}
