import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view';
import Application from 'app/models/application';
import GameList from 'app/collections/game_list';

var ApplicationView = Backbone.View.extend({

  initialize: function(options){
    this.newSession = new Application();
    this.newBoardView = new BoardView ({
      el: $('#board'),
      session: this.newSession,
      collection: this.model
    });
  },

  events: {
    'click #new-game-button': 'newGame',
    'click #game-history-button': 'gameHistory'
  },

  newGame: function() {
    this.newBoardView = new BoardView ({
      el: $('#board'),
      session: this.newSession,
      collection: this.model
    });

    $('td').each(function() {
      $(this).empty();
    });

    $('#end-of-game-message').empty();
  },

  gameHistory: function() {
    this.model.fetch().done(function(APIdata) {
      if ($('#game-list').is(':empty')) {
        APIdata.forEach(function(eachGame) {
          var date = new Date(eachGame.played_at);
          $('#game-list').append("<p>-----</p>");
          $('#game-list').append("<p>Game ID: " + eachGame.id + "</p>");
          $('#game-list').append("<a id='game-id-" + eachGame.id + "' href = https://arcane-ravine-85520.herokuapp.com//api/v1/games/" + eachGame.id + ">Delete</a></p>");
          $('#game-list').append("<p>Players: </p>");
          $('#game-list').append("<p>" + eachGame.players[0] + "</p>");
          $('#game-list').append("<p>" + eachGame.players[1] + "</p>");
          $('#game-list').append("<p>Outcome (Winning Player's Mark or Draw): "  + eachGame.outcome + "</p>");
          $('#game-list').append("<p>Date/time game was played: " + date +  "</p>");
        });
      } else {
        $('#game-list').empty();
      }
    });
  },
});

export default ApplicationView;
