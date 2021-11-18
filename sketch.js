var navio, navioimg, navioAnima;
var sea, seaimg;

function preload(){
  
  
  seaimg = loadImage("sea.png");
  navioAnima = loadAnimation("ship1.png", "ship2.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 195, 400, 20);
  sea.velocityX = -4;
  sea.addImage("sea",seaimg);
  sea.scale = 0.4;
  
  
  navio = createSprite(70, 266, 20, 50);
  navio.addAnimation("navio", navioAnima);
  navio.scale = 0.2;
  
  
}
function draw(){
  background("white");
  
  drawSprites();
  if (sea.x<0){
    sea.x = sea.width / 5;
  }
} 
  
  
 
  