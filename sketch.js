function setup() {
  
  createCanvas(400, 400);

}

function draw() {
 
  noStroke();
  background(255, 255, 255);
  rectMode(CENTER);
  
  fill(225,0,255);
  triangle(150,175,250,175,200,240);
  triangle(150,175,175,150,200,175);
  triangle(200,175,225,150,250,175);
 
  fill(255,255,255);
  rect(230,190,5,5);
}