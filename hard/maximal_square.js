/**
 * Using the JavaScript language, have the function maximalSquare(strArr) take
 * the strArr parameter being passed which will be a 2D matrix of 0 and 1's, and
 * determine the area of the largest square submatrix that contains all 1's. A
 * square submatrix is one of equal width and height, and your program should
 * return the area of the largest submatrix that contains only 1's. For example:
 * if strArr is ["10100", "10111", "11111", "10010"] then this looks like the
 * following matrix:
 *
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 *
 * For the input above, you can see the bolded 1's create the largest square
 * submatrix of size 2x2, so your program should return the area which is 4. You
 * can assume the input will not be empty.
 *
 * https://www.coderbyte.com/results/bhanson:Maximal%20Square:JavaScript
 *
 * @param  {array} strArr
 * @return {number} area of max square
 */
function maximalSquare(strArr) {
    let maxSquareSize = 0;

    strArr.forEach((row, rowIndex) => {
        row.split('').forEach((col, colIndex) => {
            const maxPossibleSquareSize = Math.min(
                strArr.length - rowIndex,
                strArr[0].length - colIndex
            );

            // Try all square sizes from this position
            for (let size = 1; size <= maxPossibleSquareSize; size++) {
                if (
                    isSquare(strArr, colIndex, rowIndex, size) &&
                    size > maxSquareSize
                ) {
                    maxSquareSize = size;
                }
            }
        });
    });

    return maxSquareSize * maxSquareSize;
}

function isSquare(matrix, x, y, squareSize) {
    for (let row = y; row < y + squareSize; row++) {
        for (let col = x; col < x + squareSize; col++) {
            if (matrix[row][col] === '0') {
                return false;
            }
        }
    }
    return true;
}

module.exports = maximalSquare;
