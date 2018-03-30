var a = 0
var sponge = []
function setup() {
  createCanvas(400,400, WEBGL)
  b = new Box(0,0,0,200)
  sponge.push(b)
}
function mousePressed(){
  var nextSponge = sponge[0].generate()
  sponge = nextSponge


}
function draw(){
  background(0)
  stroke(255)
  scale(.5)
  // noFill()

  rotateZ(a)
  rotateY(a)

  for (var i = 0; i < sponge.length; i++) {
      sponge[i].show()
  }

  a -= 0.01
}
