var rects = []

const type = ['freespace','occupied']


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// console.log(getRandomInt(3));
// expected output: 0, 1 or 2

function setup() {
      createCanvas(400, 400);
   freespace = color(20, 60, 0); // Define color 'c'


    
    rects[0] = {x:30,y:30}
    
  for (let i=1;i<20;i++){
    
    rects[i] = {
     
      x: rects[i-1].x,
      y: rects[i-1].y+20,
      type: type[getRandomInt(2)]
    }
  }
  
}

  function draw() {
      background(220);
      
      for (let i=0;i<rects.length;i++){
       
        let actual = rects[i].type==='freespace' ? 'green':'red'
fill(color(actual)); // Use color variable 'c' as fill color
        
noStroke(); // Don't draw a stroke around shapes

        rect(rects[i].x, rects[i].y, 20,20);
      }
  }