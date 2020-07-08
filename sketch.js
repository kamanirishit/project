//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload() {

}
var roof, ball1, sling1, ball2, sling2, sling3, ball3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	roof = new Roof(360, 200, 130, 20);
	ball1 = new Ball(300, 320);
	ball2 = new Ball(310, 320);
	ball3 = new Ball(320, 320);
	ball4 = new Ball(330, 320);
	sling2 = new Slingshot(ball2.body, {
		x: 345,
		y: 200
	})
	sling1 = new Slingshot(ball1.body, {
		x: 270,
		y: 200
	});
	int = new Invisible(100, 100);


	sling3 = new Slingshot(ball3.body, {
		x: 390,
		y: 200
	})
	Matter.Body.setMass(ball1.body, ball1.body.mass * 4);
	sling4 = new Slingshot(ball4.body, {
		x: 430,
		y: 200
	});
	Engine.run(engine);

}



function draw() {
	rectMode(CENTER);
	background(0);
	roof.display();
	sling4.display();
	sling3.display();
	sling2.display();
	ball2.display();
	ball3.display();
	ball4.display();
	sling1.display();
	//console.log(int.velocity);

	ball1.display();
	int.display();

	if (int.x > 120) {
		int.velocity = 0;
	}


	if (int.velocity > 3) {
		Matter.Body.setPosition(ball1.body, {
			x: 100,
			y: 270
		})
	}

}
function keyPressed() {
	
    if(keyCode===UP_ARROW){
		int.velocity = 4;
		int.x = 100;
	}
	
	}
 