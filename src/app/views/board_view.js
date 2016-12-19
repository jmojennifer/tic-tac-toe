import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var BoardView = Backbone.View.extend({

  events: {
    'click .square': 'markSpot'
  },

  markSpot: function(spot) {
    var spotVertical = spot.currentTarget.attributes.vertical.value;
    var spotHorizontal = spot.currentTarget.attributes.horizontal.value;
    console.log('Spot [' + spotVertical + ',' + spotHorizontal + ']');
  }

});

export default BoardView;
