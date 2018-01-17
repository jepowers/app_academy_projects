class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').on("click", el => {
      // alert("Bro... do you not know the rules? It's tic tac toe. Jeez.");
      const $sq = $(el.currentTarget);
      // const pos = JSON.parse($sq.data("pos"));
      this.makeMove($sq);
    });
  }

  makeMove($square) {
    // console.log(Array.isArray(JSON.parse($sq)));
    // const currentPlayer = this.game.currentPlayer;
    //
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid move! Try again.");
      return;
    }

    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      // cleanup click handlers.
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`You win, ${winner}!`);
      } else {
        $figcaption.html("It's a draw!");
      }

      this.$el.append($figcaption);
    }
      }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const $li = $("<li>");
        $li.data("pos",`[${rowIdx}, ${colIdx}]`);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }

}

module.exports = View;
