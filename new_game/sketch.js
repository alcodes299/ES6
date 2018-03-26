let angle = 0
let w = 24
function setup(){
  createCanvas(400, 400, WEBGL)
}
function draw(){
  background(175);
  // translate(width / 2, height / 2)
  rectMode(CENTER)

  let offset = 0;
  for (var i = 0; i < width; i+= 24) {
    let a = angle + offset

    let h = map(sin(a), -1, 1, 0, 100)
    fill(255)
    rect( i - width / 2 + w / 2, 0, 10 , h)
    offset += 0.1
  }

  angle += 0.05


}
draw()
