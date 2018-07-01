/**
 * Have the function tetrisMove(strArr) take strArr parameter being passed which
 * will be an array containing one letter followed by 12 numbers representing a
 * Tetris piece followed by the fill levels for the 12 columns of the board.
 * Calculate the greatest number of horizontal lines that can be completed when
 * the piece arrives at the bottom assuming it is dropped immediately after
 * being rotated and moved horizontally from the top. Tricky combinations of
 * vertical and horizontal movements are excluded. The piece types are
 * represented by capital letters.
 *
 * [Image of tetris pieces](https://i.imgur.com/pEAiRJ2.png)
 *
 * For example, with an input of
 * ["L","3","4","4","5","6","2","0","6","5","3","6","6"], the board will look
 * something like this:
 *
 * [Image of board state](https://i.imgur.com/Qc777Zt.png)
 *
 * Your result should be 3 because the L piece can be rotated and dropped in
 * column 6-7 which will complete 3 full rows of blocks.
 * @param  {array} strArr
 * @return {number}
 */
function tetrisMove(strArr) {
    const GAME_WIDTH = 12;
    const GAME_HEIGHT = 10;

    let pieceKey = strArr.shift();

    let pieces = {
        I: [[1, 1, 1, 1]],

        J: [[1, 1, 1], [0, 0, 1]],

        L: [[1, 1, 1], [1, 0, 0]],

        O: [[1, 1], [1, 1]],

        S: [[0, 1, 1], [1, 1, 0]],

        T: [[1, 1, 1], [0, 1, 0]],

        Z: [[1, 1, 0], [0, 1, 1]]
    };

    // Generate blank game board
    let board = [];
    for (let row = 0; row < GAME_HEIGHT; row++) {
        let ra = [];
        for (let col = 0; col < GAME_WIDTH; col++) {
            ra.push(0);
        }
        board.push(ra);
    }

    // Fill board to given game state
    strArr.forEach((fillLevel, index) => {
        for (let i = 0; i < fillLevel; i++) {
            board[GAME_HEIGHT - 1 - i][index] = 1;
        }
    });

    let piece = pieces[pieceKey];

    // All 4 rotated versions of our piece
    let tryPieces = [piece];

    piece = rotateCCW(piece);
    tryPieces.push(piece);

    piece = rotateCCW(piece);
    tryPieces.push(piece);

    piece = rotateCCW(piece);
    tryPieces.push(piece);

    let maxScore = 0;

    // Try each rotated piece
    tryPieces.forEach(piece => {
        let pieceHeight = piece.length;
        let pieceWidth = piece[0].length;

        // Evaluate specific piece on every game possibility
        for (let row = 0, max = GAME_HEIGHT - pieceHeight; row <= max; row++) {
            for (
                let col = 0, max = GAME_WIDTH - pieceWidth;
                col <= max;
                col++
            ) {
                if (
                    validState(piece, row, col) &&
                    validBottomState(piece, row, col)
                ) {
                    let score = evaluateScore(piece, row, col);
                    if (score > maxScore) {
                        maxScore = score;
                    }
                }
            }
        }
    });

    return maxScore;

    /*
     *  Helpers below
     */

    // Returns score
    function evaluateScore(piece, row, col) {
        // Copy piece into game state copy
        let copy = JSON.parse(JSON.stringify(board));
        for (let r = 0; r < piece.length; r++) {
            for (let c = 0; c < piece[0].length; c++) {
                if (piece[r][c] === 1) {
                    copy[row + r][col + c] = 1;
                }
            }
        }

        let score = 0;
        copy.forEach(row => {
            score += row.every(col => col === 1);
        });
        return score;
    }

    // Checks if piece is at the bottom of a valid state
    function validBottomState(piece, row, col) {
        // Find bottom of piece
        for (let c = 0, max = piece[0].length; c < max; c++) {
            for (let r = piece.length - 1; r >= 0; r--) {
                if (piece[r][c] === 1) {
                    // Either at the bottom of the board
                    // OR the space on the board directly below us is a piece
                    if (
                        row + r + 1 >= board.length ||
                        board[row + r + 1][col + c] === 1
                    ) {
                        return true;
                    }
                    break;
                }
            }
        }
        return false;
    }

    // Checks if the piece in the given location is a valid game state
    // i.e., returns false if the piece would overlap another piece
    function validState(piece, row, col) {
        for (let r = 0; r < piece.length; r++) {
            for (let c = 0; c < piece[0].length; c++) {
                if (board[row + r][col + c] === 1 && piece[r][c] === 1) {
                    return false;
                }
            }
        }
        return true;
    }

    // Returns new piece rotated counter-clockwise
    function rotateCCW(piece) {
        let pieceHeight = piece.length;
        let pieceWidth = piece[0].length;

        let newPiece = [];

        // Generate blank new piece
        for (let row = 0; row < pieceWidth; row++) {
            let ra = [];
            for (let col = 0; col < pieceHeight; col++) {
                ra.push(0);
            }
            newPiece.push(ra);
        }

        // Fill new piece from old piece data
        for (let row = 0; row < pieceWidth; row++) {
            for (let col = 0; col < pieceHeight; col++) {
                newPiece[row][col] = piece[col][pieceWidth - 1 - row];
            }
        }
        return newPiece;
    }
}

module.exports = tetrisMove;
