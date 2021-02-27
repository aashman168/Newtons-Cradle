class Rope{
    constructor(bodyA, pointB){
        var options= {
            bodyA:bodyA, 
            pointB:pointB,
        }
        this.pointB=pointB
        this.chain= Matter.Constraint.create(options);
        World.add(world, this.chain)
    }
    display(){
        strokeWeight(4)
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y,this.pointB.x, this.pointB.y )
    }
    }