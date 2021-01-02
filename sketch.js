const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var ground1,plinkos,particle1;
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

for(var j = 40; j<=innerWidth; j = j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j<=width-10; j = j+50){
  plinkos.push(new Plinko(j,175));
}


particle1 = new Particle(20,50,10);
particle2 = new Particle(40,50,10);
particle3 = new Particle(60,50,10);
particle4 = new Particle(80,50,10);
particle5 = new Particle(100,50,10);
particle6 = new Particle(120,50,10);
particle7 = new Particle(140,50,10);
particle8 = new Particle(150,50,10);
particle9 = new Particle(160,50,10);
particle10 = new Particle(180,50,10);
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

  
  plinkos.display();
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  drawSprites();
}

