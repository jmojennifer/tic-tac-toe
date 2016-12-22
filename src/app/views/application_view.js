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
    this.model.fetch().done(function(APIdata) {
      APIdata.forEach(function(eachGame) {
        console.log("APIdata:",eachGame);
        var date = new Date(eachGame.played_at);
        $('#game-list').append("<p>-----</p>");
        $('#game-list').append("<p>Game ID: " + eachGame.id + "</p>");
        $('#game-list').append("<p>Players: </p>");
        $('#game-list').append("<p>" + eachGame.players[0] + "</p>");
        $('#game-list').append("<p>" + eachGame.players[1] + "</p>");
        $('#game-list').append("<p>Outcome (Winning Player's Mark or Tie): " + eachGame.outcome + "</p>");
        $('#game-list').append("<p>Date/time game was played: " + date + "</p>");
      });
    });
  },

  events: {
    'click #new-game-button': 'restartGame',
  },

  restartGame: function(event) {
    this.newBoardView = new BoardView ({
      el: $('#board'),
      session: this.newSession
    });
    $('td').each(function() {
      $(this).empty();
    });

    $('#end-of-game-message').empty();
  },

});

export default ApplicationView;
