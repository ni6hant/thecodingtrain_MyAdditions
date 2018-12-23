// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 200);
  this.len = map(this.z, 0, 200, 10, 20);
  this.yspeed = map(this.z, 0, 200, 1, 10);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 200, 0, 0.2);
    //this.yspeed = this.yspeed + grav;
    //Removing Gravity to see what happens
    this.yspeed = this.yspeed;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 200, 1, 25);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 200, 1, 5);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}
