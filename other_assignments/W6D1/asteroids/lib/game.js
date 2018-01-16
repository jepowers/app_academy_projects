const Asteroid = require("./asteroid");

function Game(DIM_X, DIM_Y, NUM_ASTEROIDS) {
  this.DIM_X = DIM_X;
  this.DIM_Y = DIM_Y;
  this.NUM_ASTEROIDS = NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  let asteroid;
  let pos;
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    pos = this.randomPosition();
    asteroid = new Asteroid({ pos: pos });
    this.asteroids.push(asteroid);
  }
};

Game.prototype.randomPosition = function() {
  return [this.DIM_X * Math.random(), this.DIM_Y * Math.random()];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 600, 600);
  this.asteroids.forEach(asteroid => asteroid.draw(ctx));
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(asteroid => asteroid.move());
};

Game.prototype.wrap = function(pos) {
  
};

module.exports = Game;
