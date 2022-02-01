var jet, jetImg;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function preload() {
  jetImg=loadImage("images/jet.jpg");
  

}

function draw() {
  background("black");  
  jet=createSprite(40, 200);
  jet.addImage(jetImg);
  jet.scale= 0.2;

  drawSprites();
}