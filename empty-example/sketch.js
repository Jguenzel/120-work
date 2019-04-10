let skully = [];

function setup(){
  createCanvas(windowWidth, 400);
  let b = new bubble(width/2, height/2, 10);
  skully.push(b);
}

function mouseDragged() {
  let r = random(10, 50);
  let b = new bubble(mouseX, mouseY, r);
  skully.push(b);
}

function draw(){
  background(0);
  for (let i = 0; i < skully.length; i++) {
      skully[i].move();
      skully[i].show();
  }
}
