import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view';
import Application from 'app/models/application';

var ApplicationView = Backbone.View.extend({

  initialize: function(){

    var newSession = new Application();
    var newBoardView = new BoardView ({
      el: $('#board')
    });

  },

  render: function() {
    newBoard.render();
  },

  events: {
    'click #restart-button': 'restartGame'
  },

  restartGame: function(event) {
    console.log("Restart Game");
  }

});

export default ApplicationView;
