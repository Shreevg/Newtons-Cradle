class Link{

    constructor(bodyAA, bodyBB){
    
    var options={
    
        bodyA:bodyAA,
        bodyB:bodyBB,
        stiffness:0.04,
        length:150
    
    }
    
    this.link=Constraint.create(options)
    
    World.add(world, this.link)
    
    
    
    }



    swing(){

        this.slingshot.bodyB=null
        
        }
    
    
    display(){
    

    stroke("red")    
    line(this.link.bodyA.position.x, this.link.bodyA.position.y, this.link.bodyB.position.x, this.link.bodyB.position.y)
    
    
    }
    
    }