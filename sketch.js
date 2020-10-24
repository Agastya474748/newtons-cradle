
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

var bobDiametr = 40;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
	bobObject1 = new Bob(200,400,20);
	bobObject2 = new Bob(240,400,20);
	bobObject3 = new Bob(280,400,20);
	bobObject4 = new Bob(320,400,20);
	bobObject5 = new Bob(360,400,20);

	
	roof = new Ground(360,200,350,20);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiametr*2,10);

}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("yellow");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  // display all bobObjects below

  rope1.display();
  //display all rope objects below

  roof.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW ){
		// Use Matter.Body.applyForce for bobObject1 woth a negative x and y force,,
		// refer to crumpled balls project as hint
	}
}
