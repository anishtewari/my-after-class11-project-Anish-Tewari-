var sea;
var ship;

function preload(){
seaImg=loadImage("sea.png")
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
createCanvas(1350,650);
sea=createSprite(200,200,1200,700)
sea.addImage(seaImg)
ship=createSprite(600,325,20,20)
ship.addAnimation("sailing",shipImg1)
ship.scale=0.8
}

function draw() {
if (sea.x <0) {
  sea.x=sea.width/2;
}
if (keyDown("UP_ARROW")) {
ship.velocityY=-2;
}
if (keyDown("DOWN_ARROW")) {
ship.velocityY=+2;
}
if (keyDown("LEFT_ARROW")) {
  ship.velocityX=-2;
  }
  if (keyDown("RIGHT_ARROW")) {
    ship.velocityX=+2;
    }
  background("blue");
  drawSprites()
}