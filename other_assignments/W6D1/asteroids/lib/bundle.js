/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(2);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__ (0);
const GameView = __webpack_require__ (5);


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 600;
  canvasEl.height = 600;

  const ctx = canvasEl.getContext("2d");
  const game = new Game(canvasEl.width, canvasEl.height, 20);
  const gameView = new GameView(game, ctx);
  gameView.start();
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(3);
const Util = __webpack_require__(4);

Util.inherits(Asteroid, MovingObject);

function Asteroid(pos) {
  MovingObject.call(this, pos);
  this.color = 'blue';
  this.radius = '10';
  this.vel = Util.randomVec(5);
}

module.exports = Asteroid;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};


module.exports = MovingObject;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

const Util = {
  inherits: function(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },

  randomVec: function(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  // Scale the length of a vector by the given amount.
  scale: function(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
};

module.exports = Util;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__ (0);


function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  setInterval(() => {
    this.game.draw(this.ctx);
    this.game.moveObjects();
  }, 20);
};

module.exports = GameView;


/***/ })
/******/ ]);