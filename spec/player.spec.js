import Player from 'app/models/player';
import Game from 'app/models/game';

describe('Player', function() {
    var testPlayerX;
    var testPlayerO;
    var testGame;
    beforeEach(function() {
        testPlayerX = new Player('X');
        testPlayerO = new Player('O');
        testGame = new Game();
    });

    it('will create two players, each with a different mark', function() {
        expect(testPlayerX.mark).toEqual('X');
        expect(testPlayerO.mark).toEqual('O');
    });

    // it('will switch which player starts with each game (playerX ) ', function() {
    //     expect(testPlayerX.mark).toEqual('X');
    //     expect(testPlayerO.mark).toEqual('O');
    // });

    describe('setMark', function() {
        it('will add applicable mark to the game\'s board', function() {
            expect(testPlayerX.setMark(testGame.gameBoard, 0, 0)).toEqual(testPlayerX.mark);
            expect(testPlayerO.setMark(testGame.gameBoard, 2, 2)).toEqual(testPlayerO.mark);
        });

        it('will not allow a player to set a mark in a space that\'s already been set', function() {
            testPlayerX.setMark(testGame.gameBoard, 0, 0);

            expect(function () {
                testPlayerO.setMark(testGame.gameBoard, 0, 0);
            }).toThrow();
        });
    });
});
