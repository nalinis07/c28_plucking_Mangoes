class tree{

	//let constructor give x and y
	constructor(x,y){

		//define x, y, treeWidth, treeHeight and treeThickness
		this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.treeThickness=10;
		
		//add image
		this.image=loadImage("tree.png");
		//create body
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true});
		//add to world
		World.add(world, this.bottomBody);

	}
	
	display(){

		//define posBottom variable as position of body
		var posBottom=this.bottomBody.position;

		push()

		//trasnlate origin
		translate(posBottom.x, posBottom.y+10);
		//make image mode center to control it properly
		imageMode(CENTER);
		//display tree with image
		image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight);

		pop()
			
	}

}