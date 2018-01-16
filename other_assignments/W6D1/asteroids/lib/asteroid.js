const MovingObject = require("./moving_object");
const Util = require("./utils");

Util.inherits(Asteroid, MovingObject);

function Asteroid(pos) {
  MovingObject.call(this, pos);
  this.color = 'blue';
  this.radius = '10';
  this.vel = Util.randomVec(5);
}

module.exports = Asteroid;
