import Backbone from 'backbone';
import Board from 'app/models/board';
import Player from 'app/models/player';

const Game = Backbone.Model.extend ({
  defaults: {
    winner: undefined
  },

  initialize: function() {
    this.playerX = new Player('X');
    this.playerO = new Player('O');
    this.gameBoard = new Board();
    this.currentPlayer = this.playerX;
  },

  // if (this.playerX.active === true) {
      // this.currentPlayer: this.playerX; // this line will be changed later when we begin "switching" which player starts each game first within multiple sessions

  // } else {
  //   this.currentPlayer = this.playerO
  // }

  switchTurn: function() {
    this.playerX.active = !(this.playerX.active);
    this.playerO.active = !(this.playerO.active);

    if (this.playerX.active === true) {
      this.currentPlayer = this.playerX;
    } else {
      this.currentPlayer = this.playerO;
    }
  },

  isDone: function() {
    var checkedMark = this.currentPlayer.mark;

    if (
      // the two diagonal winning possibilities:
      (this.gameBoard.boardArray[0][0] == checkedMark &&
      this.gameBoard.boardArray[1][1] == checkedMark &&
      this.gameBoard.boardArray[2][2] == checkedMark) ||

      (this.gameBoard.boardArray[0][2] == checkedMark &&
      this.gameBoard.boardArray[1][1] == checkedMark &&
      this.gameBoard.boardArray[2][0] == checkedMark) ||

      // the three down winning possibilities:
      (this.gameBoard.boardArray[0][0] == checkedMark &&
      this.gameBoard.boardArray[1][0] == checkedMark &&
      this.gameBoard.boardArray[2][0] == checkedMark) ||

      (this.gameBoard.boardArray[0][1] == checkedMark &&
      this.gameBoard.boardArray[1][1] == checkedMark &&
      this.gameBoard.boardArray[2][1] == checkedMark) ||

      (this.gameBoard.boardArray[0][2] == checkedMark &&
      this.gameBoard.boardArray[1][2] == checkedMark &&
      this.gameBoard.boardArray[2][2] == checkedMark) ||

      // the three across winning possibilities:
      (this.gameBoard.boardArray[0][0] == checkedMark &&
      this.gameBoard.boardArray[0][1] == checkedMark &&
      this.gameBoard.boardArray[0][2] == checkedMark) ||

      (this.gameBoard.boardArray[1][0] == checkedMark &&
      this.gameBoard.boardArray[1][1] == checkedMark &&
      this.gameBoard.boardArray[1][2] == checkedMark) ||

      (this.gameBoard.boardArray[2][0] == checkedMark &&
      this.gameBoard.boardArray[2][1] == checkedMark &&
      this.gameBoard.boardArray[2][2] == checkedMark)) {

      this.winner = this.currentPlayer;
      this.sessionGameCount += 1;
      return true;

    } else if (this.gameBoard.isFull() === true) {
      this.winner = "Tie game, no winner this round!";
      this.sessionGameCount += 1;
      return true;

    } else {
      return false;
    }
  },

  playTurn: function(firstArrayIndex, secondArrayIndex) {
    if (this.currentPlayer.setMark(this.gameBoard, firstArrayIndex, secondArrayIndex)) {
      if (this.isDone()) {
        return this.winner;
      } else {
        this.switchTurn();
      }
    }
  },
});

export default Game;
