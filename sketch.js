
var trex ,trex_running;
var ground,ground_image
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
ground_image = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(100,150,10,10)
 trex.addAnimation("running",trex_running)
 trex.scale = 0.5
 ground = createSprite(300,180,600,20)
 ground.addImage(ground_image)
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -5
  }
  trex.velocityY += 0.5
  trex.collide(ground)
  ground.velocityX = -10
  if(ground.x < 0){
    ground.x = 300
  }
drawSprites()
}
