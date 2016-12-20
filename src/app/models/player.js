import Backbone from 'backbone';
import Board from 'app/models/board';

const Player = Backbone.Model.extend ({
  initialize: function(options){
    this.mark = options;
    // if (application.sessionGameCount % 2 === 0) {
    if (this.mark == "X") {
      this.active = true;
    } else if (this.mark == "O") {
      this.active = false;
    }
    // } else {
    //   if (this.mark == "O") {
    //     this.active = true;
    //   } else if (this.mark == "X") {
    //     this.active = false;
    //   }
    // }
  },

  setMark: function(board, firstArrayIndex, secondArrayIndex) {
    if (board.boardArray[firstArrayIndex][secondArrayIndex] == ' ') {
      board.boardArray[firstArrayIndex][secondArrayIndex] = this.mark;
    } else {
      throw 'that space has already been assigned, please try again';
    }
    return board.boardArray[firstArrayIndex][secondArrayIndex]; // returned for testing purposes
  },
});

export default Player;
