var rects = []

function setup() {
      createCanvas(400, 400);

    
    rects[0] = {x:30,y:30}
    
  for (let i=1;i<20;i++){
    
    rects[i] = {
     
      x: rects[i-1].x,
      y: rects[i-1].y+20
    }
  }
  
}

  function draw() {
      background(220);
      
      for (let i=0;i<rects.length;i++){
       
        rect(rects[i].x, rects[i].y, 20,20);
      }
  }