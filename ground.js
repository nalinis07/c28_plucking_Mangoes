class ground
{
	//give control of x,y,width and height
	constructor(x,y,w,h){

		var options={
			//make ground static
			isStatic:true			
		}

		//define x,y,width and height
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;

		//create body
		this.body=Bodies.rectangle(x, y, w, h , options);
		//add to world
 		World.add(world, this.body);
	}

	display(){

		//make ground Pos equal to the position of the ground body
		var groundPos=this.body.position;	

		push()

		//translate origin to position of the ground
		translate(groundPos.x, groundPos.y);
		//make rectmode center
		rectMode(CENTER);
		//color it grey
		fill(128,128,128);
		//create rectangle to display
		rect(0,0,this.w, this.h);

		pop()
			
	}

}