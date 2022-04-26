//this page orders the fuctions for the snake
//the next page creates the fuctions
let snake;
let gri = 20;//gri stands for the imaginary grid the snake moves across
let food;

//setup canvas
function setup() {
  createCanvas(0,0,0);//the darkest shade of black 
  snake = new Snake();
  frameRate(10);//I hope this number is OK. I googled it. 
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / gri);
  let rows = floor(height / gri);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(gri);
}

function mousePressed() {
  snake.total++;
}

//
function draw() {
  background(51);
  if (snake.eat(food)) {
    pickLocation();
  }
  snake.gameover();
  snake.update();
  snake.show();
  fill(255, 0, 127);//PINK
  rect(food.x, food.y, gri, gri);
}
//keys to control the snake 
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direct(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.direct(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.direct(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.direct(-1, 0);
  }
}