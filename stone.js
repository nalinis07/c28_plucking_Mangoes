class stone {

    constructor (x,y){

        var options = {
            //make it non-static
            isStatic : false,
            //boucniness=0
            restitution : 0,
            //friction of 1
            friction : 1,
            //density of 1.2
            density : 1.2
        }

        //define x,y and radius
        this.x=x;
        this.y=y;
        this.radius=70;

        //add image
        this.image=loadImage("stone.png");
        //create body
        this.body=Bodies.circle(this.x,this.y,this.radius/2, options);
        //add to world
        World.add(world, this.body);

    }

    display(){

        //control position of body with stonePos variable
        var stonePos=this.body.position;

        push ()

        //translate origin to position of stone
        translate (stonePos.x, stonePos.y);
        //make stone rotate when something hits it
        rotate (this.body.angle);
        //make image mode center
        imageMode (CENTER);
        //ellipseMode (RADIUS);
        //display with image
        image (this.image, 0,0, this.radius, this.radius);

        pop ()

    }


}