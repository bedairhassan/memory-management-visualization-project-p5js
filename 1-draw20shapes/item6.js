var rects = []

function setup() {
      createCanvas(400, 400);

    
    rects[0] = {x:30,y:30}
    
  for (let i=1;i<2;i++){
    
    rects[i] = {
     
      x: rects[i-1].x,
      y: rects[i-1].y+20
    }
    
  }
  
}

  function draw() {
      background(220);
      
      rect(rects[0].x, rects[0].y, 20,20);
      
  }