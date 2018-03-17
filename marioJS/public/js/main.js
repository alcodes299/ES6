import SpriteSheet from './spritesheet.js'
import {loadImage, loadLevel} from './loaders.js'

function drawBackground(backrounds, context, sprite){
  backrounds.ranges.forEach(([x1, x2, y1, y2])=>{
    for(let x = x1; x < x2;++x){
      for(let y = y1;y < y2;y++){
        sprite.drawTile(backrounds.tile, context, x, y)
      }
    }
  })
}
const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')


loadImage('/img/tiles.png')
.then(image => {
  const sprite = new SpriteSheet(image, 16, 16)
  sprite.define('ground',0, 0)
  sprite.define('sky', 3,23)

  loadLevel('1-1')
  .then(level =>{
    console.log(level)
    level.backrounds.forEach(backround => {
      drawBackground(backround, context,sprite)
    })
  })
})
