class Ball{

    constructor(x, y, radius)
    {
    
    var circleOptions = {
        
        restitution:0.5,
        density:2,
        friction:0.0
    }
    
    
    this.ball=Bodies.circle(x, y, radius, circleOptions)
    this.r1=radius


   

    World.add(world, this.ball)
    }
    
            
        display(){

            push();
            translate(this.ball.position.x, this.ball.position.y);
            rotate(this.ball.angle);

    fill("gold")
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r1, this.r1);    

    pop();
    
        }

    
    
    }