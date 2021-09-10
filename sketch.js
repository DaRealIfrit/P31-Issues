
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    
}

function setup(){
    createCanvas(400, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	Engine.run(engine); 
}

function draw(){
	background(0);
	drops();
}   

