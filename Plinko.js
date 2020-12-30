class Plinko{
    constructor(x,y, radius) {
        var ball_options ={
         isStatic: true    
        } 
        
        this.body = Bodies.circle(x,y,radius, ball_options); 
        this.radius = radius;
        World.add(world,this.body);   
    }

    display(){

    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("white");  
    ellipse(pos.x,pos.y,this.radius,this.radius);        
    }
}