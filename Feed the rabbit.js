var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

console.log(leavesImg);
console.log(appleImg);

//generate random numbers
//var rand = Math.round(random(1,100))
//console.log(rand)
}

function draw() {
  background(0);


    rabbit.x = World.mouseX;


  if (frameCount % 20 === 0) {
  console.log(appleImg);
  }  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApple();
  spawnLeaves();
  drawSprites();

}

function spawnApple () {
  if (frameCount % 80 === 0) {
    apple = createSprite(random(50, 350),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.05;
    apple.velocityY = 6;
    apple.lifetime = 130;
    

    } 
   }

function spawnLeaves () {
//orange leaves
if (frameCount % 40 === 0) {
  leaves = createSprite(random(50, 350) ,40,10,10);
  leaves.addImage(leavesImg);
  leaves.scale = 0.05;
  leaves.velocityY = 2;
  leaves.lifetime = 200;
} 
}
