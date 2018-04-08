function setup(){
  createCanvas(400,400)
  angleMode(DEGREES)
}

function  draw(){
  background(0)
  let hr = hour()
  let mn = minute()
  let sc = second()
  let hrag = map(sc, 0, 60, 0, 360)

  fill(255)
  noStroke()
  text(hr+':'+mn+':'+sc, 200 - 20, 200);

  noFill()
  stroke("white")

  arc(200,200, 160,160, 0, hrag)
  arc(200,200, 160,160, 0, hrag)
  arc(200,200, 160,160, 0, hrag)

  
}
