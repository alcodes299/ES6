var x = 0.1
var y = 0
var z = 0

var a = 10
var b = 28
var c = 8/3
var points = []
function setup(){
createCanvas(1000, 1000)
colorMode(HSB)
background(0)


}

function draw() {
  var dt = 0.01
  var dx = (a * (y - x)) * dt
  var dy = (x * (b - z) - y) * dt
  var dz =  (x * y - c * z) * dt
  x = x + dx
  y = y + dy
  z = z + dz
  points.push([x,y,z])
  translate(width/2,height/2)

  stroke(255)
  strokeWeight(.1)
  scale(6)
  beginShape()
  noFill()
  hu = 0

  for (var i = 0; i < points.length; i++){
    hu += .5
    if (hu > 255) {
      hu = 0
    }
    var saved = points[i]
    stroke(hu,255,255)
    vertex(saved[0],saved[1])

  }
endShape()
}
