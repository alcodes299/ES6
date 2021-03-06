//Helper functions
function AABBIntersect(ax, ay, aw, ah, bx, by, bw, bh){
  return ax < bx+bw && bx < ax+aw && ay < by+bh && by < ay+ah
}

//screen
function Screen(width, height){
  this.canvas = document.createElement("canvas")
  this.canvas.width = this.width = width
  this.canvas.height = this.height = height
  this.ctx = this.canvas.getContext("2d")
  document.body.appendChild(this.canvas)
}
  Screen.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  Screen.prototype.drawSprite = function(sp,x,y){
  this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h)
}
Screen.prototype.drawBullet = function(bullet){
  this.ctx.fillStyle = "lightblue"

  this.ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h)
}
//bullets
function Bullet(x, y, vel, w, h, color) {
  this.x = x
  this.y = y
  this.vel = vel
  this.w= w
  this.h = h
  this.color = color
}
Bullet.prototype.update = function(){
  this.y += this.vel
}

//sprite
function Sprite(img,x,y,w,h){
  this.img = img
  this.x = x
  this.y=y
  this.w=w
  this.h=h
}

//inputHandler
function InputHandeler(){
  this.down = {}
  this.pressed = {}
  var _this=this
  document.addEventListener("keydown",function(evt){
    _this.down[evt.keyCode] = true
  })
  document.addEventListener("keydown", function(evt){
      delete _this.down[evt.keyCode]
      delete _this.pressed[evt.keyCode]
  })
}

InputHandeler.prototype.isDown =function(code){
  return this.down[code]
}
InputHandeler.prototype.isPressed =function(code){
  if (this.pressed[code]) {
    return false
  } else if(this.down[code]){
    return this.pressed[code]= true
  }
  return false
}
