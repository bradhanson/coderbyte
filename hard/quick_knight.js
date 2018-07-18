/**
 * Using the JavaScript language, have the function quickKnight(str) read str
 * which will be a string consisting of the location of a knight on a standard
 * 8x8 chess board with no other pieces on the board and another space on the
 * chess board. The structure of str will be the following: "(x y)(a b)" where
 * (x y) represents the position of the knight with x and y ranging from 1 to 8
 * and (a b) represents some other space on the chess board with a and b also
 * ranging from 1 to 8. Your program should determine the least amount of moves
 * it would take the knight to go from its position to position (a b). For
 * example if str is "(2 3)(7 5)" then your program should output 3 because that
 * is the least amount of moves it would take for the knight to get from (2 3)
 * to (7 5) on the chess board.
 *
 * https://www.coderbyte.com/results/bhanson:Quick%20Knight:JavaScript
 *
 * @param  {string} str
 * @return {number}
 */
function quickKnight(str) {
    // Parse input and check validity
    const digits = str.match(/[1-8]+/g).map(Number);
    if (digits.length !== 4) {
        return -1;
    }

    const knight = new Coords(digits[0], digits[1]);
    const destination = new Coords(digits[2], digits[3]);

    const path = knightPathTo(knight, destination);

    /*
    Example knightPathTo() result for '(1 1)(8 8)':
    [ Coords { x: 1, y: 1 },
      Coords { x: 3, y: 2 },
      Coords { x: 5, y: 3 },
      Coords { x: 7, y: 4 },
      Coords { x: 8, y: 6 },
      Coords { x: 6, y: 7 },
      Coords { x: 8, y: 8 } ]
    */
    // console.log(path);

    return path.length - 1;
}

function Coords(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Coords.prototype.toString = function() {
    return `${this.x},${this.y}`;
};

Coords.prototype.isEqual = function(loc) {
    if (!(loc instanceof Coords)) {
        return false;
    }
    return this.x === loc.x && this.y === loc.y;
};

Coords.arrayIncludes = function(arr, loc) {
    if (!Array.isArray(arr) || !(loc instanceof Coords)) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isEqual(loc)) {
            return true;
        }
    }
    return false;
};

function knightPathTo(knight, destination) {
    if (!(knight instanceof Coords) || !(destination instanceof Coords)) {
        return [];
    }

    // Iterative breadth-first search
    //
    // We only care about finding _a_ shortest path, although many might exist.
    // To reduce the search space we will combine similar iterations together.
    //
    // A -> B -> D
    // A -> C -> D
    //
    // Will be combined into either A -> B -> D or A -> C -> D.  The exact
    // choice of combination is undefined, but they both represent valid paths
    // of the same length.
    //
    // The last node, in this case "D" will be stored as the key in the `queue`
    // Map object.
    //
    // "D" for us is a Coords object, but because Map() will happily accept
    // object references we need to convert it into a string such that two
    // different Coords objects with the same actual coordinates will be the
    // same.
    //
    // As a breadth-first search, each iteration will represent one additional
    // path length.  We will return the first successful path found as any
    // additional paths found in that level will be of the same length.  It is
    // guaranteed to be the shortest length;
    //
    // A "path" is represented as an array of Coords
    let queue = new Map();
    queue.set(knight.toString(), [knight]);

    while (queue.size !== 0) {
        const nextQueue = new Map();

        for (const path of queue) {
            const [pathKey, pathArr] = path;

            const lastLocation = pathArr[pathArr.length - 1];
            for (const move of knightLocations(lastLocation)) {
                if (move.isEqual(destination)) {
                    // Found destination!
                    const finalPath = pathArr.slice();
                    finalPath.push(move);
                    return finalPath;
                }

                if (!Coords.arrayIncludes(pathArr, move)) {
                    // Only visit Coords we haven't been to yet
                    const pathCopy = pathArr.slice();
                    pathCopy.push(move);
                    nextQueue.set(move.toString(), pathCopy);
                }
            }
        }
        queue = nextQueue;
    }

    // This should never happen because a knight can reach any other spot on an
    // empty board, but this is where code goes if a destination is unreachable.
    return [];
}

function* knightLocations(loc) {
    if (!(loc instanceof Coords)) {
        return undefined;
    }

    const offsets = [
        new Coords(1, 2),
        new Coords(1, -2),
        new Coords(-1, 2),
        new Coords(-1, -2),
        new Coords(2, 1),
        new Coords(2, -1),
        new Coords(-2, 1),
        new Coords(-2, -1)
    ];

    for (let i = 0; i < offsets.length; i++) {
        const offset = offsets[i];

        const tryX = loc.x + offset.x;
        const tryY = loc.y + offset.y;

        if (tryX >= 1 && tryX <= 8 && tryY >= 1 && tryY <= 8) {
            yield new Coords(tryX, tryY);
        }
    }
}

module.exports = quickKnight;
