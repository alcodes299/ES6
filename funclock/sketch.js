function setup(){
  createCanvas(400,400)
  angleMode(DEGREES)
}

function  draw(){
  background(0)
  translate(200,200)
  rotate()


  let hr = hour()
  let mn = minute()
  let sc = second()
  let scag = map(sc, 0, 60, 0, 360)
  let mnag = map(mn,0, 60, 0, 360)
  let hrag = map(hr, 0, 12, 0, 360)

  fill(255)
  noStroke()



  noFill()
  stroke("lightgreen")
  //hours
  arc(0,0, 60,60, 0, hrag)
  arc(0,0, 70,70, 0, hrag)
  arc(0,0, 80,80, 0, hrag)

  //minutes
  stroke("blue")
  arc(0,0, 140,140, 0, mnag)
  arc(0,0, 145,145, 0, mnag)
  arc(0,0, 150,150, 0, mnag)

  //secounds
  stroke("red")
  arc(0,0, 200,200, 0, scag)
  arc(0,0, 204,204, 0, scag)
  arc(0,0, 208,208, 0, scag)

  push()
  rotate(scag)
  strokeWeight(2)
  stroke("purple")
  line(0,0,200,0)
  pop()

  push()
  strokeWeight(1)
  stroke('pink')
  rotate(mnag)
  line(0,0,200,0)
  pop()

  push()
  strokeWeight(1)
  stroke('yellow')
  rotate(hrag)
  line(0,0,300,0)
  pop()
  stroke('#75FA6C')

  text(hr+':'+mn+':'+sc,-18,60)
}
