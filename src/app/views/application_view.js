import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view';
import Application from 'app/models/application';

var ApplicationView = Backbone.View.extend({

  initialize: function(){

    this.newSession = new Application();
    this.newBoardView = new BoardView ({
      el: $('#board'),
      session: this.newSession
    });
  },

  // render: function() {
  //   newBoard.render();
  // },

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
    console.log();

    $('#end-of-game-message').empty();
  },

});

export default ApplicationView;
