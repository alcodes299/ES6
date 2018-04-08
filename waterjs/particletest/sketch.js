var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine
var world
var boxes = []
var ground
var left
var right

function setup(){
  createCanvas(400,400)
  var engine = Engine.create();
  world = engine.world
  Engine.run(engine)
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 20, options)
  left = Bodies.rectangle(-20, height, 10, 1000, options)
  right = Bodies.rectangle(400, height, 10, 1000, options)
  World.add(world, ground)
  World.add(world, left)
  World.add(world, right)
}
function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(1, 2)))
}

function draw() {
  fill("red")
  background(50)
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show()
  }
  fill(50)
  push()
  stroke("blue")
  strokeWeight(8)
  line(0, height-4, 400, height-4)//bot
  line(0, 0, 0, 400)//left
  line(398, 0, 400, 400)//right
  pop()
}
