const Engine =Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var sky, skyImage;
var fairy , fairyImage;
var star, starImage;

function preload()
{
  starImage=loadImage("images/star.png");
  skyImage=loadImage("images/starnight.png");
   fairyImage=loadAnimation("images/fairy1.png","images/fairy2.png");
   
}

function setup() {
  createCanvas(800, 650);

  star=createSprite(650,30);
  star.addImage("star",starImage);

  sky=createSprite(200,200,10,10);
  sky.addImage("sky",skyImage);

  fairy=createSprite(30,400,10,10);
  fairy.addAnimation("fairy",fairyImage);
  fairy.scale=0.2;
  
    engine=Engine.create();
    world=engine.world;

    starBody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
    World.add(world,starBody);

    Engine.run(engine);

}

function draw() {
  background("black");

  star.x=starBody.position.x;
  star.y=starBody.position.y;

  if(star.y>470&& starBody.position.y>470){
    Matter.Body.setStatic(starbody,true);
  }
  
  drawSprites();
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    fairy.x= fairy.x+20;
  }

  if(keyCode===LEFT_ARROW){
    fairy.x=fairy.x-20;
  }
  if(keyCode===DOWN_ARROW){
    Matter.Body.setStatic(starBody,false)
  }
}
