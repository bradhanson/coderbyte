/**
 * Using the JavaScript language, have the function matrixDeterminant(strArr)
 * read strArr which will be an array of integers represented as strings. Within
 * the array there will also be "<>" elements which represent break points. The
 * array will make up a matrix where the (number of break points + 1) represents
 * the number of rows. Here is an example of how strArr may look:
 * ["1","2","<>","3","4"]. The contents of this array are row1=[1 2] and row2=[3
 * 4]. Your program should take the given array of elements, create the proper
 * matrix, and then calculate the determinant. For the example above, your
 * program should return -2. If the matrix is not a square matrix, return -1.
 * The maximum size of strArr will be a 6x6 matrix. The determinant will always
 * be an integer.
 *
 * https://www.coderbyte.com/results/bhanson:Matrix%20Determinant:JavaScript
 *
 * @param  {array} strArr
 * @return {number}
 */
function matrixDeterminant(strArr) {
    const matrixLength = Math.floor(Math.sqrt(strArr.length));

    // Input array must be square
    // 1x1 = 1 + 0 = 1
    // 2x2 = 4 + 1 = 5
    // 3x3 = 9 + 2 = 11
    // 4x4 = 16 + 3 = 19
    // 5x5 = 25 + 4 = 29
    // 6x6 = 36 + 5 = 41
    // ...
    if (matrixLength * matrixLength + (matrixLength - 1) !== strArr.length) {
        return -1;
    }

    // Remove separators and cast to number
    const cells = strArr.filter(element => element !== '<>').map(Number);

    const matrix = buildMatrix(matrixLength, matrixLength);
    fillMatrix(matrix, cells);

    // https://en.wikipedia.org/wiki/Determinant
    const determinant = matrixDeterminantRecursive(matrix);
    return determinant;
}

// Returns reference to new empty matrix
function buildMatrix(rows, columns, fillValue = 0) {
    const newMatrix = Array(rows)
        .fill(0)
        .map(_ => Array(columns).fill(fillValue));
    return newMatrix;
}

// Fill 2d matrix with 1d array
function fillMatrix(matrix, arrElements) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    if (arrElements.length !== rows * columns) {
        return undefined;
    }

    arrElements.forEach((element, index) => {
        const rowIndex = Math.floor(index / columns);
        const colIndex = index % columns;
        matrix[rowIndex][colIndex] = element;
    });
}

// Finds determinant of any sized matrix, recursively
function matrixDeterminantRecursive(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    if (rows === 2 && columns === 2) {
        return matrixDeterminant2x2(matrix);
    }

    let subDeterminants = [];
    for (let i = 0; i < columns; i++) {
        const subMatrix = reduceMatrix(matrix, [0], [i]);
        const subDeterminant = matrixDeterminantRecursive(subMatrix);
        subDeterminants.push(matrix[0][i] * subDeterminant);
    }

    // + - + - ... pattern
    subDeterminants = subDeterminants.map((determinant, index) => {
        const polarity = index % 2 === 0 ? 1 : -1;
        return determinant * polarity;
    });

    const sum = subDeterminants.reduce((sum, value) => (sum += value), 0);

    return sum;
}

// Returns determinant of 2x2 matrix
function matrixDeterminant2x2(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    if (columns !== 2 || rows !== 2) {
        return undefined;
    }

    const [a, b] = matrix[0];
    const [c, d] = matrix[1];

    const determinant = a * d - b * c;

    return determinant;
}

// Returns a new matrix without specified rows or columns
function reduceMatrix(matrix, ignoreRows, ignoreColumns) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    let newMatrix = copyMatrix(matrix);

    // `null` out values to be ignored
    newMatrix.forEach((row, rowIndex) => {
        if (ignoreRows.includes(rowIndex)) {
            newMatrix[rowIndex] = null;
        } else {
            row.forEach((value, colIndex) => {
                if (ignoreColumns.includes(colIndex)) {
                    newMatrix[rowIndex][colIndex] = null;
                }
            });
        }
    });

    // remove `null` valued rows
    newMatrix = newMatrix.filter(row => row !== null);

    // remove `null` valued columns
    newMatrix = newMatrix.map(row => row.filter(col => col !== null));

    return newMatrix;
}

// Performs a deep copy of a 2d array
function copyMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const newMatrix = buildMatrix(rows, columns);
    matrix.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            newMatrix[rowIndex][colIndex] = value;
        });
    });
    return newMatrix;
}

module.exports = matrixDeterminant;
