const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,pig1,pig2,log1,log2,log3,log4;
var ground,bird1;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(800,340,70,70);
  box2 = new Box(1000,340,70,70);
  pig1 = new Pig(900,350);
  log1 = new Log(900,300,330,PI/2);
  box3 = new Box(800,260,70,70);
  box4 = new Box(1000,260,70,70);
  box5 = new Box(900,180,70,70);
  pig2 = new Pig(900,270);
  log2 = new Log(900,220,330,PI/2);
  log3 = new Log(860,140,155,PI/7);
  log4 = new Log(940,140,155,-PI/7);
  ground=new Ground(600,390,1200,30);
  bird1=new Bird(100,300);
}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  pig1.display()
  pig2.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  bird1.display()
  ground.display()
}
