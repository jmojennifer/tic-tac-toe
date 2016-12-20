import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Board from 'app/models/board';
import Player from 'app/models/player';
import Game from 'app/models/game';

var BoardView = Backbone.View.extend({

  initialize: function(options) {
    this.newGame = new Game();
    this.newBoard = new Board();
  },

  events: {
    'click .square': 'markSpot'
  },

  markSpot: function(spot) {
    var spotVertical = $(spot.currentTarget).data('vertical');
    var spotHorizontal = $(spot.currentTarget).data('horizontal');
    this.newGame.currentPlayer.setMark(this.newBoard, spotVertical, spotHorizontal);


    if (this.newGame.currentPlayer.mark == "X" && this.newBoard.boardArray[spotVertical][spotHorizontal] == "X") {
      $('.square[data-vertical=' + spotVertical + '][data-horizontal=' + spotHorizontal + ']').html('<img src= imgs/rosemary.jpg>');
      this.newGame.switchTurn();
    } else if (this.newGame.currentPlayer.mark == "O" && this.newBoard.boardArray[spotVertical][spotHorizontal] == "O") {
      $('.square[data-vertical=' + spotVertical + '][data-horizontal=' + spotHorizontal + ']').html('<img src= imgs/peach.jpg>');
      this.newGame.switchTurn();
    }

    console.log('Spot [' + spotVertical + ',' + spotHorizontal + ']');
    this.newGame.isDone();
  }

});

export default BoardView;
