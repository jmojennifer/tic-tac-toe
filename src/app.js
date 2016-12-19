import $ from 'jquery';

import ApplicationView from 'app/views/application_view';

$(document).ready(function() {
  var AppView = new ApplicationView ({
    el: $('#application')
  });
});
