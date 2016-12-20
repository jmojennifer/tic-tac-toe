import Board from 'app/models/board';

describe('Board', function() {
    var testBoard = new Board();
    beforeEach(function() {
        var testBoard = new Board();
    });

    it('will have a board as a 2D array', function() {
        expect(testBoard.boardArray).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    });

    describe('isFull', function() {
        it('will return false if the board still contains blank spaces', function() {
            expect(testBoard.isFull()).toEqual(false);
        });

        it('will return true if the board does not contain any blank spaces', function() {
            testBoard.boardArray = [['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'X', 'X']];
            expect(testBoard.isFull()).toEqual(true);
        });
    });
});
