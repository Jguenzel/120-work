function setup() {

  createCanvas(500, 500);
  background(255, 121, 94);

  translate(250, 250);

  push();
  fill('rgb(94, 249, 255,)' );

  noStroke();

  translate(0, -100)
  fill('rgb(94, 249, 255)' );
  ellipse(0, 0, 80, 80 );
  pop();

  push();
  translate(0, -50)
  fill('rgb(94, 249, 255)' );

  noStroke();

  ellipse(0, 0, 100, 100 );
  pop();

  push();
  translate(0, -100)
  fill('rgb(255, 255, 255)');

  noStroke();

  ellipse(0, 0, 30, 30);
  pop();

  push();
  translate(0, -100)
  fill('rgb(0, 0, 0)');

  noStroke();

  ellipse(0, 0, 10, 10);
  pop();

  push();
  translate(0, -100);

  fill( 0 );
  arc(
  0,
  20,
  40,
  50,
  radians(350),
  radians(190),
  PIE
);
  pop();


  push();
  translate( 30, -80)
  fill('rgb(95, 249, 255)');

  noStroke();

  rotate( radians(250) );
  rect(0, 0, 10, 90);

  translate(-80, 110)
  fill('rgb(95, 249, 255)');

  noStroke();

  rotate( radians(260) );
  rect(0, 0, 10, 90);
  pop();

  push();
  translate(40, -60)
  fill('rgb(15, 153, 158)');

  noStroke();

  rotate(radians(-60) );
  rect(0, 0, 10, 90);
  pop();


  push();
  translate(-100, -110)
  fill('rgb(95, 249, 255)');

  noStroke();

  rotate(radians(-60) );
  rect(0, 0, 10, 90);

  translate(-70, -30)
  fill('rgb(95, 249, 255)');

  noStroke();

  rotate(radians(-60) );
  rect(0, 0, 10, 90);
  pop();

  push();
  translate(-40, -70)
  fill('rgb(14, 153, 158)');

  noStroke();

  rotate(radians(60) );
  rect(0, 0, 10, 90);
  pop();

  push();

  translate(0, -250);
  textAlign(CENTER);
  textSize(20);
  textFont("TimesNewRoman");
  text("a blue spider monster, by Jonas Guenzel", 0, 27);
  pop();

}
