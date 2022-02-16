class Hero {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.hero = Bodies.rectangle(x, y, 100, 50, options);
        this.image = loadImage('Superhero-01.png');
        World.add(world, this.hero);
    }
    display() {
        var pos = this.hero.position;

        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 100, 50);
        pop();
    }
}