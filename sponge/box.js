function Box(x, y, z, r){
  this.pos = createVector(x, y, z)
  this.r = r

  this.generate = function() {
    var boxes = []
    for (var x = 0; x < 3; x ++) {
      for (var y = 0; y < 3; y++) {
        for (var z = 0; z < 3; z++) {
          var newR = r/3
          b = new Box(this.pos.x+x*newR,this.pos.y + y*newR,this.pos.z + z*newR)
          boxes.push(b)
        }
      }
    }
    return boxes
  }
  this.show = function() {
    push()
    fill(5)
    translate(this.pos.x - 66, this.pos.y, this.pos.z)

    box(r)
    pop()

  }
}
