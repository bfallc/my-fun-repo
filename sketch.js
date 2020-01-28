let x = 0;
let y = 0;
let z = 1.5;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("sketch");

}

function draw() {
//background(210);
  x=x+4.5;
  y=y+3;

  if(x>width){
    x=0;
    z=z-.05;
    
}
rotate(z);
  fill(255,0,0);
  rect(x,0,20,y);

  if(y>300){
    y=0;
  }
  if(z<0){
      z=1.5;
  }



}