import Backbone from 'backbone';

const Application = Backbone.Model.extend ({

  initialize: function(options) {
    this.sessionGameCount = 0;
    this.playerXwins = 0;
    this.playerOwins = 0;
    this.tiescores = 0;
  },

});

export default Application;
