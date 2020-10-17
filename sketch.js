
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var down;
var wallImage;
var ground;
var wall1,wall2,wall3;

function preload()
{
	wallImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,650,20);
	ground = new Ground(400,700,800,20);

	wall1 = new Wall(625,620,5,140);
	wall2 = new Wall(475,620,5,140);
	wall3 = new Wall(550,685,150,10);

	down = 0;
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  ball.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  image(wallImage,460,535,179,160);
  keyPressed();
  TextThing();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.38,y:-1})
		
	if(ball.body.position.y<550){
		 down = 1;
	}
		if(down ===1){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.05, y:1})
		}
	}
}
function TextThing(){
if(ball.body.position.x<475){
	fill("green");
	textSize(20);
	text("Press The Up Arrow To Throw The Ball",400,200);
}
else{
	fill("green");
	textSize(20);
	text("Good Job!",500,200);
}
}