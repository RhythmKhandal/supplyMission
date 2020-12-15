var helicopterIMG, helicopterSprite, packageSprite,packageIMG,cloudSprite1,cloudSprite2,cloudSprite3,cloudSprite4,cloudIMG, grassSprite1,grassSprite2,grassIMG1,grassIMG2,grassSprite3,grassSprite4,grassSprite5,grassSprite6,grassSprite7,grassSprite8;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	cloudIMG=loadImage("cloud.png")
	 grassIMG1=loadImage("grass.PNG")
	 //grassIMG2=loadImage("grass2,png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	cloudSprite1=createSprite(70,60,20,20);
	cloudSprite1.addImage(cloudIMG)
	cloudSprite1.scale=0.2

	 cloudSprite2=createSprite(300,120,20,20);
	 cloudSprite2.addImage(cloudIMG)
	 cloudSprite2.scale=0.2

	 cloudSprite3=createSprite(500,30,20,20);
	 cloudSprite3.addImage(cloudIMG)
	 cloudSprite3.scale=0.2

	 cloudSprite4=createSprite(700,80,20,20);
	 cloudSprite4.addImage(cloudIMG)
	 cloudSprite4.scale=0.2
	
	grassSprite1=createSprite(40,619,20,20);
	grassSprite1.addImage(grassIMG1)
	grassSprite1.scale=1

	grassSprite2=createSprite(120,619,20,20);
	grassSprite2.addImage(grassIMG1)
	grassSprite2.scale=1

	grassSprite3=createSprite(200,619,20,20);
	grassSprite3.addImage(grassIMG1)
	grassSprite3.scale=1

	grassSprite4=createSprite(280,619,20,20);
	grassSprite4.addImage(grassIMG1)
	grassSprite4.scale=1

	grassSprite5=createSprite(480,619,20,20);
	grassSprite5.addImage(grassIMG1)
	grassSprite5.scale=1

	grassSprite6=createSprite(560,619,20,20);
	grassSprite6.addImage(grassIMG1)
	grassSprite6.scale=1

	grassSprite7=createSprite(640,619,20,20);
	grassSprite7.addImage(grassIMG1)
	grassSprite7.scale=1

	grassSprite8=createSprite(720,619,20,20);
	grassSprite8.addImage(grassIMG1)
	grassSprite8.scale=1






	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

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

	
	// if (frameCount % 150===0){
	// 	cloudSprite=createSprite(800,100,20,20);
	// 	cloudSprite.addImage(cloudIMG)
    // 	cloudSprite.scale=0.2

	// 	cloudSprite.velocityX = -2;

	// 	cloudSprite.y = Math.round(random(40,120))

	// }






  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);    
  }
}



