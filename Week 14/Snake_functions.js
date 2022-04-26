//here is a snake game
// I tried following along with more advanced coders online so hopefully it is OK!
//this page has the fuctions for the snake and the other page puts them in order
//first we need to create the snake
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  
//After we setup our snake, we need to create some fuctions for it to play 
    this.eat = function(pos) {
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total++;
        return true;
      } else {
        return false;
      }
    };
  
   
    this.direct = function(x, y) { // direct is short for direction 
      this.xspeed = x;
      this.yspeed = y;
    };
  
    this.gameover = function() {
      for (let i = 0; i < this.tail.length; i++) {
        let pos = this.tail[i];
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
          console.log('a new life');
          this.total = 0;
          this.tail = [];
        }
      }
    };
  //This fuction helps the snake grow
    this.update = function() {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      if (this.total >= 1) {
        this.tail[this.total - 1] = createVector(this.x, this.y);
      }
  
      this.x = this.x + this.xspeed * scl;
      this.y = this.y + this.yspeed * scl;
  
      this.x = constrain(this.x, 0, width - scl);
      this.y = constrain(this.y, 0, height - scl);
    };
  
    this.show = function() {
      fill(255,0,127);//Hot Pink!!!!
      for (let i = 0; i < this.tail.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      rect(this.x, this.y, scl, scl);
    };
  }