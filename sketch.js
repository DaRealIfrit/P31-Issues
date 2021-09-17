
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops = [];
var maxDrops = 100

function preload(){
    
}

function setup(){
    createCanvas(500, 800);
	rectMode(CENTER);

	for(var i=0; i < maxDrops; i++){
	drops.push(new Drop(random(0,400), random(0,400)));
	}

	engine = Engine.create();
	world = engine.world;
	

	Engine.run(engine); 
}

function draw(){
	background(0);
	for(var i = 0; i < maxDrops; i++){
		drops[i].display();
		drops[i].display();
	}
}   

