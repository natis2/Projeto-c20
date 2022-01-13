
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var block1;
var block2;
var block3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(700, 800);
	
	engine = Engine.create();
	world = engine.world;
	//Crie os Corpos Aqui.
    var block1_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}

	var block2_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	var block3_options = {
		restitution: 0.01,
		friction: 0.01,
		frictionAir: 0.3
	
	}

	var ground_options ={
		isStatic: true
	   };
	
	ground = Bodies.rectangle(200,620,400,20,ground_options);
  World.add(world,ground);
	
	block1 = Bodies.circle(220,30,30,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,30,30,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,50,50,block3_options);
	World.add(world,block3);
     
	Engine.run(engine);
  
}


function draw() {
  fill("brown")
	
  Engine.update(engine);
	rectMode(CENTER);
  background("lightgreen");
  
  drawSprites();
 
  ellipse(block1.position.x,block1.position.y,60);
  rect(block2.position.x,block2.position.y,30);
  rect(block3.position.x,block3.position.y,70,50);
  rect(ground.position.x,ground.position.y,800,20);
}



