class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            lenght:5
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
       this.pointB=pointB
    }
    display(){
        if(this.sling.bodyA){
            push();
            var pointA=this.sling.bodyA.position;
           var pointB=this.pointB;
             stroke(255,255,0);
             strokeWeight(5);
             line(pointA.x,pointA.y,pointB.x,pointB.y+20);
             pop();
        }
        
    }
}