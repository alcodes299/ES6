var ang = 0
function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL)
}

function draw() {
  background(0)

  pointLight(255, 255, 255, mouseX, mouseY, 50);
  specularMaterial(250, 0, 0);




  rotateY(ang)
  sphere()
  translate(50,50,50)
  sphere()
  translate(50,50,50)
  sphere()
  translate(-150,-100,-150)
  sphere()
  translate(0,-100,0)
  sphere()
  translate(0, 200, 0)
  sphere()
  translate(100,-100,200)
  sphere()
  translate(100,100,250)
  translate(100,50,20)
  sphere()

  specularMaterial(250, 0, 0);
  sphere(50, 64);
  ang += 0.01
}
