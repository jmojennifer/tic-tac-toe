import $ from 'jquery';

import ApplicationView from 'app/views/application_view';
import GameList from 'app/collections/game_list';

$(document).ready(function() {

  var newGameList = new GameList ({
  });

  var AppView = new ApplicationView ({
    el: $('#application'),
    model: newGameList
  });
});
