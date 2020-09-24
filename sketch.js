
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,rock,tree,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,chain;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	m1 = new mango(900,150,8);
	m2 = new mango(950,120,10);
	m3 = new mango(1000,100,7);
	m4 = new mango(950,60,9);
	m5 = new mango(1050,60,6);
	m6 = new mango(1100,120,10);
	m7 = new mango(1100,120,10);
	m8 = new mango(1100,120,10);
	m9 = new mango(1100,120,10);
	m10 = new mango(1100,120,10);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background("purple");
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    console.log(rock);
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();
	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);
	collision(rock,m7);
	collision(rock,m8);
	collision(rock,m9);
	collision(rock,m10);

	strokeWeight(3);
	stroke(0);
	fill(255);
    text('Lets aim and ..........Shooooooot !!!!!!!!', 285, 22);
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}