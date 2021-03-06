import Backbone from 'backbone';
import $ from 'jquery';

import Board from 'app/models/board';
import Player from 'app/models/player';
import ApplicationView from 'app/views/application_view';
// import GameList from 'app/collections/game_list';

const Game = Backbone.Model.extend ({
  defaults: {
    winner: undefined
  },

  initialize: function(options, collection) {
    this.gameActive = true;
    this.playerX = new Player({
      mark: 'X',
      session: options
    });
    this.playerO = new Player({
      mark: 'O',
      session: options
    });
    this.gameBoard = new Board();
    this.currentSessionData = options;
    this.currentCollection = collection;

    if (this.currentSessionData.sessionGameCount % 2 === 0) {
      this.currentPlayer = this.playerX;
    } else {
      this.currentPlayer = this.playerO;
    }

  },

  switchTurn: function() {

    this.playerX.active = !(this.playerX.active);
    this.playerO.active = !(this.playerO.active);

    if (this.playerX.active === true) {
      this.currentPlayer = this.playerX;
    } else if (this.playerX.active === false){
      this.currentPlayer = this.playerO;
    }
  },

  isDone: function() {
    var rawGame;
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

                        this.winner = this.currentPlayer.mark;
                        this.currentSessionData.sessionGameCount += 1;
                        $('#end-of-game-message').append('<p>The winner is '+ this.winner + '!</p>');
                        this.gameActive = false;

                        rawGame = {
                          // board: this.gameBoard.boardArray,
                          'board': [].concat.apply([], this.gameBoard.boardArray),
                          'players': ["Player X", "Player O"],
                          'outcome': this.winner
                        };

                        this.currentCollection.create(rawGame);
                        $("#new-game-button").show();

                        return true;

                      } else if (this.gameBoard.isFull() === true) {
                        this.winner = "draw";
                        this.currentSessionData.sessionGameCount += 1;
                        $('#end-of-game-message').append(this.winner);
                        this.gameActive = false;

                        rawGame = {
                          // board: this.gameBoard.boardArray,
                          'board': [].concat.apply([], this.gameBoard.boardArray),
                          'players': ["Player X", "Player O"],
                          'outcome': this.winner
                        };

                        this.currentCollection.create(rawGame);
                        $("#new-game-button").show();
                        return true;

                      } else {
                        return false;
                      }
                    },

                    // Function to allow various functions to be tested
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
