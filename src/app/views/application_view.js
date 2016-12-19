import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({

  initialize: function(){

    var newBoard = new BoardView ({
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
