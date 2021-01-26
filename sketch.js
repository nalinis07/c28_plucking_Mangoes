//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

//variables
var treeobj, stoneobj, groundobj, launcherobj, ropeobj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world
var boy;

//preload
function preload(){
	
	//load boy image
	boy=loadImage("boy.png");

}

//setup
function setup() {
	//canvas, engine and world
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//create mangoes
	mango1=new mango(1130,100);
	mango2=new mango (990,100);
	mango3=new mango(1070,70);
	mango4=new mango(900,200);
	mango5=new mango(970,170);
	mango6=new mango(980,250);
	mango7=new mango(1050,165);
	mango8=new mango(1120,220);
	mango9=new mango(1180,160);
	mango10=new mango(1230,225);

	//create tree
	treeobj=new tree(1050,580);

	//create ground
	groundobj=new ground(width/2,600,width,20);

	//create stone
	stoneobj=new stone(230,430);
	console.log ("Stone", stoneobj.radius);
	console.log ("mango", mango1.r);

	//create rope constraint
	ropeobj=new rope(stoneobj.body, {x: 235, y: 420});
	
	var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });


	//run engine
	Engine.run(engine);
	Render.run(render);
}

function draw() {
	//background
	background(230);
	
    textSize(25);
	  text("Press Space to get a second Chance to Play!!",50 ,50);
	  
	//image to display boy
  	image(boy ,200,340,200,300);
  

	//display everything
  	treeobj.display();
  	mango1.display();
	groundobj.display();
	stoneobj.display(); 
	ropeobj.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	//call function to detect collision of mangoes and stone
	detectCollision(stoneobj, mango1);
	detectCollision(stoneobj, mango2);
	detectCollision(stoneobj, mango3);
	detectCollision(stoneobj, mango4);
	detectCollision(stoneobj, mango5);
	detectCollision(stoneobj, mango6);
	detectCollision(stoneobj, mango7);
	detectCollision(stoneobj, mango8);
	detectCollision(stoneobj, mango9);
	detectCollision(stoneobj, mango10);

}

function mouseDragged(){
	//make stone move where mouse drags it
	Matter.Body.setPosition (stoneobj.body, {x: mouseX, y: mouseY});
	
}

function mouseReleased(){
	//when mouse is released, let stoneobj fly
	ropeobj.fly();
}

//function to detect collision of mango and stone
function detectCollision(lstone, lmango){

    //define lmango and lstone body positions
    var mangoBodyPosition=lmango.body.position;
    var stoneBodyPosition=lstone.body.position;

    //distance variable
    var distance =dist (stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

    if (distance<=lmango.r+lstone.radius){
        //set static of mango to flase
        Matter.Body.setStatic(lmango.body,false);
    }
}


function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		
		Matter.Body.setPosition(stoneobj.body, {x:235, y:420}) ;
		ropeobj.attach(stoneobj.body);
	  
	}
  }