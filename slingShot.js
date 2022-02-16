class SlingShot {
    constructor(bodyA, pointB) {
        var options= {
            bodyA = bodyA,
            pointB = pointB,
            stiffness: 0.04,
            lenght: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }
    display() {
        if(this.sling.bodyA) {
            var pointB = this.pointB;
            var bodyA = this.sling.bodyA.position;

            push();
            strokeWeight(10) 
            stroke('#87CEEB');
            fill('#87CEEB');
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
            pop();
        }
    }
}