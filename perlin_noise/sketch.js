inc = 0.1
var scl = 20
var col, rows

var fr

var particles = []
var flowfield = []

var zoff = 0
function setup() {
  createCanvas(1000, 500)
  background(255)

  cols = floor(width / scl)
  rows = floor(height / scl)
  fr = createP('')
  text = createP('FrameRate')

  flowfield - new Array(cols * rows)

  for (var i = 0; i < 1000; i++){
      particles[i] = new Particle()
  }
}

function draw() {

  var yoff = 0

  for(var y = 0; y < rows; y++ ){
    var xoff = 0
    for(var x = 0; x < cols; x++ ){

      var index = (x + y * cols)
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4
      var v = p5.Vector.fromAngle(angle)
      v.setMag(.08)
      flowfield[index] = v

      xoff += inc

      // stroke(0, 50)
      // push()
      // translate(x * scl, y * scl)
      // rotate(v.heading())
      // strokeWeight(1)
      // line(0,0,scl,0)
      // pop()
    }
    yoff += inc
    zoff += .0002
  }
  for (var i = 0; i < particles.length; i++){

    particles[i].follow(flowfield)
    particles[i].update()
    particles[i].edges()
    particles[i].show()


  }

  fr.html(floor(frameRate()))
}
