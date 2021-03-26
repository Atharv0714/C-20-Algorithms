    var fixedRect, movingRect;
    function setup() {
      createCanvas(800,800);
      fixedRect=createSprite (200 ,200, 50, 80);
      fixedRect.shapeColor="blue";
      movingRect=createSprite (300, 100, 80, 50);
      movingRect.shapeColor="red";
    }

    function draw() {
      background(0);  
      movingRect.x=mouseX;
      movingRect.y=mouseY;
      if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
        fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
        movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
        fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {
        movingRect.shapeColor="green";
      }
      else{
      movingRect.shapeColor="red";
      }

     
      drawSprites();
    }