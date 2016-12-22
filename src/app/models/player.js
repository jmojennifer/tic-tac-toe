import Backbone from 'backbone';

import Board from 'app/models/board';
import Application from 'app/models/application';


const Player = Backbone.Model.extend ({
  initialize: function(options){
    this.mark = options.mark;
    this.currentSessionData = options.session;
    if (this.currentSessionData.sessionGameCount % 2 === 0) {
      if (this.mark == "X") {
        this.active = true;
      } else if (this.mark == "O") {
        this.active = false;
      }
  } else {
    if (this.mark == "O") {
      this.active = true;
    } else if (this.mark == "X") {
      this.active = false;
    }
  }
},

setMark: function(board, firstArrayIndex, secondArrayIndex) {
  if (board.boardArray[firstArrayIndex][secondArrayIndex] == ' ') {
    board.boardArray[firstArrayIndex][secondArrayIndex] = this.mark;

  } else {
    throw('That space has been assigned');
  }
  return board.boardArray[firstArrayIndex][secondArrayIndex]; // returned for testing purposes
},
});

export default Player;
