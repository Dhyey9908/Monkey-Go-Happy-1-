var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(400,400)
 
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
  
 ground = createSprite(400,325,900,10);
 ground.velocityX = -4;
 ground.x=ground.width/2;
 console.log(ground.x);
  
 var survivalTime = 0;
  
 bananasGroup = new Group();
 obstaclesGroup = new Group();
   
} 


function draw() {
   
 background("white");
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime = Math.ceil(frameCount/frameRate());
 text("Survival Time = " + survivalTime,100,50);
  
 if (ground.x < 0){
  ground.x = ground.width/2;
 }

  
 if(keyDown("space") && monkey.y >= 160) {
  monkey.velocityY = -12;
 }
  
 monkey.velocityY = monkey.velocityY + 0.8;
  
 monkey.collide(ground);
  
 spawnBanana();
 spawnObstacle();
  
 if (obstaclesGroup.isTouching(monkey)){
  monkey.velocityX = 0;
  obstaclesGroup.setVelocityXEach(0);
  bananasGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  bananasGroup.setLifetimeEach(-1);
 }
  
 drawSprites(); 
  
}

function spawnBanana() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(600,900,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -9;
    banana.lifetime = 300;
    
    bananasGroup.add(banana);
  }
  
}

function spawnObstacle() {

  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,900,20,20);
    obstacle.y = Math.round(random(301,302));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -9;
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
  }
  
}