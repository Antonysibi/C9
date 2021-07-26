
function setup() {
  background(30);
  createCanvas(400,400);
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




