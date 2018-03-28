let angle = 0
let w = 24
let ma
let maxD
let cola = 'grey'
function setup(){
  createCanvas(1000, 1000 , WEBGL)
  ma = atan(1 / sqrt(2))
  maxD = dist(0, 0, 200, 200)
  frameRate(100)
  pointLight(100, 102, 126, 35, 40, 36);
  countUp = 0
  colorTime = 20
}
function draw()
{
  background(cola)
  ortho(-800, 1500, 1000, -1000, 0, 5000);
  rotateX(QUARTER_PI)
  rotateY(ma)

  countUp += 1
  if (countUp % colorTime == 0) {
    var rand1 = Math.floor(Math.random() * 250)
    var rand2 = Math.floor(Math.random() * 250)
    var rand3 = Math.floor(Math.random() * 250)
    fill(rand3,rand1,rand2)
    stroke("white")
    countUp = 0
    colorTime += colorTime/2
  }
  if (colorTime > 120) {
    colorTime = 20
  }
  for (var z = 0; z < height; z += w) {
    for (var x = 0; x < width; x += w) {

    push()
    let d = dist(x, z, width / 2, height / 2)
    let offset = map(d, 0 , maxD, -PI, PI)
    let a = angle + offset
    let h = map(sin(a), -1, 1, 12, 200)

    translate(x - width / 2, 0, z )
    box(w ,h , w)
    pop()
    }
  }
  angle += 0.1
}
