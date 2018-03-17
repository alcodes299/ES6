import SpriteSheet from './spritesheet.js'
import loadImage from './loaders.js'


const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')
context.fillRect(0,0,50,50)

loadImage('/img/tiles.png')
.then(image => {
  const sprite = new SpriteSheet(image, 16, 16)
  sprite.define('ground',0, 0)
  sprite.define('sky', 3,23)

  for(let x = 0; x < 25;++x){
    for(let y = 0;y < 14;y++){
      sprite.drawTile('sky',context, x, y)
    }
  }
  for(let x = 0; x < 25;++x){
    for(let y = 12;y < 14;y++){
      sprite.drawTile('ground',context, x, y)
    }
  }
})
