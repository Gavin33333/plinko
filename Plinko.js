class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true 
        }

        this.r=50;

      this.body = Bodies.circle(x,y,50,options);
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;

     push();
     translate(pos.x, pos.y)
      fill("white");
      ellipseMode(RADIUS)
      ellipse(pos.x, pos.y,this.r, this.r);
      pop();
    }
  };
