var ang = 0
function setup(){
  createCanvas(windowWidth, windowHeight,WEBGL)

}

function draw(){
  background(0)
  stroke(255)
  noFill()

  translate(0,ang-150)
  var circ = sphere()
  console.log(circ)
  translate(100,ang/5)
  sphere()
  translate(100,ang/5)
  sphere()
  translate(-300,ang)
  sphere()
  ang += 3
}
