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
    console.log(spotVertical);
    var spotHorizontal = $(spot.currentTarget).data('horizontal');
    this.newGame.currentPlayer.setMark(this.newBoard, spotVertical, spotHorizontal);
    console.log(spotHorizontal);

    console.log(spot.currentTarget);
    // allows me to put the text of the append in each spot
    // if (this.newGame.currentPlayer.mark == "X") {
    //   spot.currentTarget.append('<img src= imgs/rosemary.jpg>');
    // } else {
    //   spot.currentTarget.append('<img src= "/imgs/peach.jpg">');
    // }

    // allows me to put a single image on all board spots
    // if (this.newGame.currentPlayer.mark == "X") {
    //   $('.square').html('<img src= imgs/rosemary.jpg>');
    // } else {
    //   $('.square').html('<img src= "/imgs/peach.jpg">');
    // }

    if (this.newGame.currentPlayer.mark == "X") {
      $('.square[data-vertical=' + spotVertical + '][data-horizontal=' + spotHorizontal + ']').html('<img src= imgs/rosemary.jpg>');
    } else {
      $('.square[data-vertical=' + spotVertical + '][data-horizontal=' + spotHorizontal + ']').html('<img src= imgs/peach.jpg>');
    }

    console.log(this.newBoard);
    console.log('Spot [' + spotVertical + ',' + spotHorizontal + ']');
    this.newGame.isDone();
    this.newGame.switchTurn();
  }

});

export default BoardView;
