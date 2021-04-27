var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var ground;
var gameState;
var PLAY,END;
function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {

  createCanvas(600, 400);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.10;

  ground = createSprite(400, 350, 900, 10);
  
  console.log(ground.x);



  
}


function draw() {
  background("green");



  
if(gameState===PLAY){
  
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  
  if (keyDown("space") && monkey.y >= 160) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);
monkey.setCollider("rectangle");
}




  score = 0;
  var survivalTime = 0;

  stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black");
  text("survivalTime:" + survivalTime, 100, 50);
  survivalTime = Math.ceil(frameCount / frameRate());

  spawnObstacles();


  function spawnObstacles() {

    if (frameCount % 300 === 0) {
      obstacle = createSprite(400, 300, 10, 10);
      obstacle.velocityX = -5;
      obstacle.addImage("danger", obstaceImage);
      obstacle.x = Math.round(random(280, 450));
      obstacle.scale = 0.25;
      obstacle.lifeTime = 200;
   }
  }

  function spawnFruits() {
    if (frameCount % 10 === 0) {
      banana = createSprite(400, 100, 10, 10);
      banana.addImage("fruit", bananaImage);
      banana.velocityX = -5;
      banana.lifeTime = 200;
      banana.y = Math.round(random(120, 200));
      banana.scale = 0.5;

    }
  }


  drawSprites();
}