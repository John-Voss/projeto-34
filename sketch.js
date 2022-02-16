const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var monster, monster_image;
var hero, hero_image;
var box1, box2, box3, box4;
var box5, box6, box7;
var ground, platform, platform2;
var backgroundImg;

function preload() {
  backgroundImg = loadImage('back.png');
  monster_image = loadImage('Monster-02.png');
  hero_image = loadImage('Superhero-01.png');
}
function setup() {
    createCanvas(1800, 800);
    engine = Engine.create();
    world = engine.world;

    var options = {
      isStatic: true
    }
    ground = Bodies.rectangle(900, 790, 1800, 10, options);
    World.add(world, ground);
    platform = Bodies.rectangle(1300, 500, 100, 10, options);
    World.add(world, platform);
    platform2 = Bodies.rectangle(-100, 600, 300, 10, options);
    World.add(world, platform2);

    box1 = new Box(1000, 700, 100, 100);
    box2 = new Box(1000, 600, 80, 80);
    box3 = new Box(1000, 520, 90, 90);
    box4 = new Box(1000, 430, 120, 120);
    box5 = new Box(1000, 310, 150, 150);
    box6 = new Box(1000, 160, 80, 80);
    box7 = new Box(1000, 80, 50, 50);

    monster = Bodies.rectangle(1300, 400, 300, 300);
    World.add(world, monster);

    hero = Bodies.rectangle(400, 500, 100, 50, options);
    World.add(world, hero);
  }
function draw() {
  background(backgroundImg);
  Engine.update(engine);

  push();
  rectMode(CENTER);
  strokeWeight(3);
  stroke('orange');
  fill('red');
  rect(ground.position.x, ground.position.y, 1800, 10);
  rect(platform.position.x, platform.position.y, 300, 10);
  rect(platform2.position.x, platform2.position.y, 100, 10);
  pop();
  push()
  imageMode(CENTER);
  image(monster_image, monster.position.x, monster.position.y, 300, 300);
  image(hero_image, hero.position.x, hero.position.y, 100, 50);
  pop();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  if(keyIsDown(32)) {
    Matter.Body.setStatic(this.hero, false);
    Matter.Body.setVelocity(this.hero, {x: 45, y: -5});
  }
}

