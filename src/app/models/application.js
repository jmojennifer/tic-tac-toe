import Backbone from 'backbone';

const Application = Backbone.Model.extend ({

  default: {
    sessionGameCount: 0,
    playerXwins: 0,
    playerOwins: 0,
    tiescores: 0
  },

});

export default Application;
