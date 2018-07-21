/**
 * Using the JavaScript language, have the function longestMatrixPath(strArr)
 * take the array of strings stored in strArr, which will be an NxM matrix of
 * positive single-digit integers, and find the longest increasing path composed
 * of distinct integers. When moving through the matrix, you can only go up,
 * down, left, and right. For example: if strArr is ["345", "326", "221"], then
 * this looks like the following matrix:
 *
 * 3 4 5
 * 3 2 6
 * 2 2 1
 *
 * For the input above, the longest increasing path goes from: 3 -> 4 -> 5 -> 6.
 * Your program should return the number of connections in the longest path, so
 * therefore for this input your program should return 3. There may not
 * necessarily always be a longest path within the matrix.
 *
 * https://www.coderbyte.com/results/bhanson:Longest%20Matrix%20Path:JavaScript
 *
 * @param  {array} strArr
 * @return {number}
 */
function longestMatrixPath(strArr) {
    let longestPath = 0;

    for (let row = 0; row < strArr.length; row++) {
        for (let col = 0; col < strArr[0].length; col++) {
            let longestSubPath = tryDirections(strArr, col, row);
            if (longestSubPath.length > longestPath) {
                longestPath = longestSubPath.length;
            }
        }
    }

    return longestPath - 1;
}

function tryDirections(matrix, x, y, visited = []) {
    // Arrays are passed by reference so we'll create a copy
    visited = visited.slice();

    markVisited(visited, x, y);

    const directions = [
        { x: 1, y: 0 }, // right
        { x: 0, y: 1 }, // down
        { x: -1, y: 0 }, // left
        { x: 0, y: -1 } // up
    ];

    const children = [];

    directions.forEach(direction => {
        const [tryX, tryY] = [x + direction.x, y + direction.y];

        if (
            tryX < 0 ||
            tryX >= matrix[0].length ||
            tryY < 0 ||
            tryY >= matrix.length ||
            hasVisited(visited, tryX, tryY) ||
            Number(matrix[tryY][tryX]) <= Number(matrix[y][x])
        ) {
            // Invalid coords
            return [];
        }

        children.push(tryDirections(matrix, tryX, tryY, visited));
    });

    children.sort((a, b) => b.length - a.length);

    if (children.length > 0) {
        return children[0];
    }

    return visited;

    function markVisited(visited, x, y) {
        visited.push({ x, y });
    }

    function hasVisited(visited, x, y) {
        return visited.some(coords => coords.x === x && coords.y === y);
    }
}

module.exports = longestMatrixPath;
