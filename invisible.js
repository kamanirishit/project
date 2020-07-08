class Invisible{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=30;
        this.height=40;
        this.velocity=0;
    }
    display(){
        push();
        noFill();
        noStroke();
        rect(this.x,this.y,this.width,this.height);
        this.x=this.x+this.velocity;
        pop();
    }
    move(){
this.velocity=this.velocity+1;
    }
    
        
    
}