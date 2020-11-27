var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(200,300,50,50);
  movingRect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  

movingRect.y=mouseY;
movingRect.x=mouseX;


console.log(movingRect.x-fixedRect.x)

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor="lightgreen";
  fixedRect.shapeColor="lightgreen";
}
else {
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}


  drawSprites();
}