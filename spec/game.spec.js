import Game from 'app/models/game';

describe('Game', function() {
  var testGame;
  beforeEach(function() {
    testGame = new Game();
  });

  it('will create a board', function() {
    expect(testGame.gameBoard).toBeDefined(true);
  });

  it('will create two players', function() {
    expect(testGame.playerX).toBeDefined(true);
    expect(testGame.playerO).toBeDefined(true);
  });

  it('will begin with playerX toggled as the active player', function() {
    expect(testGame.playerX.active).toBeDefined(true);
  });

  it('will begin with playerO toggled as the inactive player', function() {
    expect(testGame.playerO.active).toBeDefined(false);
  });

  describe('switchTurn', function() {
    it('will switch Player X from the active player to the inactive player and back to active again', function() {
      expect(testGame.playerX.active).toEqual(true);
      testGame.switchTurn();
      expect(testGame.playerX.active).toEqual(false);
      testGame.switchTurn();
      expect(testGame.playerX.active).toEqual(true);
    });

    it('will switch Player O from the inactive player to the active player and back to inactive', function() {
      expect(testGame.playerO.active).toEqual(false);
      testGame.switchTurn();
      expect(testGame.playerO.active).toEqual(true);
      testGame.switchTurn();
      expect(testGame.playerO.active).toEqual(false);
    });
  });

  describe('isDone', function() {
    it('will return false if the game is not finished and the game winner will remain undefined', function() {
      expect(testGame.isDone()).toEqual(false);
      testGame.gameBoard.boardArray = [["X", "O", "X"], ["O", "X", " "], [" ", "X", "O"]];
      expect(testGame.isDone()).toEqual(false);
      expect(testGame.winner).not.toBeDefined(true); // this confirms winner remains undefined
    });

    it('will return true when playerX wins and winner will be the playerX object', function() {
      // expect(testGame.sessionGameCount).toEqual(0);
      expect(testGame.isDone()).toEqual(false);
      testGame.gameBoard.boardArray = [["X", "X", "X"], ["O", "X", "O"], [" ", "X", "O"]];
      expect(testGame.isDone()).toEqual(true);
      expect(testGame.winner).toBe(testGame.playerX);
      // expect(testGame.sessionGameCount).toEqual(1);
    });

    it('will return true when playerO wins', function() {
      // expect(testGame.sessionGameCount).toEqual(0);
      expect(testGame.isDone()).toEqual(false);
      testGame.switchTurn();
      testGame.gameBoard.boardArray = [["O", "O", "O"], ["O", "X", "O"], [" ", "X", "O"]];
      expect(testGame.isDone()).toEqual(true);
      expect(testGame.winner).toBe(testGame.playerO);
      // expect(testGame.sessionGameCount).toEqual(1);
    });
  });

  it('will return true when there\'s a tie', function() {
    // expect(testGame.sessionGameCount).toEqual(0);
    expect(testGame.isDone()).toEqual(false);
    testGame.gameBoard.boardArray = [["X", "O", "X"], ["O", "X", "X"], ["O", "X", "O"]];
    expect(testGame.isDone()).toEqual(true);
    expect(testGame.winner).toEqual('Tie game, no winner this round!');
    // expect(testGame.sessionGameCount).toEqual(1);
  });

  describe('playTurn', function() {
    it('will throw an error if someone tries to play in a space that has already been played', function() {
      testGame.playTurn(0,0);
      expect(function() {
          testGame.playTurn(0,0);
      }).toThrow();
    });

    it('will switch players when playTurn is called and the game is still going [no one has won]', function() {
        expect(testGame.currentPlayer).toBe(testGame.playerX);
        testGame.playTurn(0,0);
        expect(testGame.currentPlayer).toBe(testGame.playerO);
    });

    it('will return the winner player object when playerX wins and the board is not yet full', function() {
        testGame.playTurn(1,1); // X
        testGame.playTurn(0,1); // O
        testGame.playTurn(0,2); // X
        testGame.playTurn(2,1); // O
        expect(testGame.playTurn(2,0)).toEqual(testGame.playerX); // X -- winning move
    });

    it('will return the winner player object when playerO wins and the board is not yet full', function() {
        testGame.playTurn(0,1); // X
        testGame.playTurn(1,1); // O
        testGame.playTurn(2,2); // X
        testGame.playTurn(0,2); // O
        testGame.playTurn(2,1); // X
        expect(testGame.playTurn(2,0)).toEqual(testGame.playerO); // O -- winning move
    });

    it('will return the winner player object when playerX wins on the final turn and the board is full', function() {
        testGame.playTurn(1,1); // X
        testGame.playTurn(0,1); // O
        testGame.playTurn(0,2); // X
        testGame.playTurn(0,0); // O
        testGame.playTurn(1,0); // X
        testGame.playTurn(1,2); // O
        testGame.playTurn(2,1); // X
        testGame.playTurn(2,2); // O
        expect(testGame.playTurn(2,0)).toEqual(testGame.playerX); // X -- winning move
    });

    it('will return the tie message when the board is full and no winner', function() {
        testGame.playTurn(1,1); // X
        testGame.playTurn(0,1); // O
        testGame.playTurn(0,2); // X
        testGame.playTurn(0,0); // O
        testGame.playTurn(1,0); // X
        testGame.playTurn(1,2); // O
        testGame.playTurn(2,1); // X
        testGame.playTurn(2,0); // O
        expect(testGame.playTurn(2,2)).toEqual("Tie game, no winner this round!"); // X -- last move, TIED
    });
  });
});
