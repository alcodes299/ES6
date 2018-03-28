let angle = 0
let w = 24
let ma
let maxD
let cola = 'lightblue'
function setup(){
  createCanvas(800, 800 , WEBGL)
  ma = atan(1 / sqrt(2))
  maxD = dist(0, 0, 200, 200)
  frameRate(100)

  countUp = 0
  colorTime = 20
}
function draw()
{
  background(cola)
  ortho(-1000, 1000, 1000, -1000, 0, 1000);
  rotateX(QUARTER_PI)
  rotateY(ma)

  countUp += 1
  if (countUp % colorTime == 0) {
    var rand1 = Math.floor(Math.random() * 250)
    var rand2 = Math.floor(Math.random() * 250)
    var rand3 = Math.floor(Math.random() * 250)
    var rand4 = Math.floor(Math.random() * 250)
    var rand5 = Math.floor(Math.random() * 250)
    var rand6 = Math.floor(Math.random() * 250)
    fill(rand3,rand1,rand2)
    stroke(rand4,rand5,rand6)
    countUp = 0
    colorTime += colorTime/2

    console.log(colorTime)
  }
  if (colorTime > 60) {
    colorTime = 20
  }
  for (var z = 0; z < height; z += w) {
    for (var x = 0; x < width; x += w) {
    push()
    let d = dist(x, z, width / 2, height / 2)
    let offset = map(d, 0 , maxD, -PI, PI)
    let a = angle + offset
    let h = map(sin(a), -1, 1, 12, 600)

    translate(x - width / 2, 0, z )
    box(w ,h , w)

    pop()
    }
  }
  angle += 0.1

}
