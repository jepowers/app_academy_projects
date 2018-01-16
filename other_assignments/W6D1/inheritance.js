Function.prototype.inherits1 = function(parent) {
  function Surrogate() {}

  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject (x, y) {
  this.x = x;
  this.y = y;
}

function Ship (x, y) {
  MovingObject.call(this, x, y);
}

Ship.inherits2(MovingObject);

Ship.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.log(`x: ${this.x} y: ${this.y}`);
};
