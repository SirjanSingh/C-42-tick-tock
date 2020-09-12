var timeH,timeM,timeS;
var hrA , miA ,scA;
function setup() {
  angleMode(DEGREES);
  //ellipseMode(RADIUS)
  createCanvas(500,500);
  //createSprite(250, 250, 50, 50);
}

function draw() {
  background(0);
 
  timeH = hour() ;
  timeM = minute();
  timeS = second();
  
  hrA = map(timeH %12,0,12,0,360);
  miA = map(timeM,0,60,0,360);
  siA = map(timeS,0,60,0,360);

  translate(250,250)
  stroke(255,255,0)
  fill(rgb(50,90,60))
  ellipse(0,0,350,350)
 
  rotate(-90);

  push();
  rotate(siA)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(miA)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrA)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill()
  strokeWeight(7);
  stroke(255,0,0)
  arc(0,0,320,320,0,siA);
  stroke(0,255,0)
  arc(0,0,270,270,0,miA);
  stroke(0,0,255)
  arc(0,0,210,210,0,hrA);
    
  textSize(20)
  rotate(90)
  fill(0)
  stroke(255,255,255)
  text("12",-10,-80)
  text("6",-5,90)
  text("9",-90,0)
  text("3",80,0)
  
  ellipse(0,0,15,15)
  console.log(timeH+":"+timeM+":"+timeS)
  drawSprites();
}
