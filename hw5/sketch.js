
let angle = 0;
let cloud = 1000;
let pos_Y = 0;
let pos_X = 0;
function setup(){
  createCanvas(windowWidth, 800);
  let color_blue = 0;
}

function draw(){

noCursor();

background(114, 252, 255);

translate(50, 50)
noStroke();
fill(244, 244, 244);
ellipse(cloud, pos_X, pos_Y);

pos_X = pos_X + 1;
pos_Y = pos_Y + 1

translate(mouseX, mouseY);
noStroke();
rotate(radians(mouseX));
fill('rgb(244, 86, 86)');
ellipse(0, -40, 50, 50);

noStroke();
rotate(radians(mouseY));
fill('rgb(244, 86, 86)');
ellipse(0, 0, 50, 50);

noStroke();
fill('rgb(255, 224, 114)')
rect(0, -40, 20, 20)
angle = angle * 10;
stroke(0.5);
fill('rgb(244, 86, 86)');
rotate(radians(mouseX));
rect(0, 20, 20, 50)

noStroke();
fill(244, 244, 244);
ellipse(0, 0, 20, 20);

noStroke();
fill(0, 0, 0);
ellipse(0, 0, 10, 10);
push();
}
