import $ from 'jquery';

import ApplicationView from 'app/views/application_view';
import GameList from 'app/collections/game_list';

$(document).ready(function() {
  var AppView = new ApplicationView ({
    el: $('#application')
  });

  this.newGameList = new GameList ({
    el: $('#game-list')
  });

  this.newGameList.fetch();
});
