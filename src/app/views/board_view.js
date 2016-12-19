import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var BoardView = Backbone.View.extend({

  events: {
    'click #0': 'markSpot',
    'click #1': 'markSpot',
    'click #2': 'markSpot',
    'click #3': 'markSpot',
    'click #4': 'markSpot',
    'click #5': 'markSpot',
    'click #6': 'markSpot',
    'click #7': 'markSpot',
    'click #8': 'markSpot',
  },

  markSpot: function(spot_id) {
    console.log("Pressed a spot!");
    }

  }
);

export default BoardView;
