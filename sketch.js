
var diameter = 40;
var bob1,bob2,bob3,bob4,bob5,roof;
var chain1,chain2,chain3,chain4,chain5;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof = new Ground(width/2,height/4,400,30);
	bob1 = new Bob(width/2 - (diameter*2),height/4+ 300,diameter/2);
	bob2 = new Bob(width/2 - (diameter),height/4+ 300,diameter/2);
	bob3 = new Bob(width/2,height/4+ 300,diameter/2);
	bob4 = new Bob(width/2 + (diameter),height/4+ 300,diameter/2);
	bob5 = new Bob(width/2 + (diameter*2),height/4+ 300,diameter/2);

	chain1 = new Chain(bob1.body,roof.body,-(diameter*2),0);
	chain2 = new Chain(bob2.body,roof.body,-(diameter*1),0);
	chain3 = new Chain(bob3.body,roof.body,0,0);
	chain4 = new Chain(bob4.body,roof.body,(diameter*1),0);
	chain5 = new Chain(bob5.body,roof.body,(diameter*2),0);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();

  roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
}



function keyPressed() {
	if (keyCode === 32 ) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-77,y:-75});

	  
	}


	
}

