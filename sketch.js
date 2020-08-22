
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var TframeR, Tframe1, Tframe2, Tframe3, Tframe4, Tframe5, TframeR, Lframe, Bframe, Rframe;
var ball1, ball2, ball3, ball4, ball5;
var link1, link2, link3, link4, link5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	TframeL = new Frame(265, 250, 80, 20)
	Tframe1 = new Frame(320, 250, 40, 20)
	Tframe2 = new Frame(360, 250, 40, 20)
	Tframe3 = new Frame(400, 250, 40, 20)
	Tframe4 = new Frame(440, 250, 40, 20)
	Tframe5 = new Frame(480, 250, 40, 20)
	TframeR = new Frame(535, 250, 80, 20)
	//Lframe = new Frame(260, 360, 20, 200)
	Bframe = new Frame(400, 450, 360, 20)
	//Rframe = new Frame(540, 360, 20, 200)

	ball1 = new Ball(390, 450, 20)
	ball2 = new Ball(410, 450, 20)
	ball3 = new Ball(430, 450, 20)
	ball4 = new Ball(450, 450, 20)
	ball5 = new Ball(470, 450, 20)


	link1 = new Link(Tframe1.body, ball1.ball)
	link2 = new Link(Tframe2.body, ball2.ball)
	link3 = new Link(Tframe3.body, ball3.ball)
	link4 = new Link(Tframe4.body, ball4.ball)
	link5 = new Link(Tframe5.body, ball5.ball)

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
 
TframeL.display() 
Tframe1.display()
Tframe2.display()
Tframe3.display()
Tframe4.display()
Tframe5.display()
TframeR.display()
//Lframe.display()
Bframe.display()
//Rframe.display()

ball1.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()


link1.display()

link2.display()
link3.display()
link4.display()
link5.display()




  drawSprites();
 
}





function mouseDragged(){

	Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY})
	
	
	}

	function mouseReleased(){


		ball1.swing()
		
		
		}