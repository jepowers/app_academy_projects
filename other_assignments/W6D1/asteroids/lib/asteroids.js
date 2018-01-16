const Game = require ('./game');
const GameView = require ('./game_view');


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 600;
  canvasEl.height = 600;

  const ctx = canvasEl.getContext("2d");
  const game = new Game(canvasEl.width, canvasEl.height, 20);
  const gameView = new GameView(game, ctx);
  gameView.start();
});
