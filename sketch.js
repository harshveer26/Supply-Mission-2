var helicopterI, helicopterSprite, packageSprite,packageI, groundSprite;
var packageBody, box1Body, ground, box1, box2, box2Body, box3, box3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterI=loadImage("helicopter.png")
	packageI=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageI)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterI)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, 670, width,10);
	groundSprite.shapeColor = "green";

	box1 = createSprite(600,600,20,150);
	box1.shapeColor = "red";

	box2 = createSprite(200,600,20,150);
	box2.shapeColor = "red";

	box3 = createSprite(400,665,400,20);
	box3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic : true});
	World.add(world, packageBody);

	box1Body = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic : true});
	World.add(world, box1Body);
	
	packageBody.scale = 1;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false); 
  }
}


