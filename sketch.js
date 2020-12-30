const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var ground1,plinko1,particle1;
var division1,division2,division3,division4,division5,division6;
var divisionHeight = 300;

function setup() {
  createCanvas(500,800);
  engine = Matter.Engine.create();
  world = engine.world;

ground1 = new Ground(240,750,480,10);
division1 = new Division(80,620,5,250);
division2 = new Division(160,620,5,250);
division3 = new Division(240,620,5,250);
division4 = new Division(320,620,5,250);
division5 = new Division(400,620,5,250);
division6 = new Division(480,620,5,250);
plinko1 = new Plinko(200,100,1,1);
particle1 = new Particle(200,50,5);
}

function draw() {
  background("black");
  Engine.update(engine);
  
  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  plinko1.display();
  particle1.display();
  drawSprites();
}

