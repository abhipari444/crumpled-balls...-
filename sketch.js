
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	
	dustbin = new Dustbin(1200,500)
	
	paper = new Paper(200,350,10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  paper.display();
  drawSprites();
 
}



