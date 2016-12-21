// app/collections/task_list.js
import Backbone from 'backbone';

import Game from 'app/models/game';

var GameList = Backbone.Collection.extend({
  model: Game,
  url: 'https://arcane-ravine-85520.herokuapp.com/api/v1/games/',
  parse: function(data){
    return data;
  }
});

export default GameList;
