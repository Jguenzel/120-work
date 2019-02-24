//green circle that moves across the screen
let slime = {};

slime.size = 200, 1;
slime.color = 'rgb(66, 244, 140)';
slime.posX = 200;
slime.posY = 200;

//function setup for the canvas as well as the the two ellipse functions down below
function setup() {
  bgColor = (80);
  x_pos = 0;
  createCanvas(windowWidth, 800);
  background(bgColor);
  noStroke();
  frameRate(10);
}
//setup for slime, the opaque orange stroke and the ellipse in the middle of the canvas that shows the color of the opaque stroke used.
function draw() {
let value = 500;
let sizeA = map(value, 0, 100, 0, 200);
ellipse(sizeA, 300, 100, 100);

translate(slime.posX, slime.posY);
fill(slime.color);
ellipse(0, 0, slime.size);


fill(color(random(244),random(104),random(65), 5));
ellipse(x_pos, 300, 100, 100 );

x_pos = x_pos + 1;
slime.posX += random( -4, 4 );
slime.posY += random( -4, 4 );
}
