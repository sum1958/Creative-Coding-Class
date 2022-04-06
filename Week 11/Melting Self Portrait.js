
let x = 40;
let y = 30;
let goLeft = false;
function setup() {
  //first lets set up the background 
  createCanvas(720, 400);
  background(11,11,69);
}
//next lets draw our shapes 
function draw(){
  fill(255,193,204);
  ellipse(x,y,40,40)

  //set the rules for movement and direction
  if (goLeft == false) {
    x=x+1;
  }
  if (goLeft == true){
    x=x-1;
  }
  if(x>400){
    goLeft = true;
  }
  if(x<0){
    goLeft = false;
  }
 rect(x, 140, 140, 80);
  
triangle(30, 75, 58, 200, 86, 75);
  
}
  




