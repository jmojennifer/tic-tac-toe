import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Board from 'app/models/board';
import Player from 'app/models/player';
import Game from 'app/models/game';

var BoardView = Backbone.View.extend({

  initialize: function(options) {
    this.newGame = new Game(options.session);
    $("#new-game-button").hide();
  },

  events: {
    'click .square': 'markSpot'
  },

  markSpot: function(spot) {
    var spotVertical = $(spot.currentTarget).data('vertical');
    var spotHorizontal = $(spot.currentTarget).data('horizontal');
    if (this.newGame.gameActive === true) {
      this.newGame.currentPlayer.setMark(this.newGame.gameBoard, spotVertical, spotHorizontal);
    }

    if (this.newGame.currentPlayer.mark == "X" && this.newGame.gameBoard.boardArray[spotVertical][spotHorizontal] == "X" && this.newGame.gameActive === true) {
      $('.square[data-vertical=' + spotVertical + '][data-horizontal=' + spotHorizontal + ']').html('<img src= imgs/rosemary.jpg>');

      if (this.newGame.isDone() === false) {
        this.newGame.switchTurn();
      }
    } else if (this.newGame.currentPlayer.mark == "O" && this.newGame.gameBoard.boardArray[spotVertical][spotHorizontal] == "O" && this.newGame.gameActive === true) {
      $('.square[data-vertical=' + spotVertical + '][data-horizontal=' + spotHorizontal + ']').html('<img src= imgs/peach.jpg>');

      if (this.newGame.isDone() === false) {
        this.newGame.switchTurn();
      }
    }
  },

  boardReset: function(){

  }
});

export default BoardView;
