import Backbone from 'backbone';

const Board = Backbone.Model.extend ({
  initialize: function(){
    this.boardArray = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  },

  isFull: function() {
    if (this.boardArray[0].includes(' ') || this.boardArray[1].includes(' ') || this.boardArray[2].includes(' ')) {
        return false;
    } else {
        return true;
    }
  }
});

export default Board;
