
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2,ground,polygon,chain,box;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
    world = engine.world;



	engine = Engine.create();
	world = engine.world;        
    
	//Create the Bodies Here.


  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
  ground = new Ground(500,590,1000,20);
	
  polygon = new Polygon(50,200,50) ;

  chain = new Chain(polygon.body,{x:100,y:200});

  b1 = new Box(300,275,30,40);
  b2 = new Box(330,275,30,40);
  b3 = new Box(360,275,30,40);
  b4 = new Box(390,275,30,40);
  b5 = new Box(420,275,30,40);
  b6 = new Box(450,275,30,40);
  b7 = new Box(480,275,30,40);

  
  b8  = new Box(330, 235,30,40);
  b9  = new Box(360,235,30,40);
  b10 = new Box(390,235,30,40);
  b11 = new Box(420,235,30,40);
  b12 = new Box(450,235,30,40);

  b13 = new Box(360,195,30,40);
  b14 = new Box(390,195,30,40);
  b15 = new Box(420,195,30,40);
  
  b16 = new Box(390,155,30,40);








  
  b17 = new Box(640,175,30,40);
  b18 = new Box(670,175,30,40);
  b19 = new Box(700,175,30,40);
  b20 = new Box(730,175,30,40);
  b21 = new Box(760,175,30,40);
   
  b24 = new Box(670,135,30,40);
  b25 = new Box(700,135,30,40);
  b26 = new Box(730,135,30,40);
 
  b27 = new Box(700,95,30,40);
 





  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stand1.display();    
  stand2.display();

  ground.display();

  polygon.display();
    
  chain.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display(); 
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();


  drawSprites();
 
  
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
   chain.fly();

}

