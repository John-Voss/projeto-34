class Box {
    constructor(x,y,width,height) {
        var options = {
            restitution: 0.5,
            friction: 1,
            density:2
        }
        this.box = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('box.png');
        World.add(world, this.box);
    }
    display() {
        var pos = this.box.position;

        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(this.box.angle);
        image(this.image, 0,0, this.width, this.height);
        pop();
    }
}