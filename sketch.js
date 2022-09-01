var box;
var RGB;
function setup() {
  createCanvas(2000,2000);
  box = createSprite(200, 200, 50, 50)
}

function draw() 
{
 
  if (keyIsDown(RIGHT_ARROW)) {
    box.x = box.x + 10
  background("Red")
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.x = box.x - 10
    background("Purple")
  } 
  
  if (keyIsDown(DOWN_ARROW)) {
    box.y = box.y + 10
    background("Orange")
  }

  if (keyIsDown(UP_ARROW)) {
    box.y = box.y - 10
    background("Green")
  }

  drawSprites()
}




