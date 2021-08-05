const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball;
var trashcan1,trachcan2;
var ground;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
	ball = Bodies.circle(200,100,10,ball_options);
	World.add(world,ball);
	fill("white");
	
	//Create the Bodies Here.
	trashcan1 = new Ground(1000,550,15,200);
	ground = new Ground(600,595,1200,15);
	trashcan2 = new Ground(800,550,15,200);

	  rectMode(CENTER);
	  ellipseMode(RADIUS);
	Engine.run(engine);
	 
}


function draw() {
  rectMode(CENTER);
  background("black");
  ellipse(ball.position.x,ball.position.y,20,20);
  ground.display();
  trashcan1.display();
  trashcan2.display();
  drawSprites();
}
 function keyPressed() {
	 if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:15, y:-25});
	 }
 }
