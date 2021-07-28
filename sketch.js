var box;
function setup() {  
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,20);
  box.shapeColor = "black"
}

function draw() 
{
   
if(keyIsDown(DOWN_ARROW))
{
  background('red');
}

if(keyIsDown(UP_ARROW))
{
  background('yellow');
}

if(keyIsDown(LEFT_ARROW))
{
  background('green');
}

if(keyIsDown(RIGHT_ARROW))
{
  background('blue');
}

drawSprites()
}




