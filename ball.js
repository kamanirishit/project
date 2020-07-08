class Ball{
    constructor(x,y){
        var option={
            restitution:0.8,
            friction: 0.1,
            density:1.0
        }
   this.body=Bodies.circle(x,y,50,option);
   
   World.add(world,this.body);  
   this.width=50;
  
  }
  display(){
      
      push();
            fill("pink");
            stroke("black");
            ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,this.width+42);
      pop();
  }
  
}