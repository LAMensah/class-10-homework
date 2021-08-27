
var ship=createSprite(200,200,500,500);
ship.loadAnimation(ship_sailing);
var sea=createSprite(0,200,600,600);
var seaImg
function preload(){
  seaImg =  loadImage("sea.png");
 ship_sailing = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  // creating ship
  ship = createSprite(50,160,50,50);
  ship.addAnimation( ship_sailing);
  edges = createEdgeSprites();
  //adding scale and position to ship
ship.scale = 1.5;
  ship.x = 50
  sea=createSprite(300,190,600,10);
  sea.addImage(seaImage);
sea.velocityX=5;
}
 drawsprites();
 
