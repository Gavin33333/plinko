const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, division1, division2, division3, division4, division5, division6 

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300

function setup() {
  createCanvas(480,800);
 
  ground = new Ground(240,800,480,50);
  division1 = new Divisions(2,150,40,300)
  division2 = new Divisions(78,150,40,300)
  division3 = new Divisions(178,150,40,300)
  division4 = new Divisions(278,150,40,300)
  division5 = new Divisions(378,150,40,300)
  division6 = new Divisions(478,150,40,300)
}

function draw() {
  background(255,255,255);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  drawSprites();
}

for (var k = 0; k <=width; k = k + 80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))

}

for (var j = 40; j <=width; j=j+50) 
{
  plinkos.push(new Plinko(j,75));
}

for (var j = 15; j <=width-10; j=j+50){
plinkos.push(new Plinko(j,175))
}

for (var j = 40; j <=width; j=j+50) 
{
  plinkos.push(new Plinko(j,275));
}

for (var j = 0; j < particles.length; j++){
  particles[j].display();
}
for (var k = 0; k< divisions.length; k++){
  divisions[k].display();
}

  