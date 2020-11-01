const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,755,70,70);
    pig1 = new pig(810,764);
    box2 = new Box(920,755,70,70);
    log1 = new log(810,711,300,PI/2);
    ground = new Ground(800,height,1600,20);
    box3 = new Box(700,666,70,70);
    pig2 = new pig(810,676);
    box4 = new Box(920,666,70,70);
    log2 = new log(810,621,300,PI/2);
    bird1 = new bird(100,100);
    box5 = new Box(810,576,70,70);
    log4 = new log(760,540,150,PI/7);
    log5 = new log(870,540,150,-PI/7);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log4.display();
    log5.display();
    console.log(log4.body.position.y);
}