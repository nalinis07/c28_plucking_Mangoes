class mango{

	//let constructor give x,y and radius
	constructor(x,y,r){

		var options={
			//make static
			isStatic:true,
			//bounciness = 0
			restitution :0,
			//give friction of 1
			friction :1
		}

		//define x,y, radius
		this.x=x;
		this.y=y;
		this.r=30;

		//add image
		this.image=loadImage("mango.png");
		//create body
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		//add to world
		World.add(world, this.body);
	}

	display(){

		//define variable mangoPos as position of mango body
		var mangoPos=this.body.position;

		push()

		//translate origin to position of mango body
		translate(mangoPos.x, mangoPos.y);
		//make mango rotate when something hits it
		rotate(this.body.angle);
		//make image mode center
		imageMode(CENTER);
		//display with image
		image(this.image, 0,0,this.r*2, this.r*2);

		pop()
 }
}