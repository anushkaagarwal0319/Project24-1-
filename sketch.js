
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var plane;
var stone;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	plane = new Plane(400, 695);
	hammer = new Hammer(400, 350);
	stone= new Stone(400, 650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();

  hammer.display();
  plane.display();
  stone.display();
 
}



