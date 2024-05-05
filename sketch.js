
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,wall,wall2,ceiling

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  createSprites(ball)
  createSprites(ground)
  createSprites(wall)
  createSprites(wall2)
  createSprites(ceiling)
  ball(circle)
  circle(10,20,10)
ground(400,20,200,10)
wall(20,400,200,10)
wall2(20,400,200,390)
ceiling(400,20,200,390)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
}

