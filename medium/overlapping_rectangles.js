/**
 * Using the JavaScript language, have the function
 * overlappingRectangles(strArr) read the strArr parameter being passed which
 * will represent two rectangles on a Cartesian coordinate plane and will
 * contain 8 coordinates with the first 4 making up rectangle 1 and the last 4
 * making up rectange 2. It will be in the following format:
 * ["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"] Your program should
 * determine the area of the space where the two rectangles overlap, and then
 * output the number of times this overlapping region can fit into the first
 * rectangle. For the above example, the overlapping region makes up a rectangle
 * of area 2, and the first rectangle (the first 4 coordinates) makes up a
 * rectangle of area 4, so your program should output 2. The coordinates will
 * all be integers. If there's no overlap between the two rectangles return 0.
 *
 * https://www.coderbyte.com/results/bhanson:Overlapping%20Rectangles:JavaScript
 *
 * @param  {array} strArr Array with one string element
 * @return {number} Number of times area of overlap can fit in first rectangle
 */
function overlappingRectangles(strArr) {
    // Convert coords from this format:
    // ['(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)']
    // To this format:
    // [[0,0],[2,2],[2,0],[0,2],[1,0],[1,2],[6,0],[6,2]]
    const coords = strArr[0]
        .match(/(-?[0-9]+,-?[0-9]+)/g)
        .map(pair => pair.split(',').map(num => Number(num)));

    const rect0 = Rectangle.fromCoords(coords.splice(0, 4));
    const rect1 = Rectangle.fromCoords(coords);

    const overlap = Rectangle.areaOverlapping(rect0, rect1);

    // Per spec, if no overlap return 0 (otherwise it would return `Infinity`)
    if (overlap === 0) {
        return 0;
    }

    const numOverlapFitsInRect0 = Math.floor(rect0.area() / overlap);

    return numOverlapFitsInRect0;
}

function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

// Iterates through each point, left-to-right, top-to-bottom
Rectangle.prototype[Symbol.iterator] = function*() {
    for (let row = this.y; row < this.y + this.height; row++) {
        for (let col = this.x; col < this.x + this.width; col++) {
            yield [col, row];
        }
    }
};

// Returns a new Rectangle object from an array of coordinates
Rectangle.fromCoords = function(coordsArray) {
    if (coordsArray.length !== 4) {
        return null;
    }

    const xCoords = coordsArray.map(coords => coords[0]).sort();
    const yCoords = coordsArray.map(coords => coords[1]).sort();

    // For a valid rectangle, there should be pairs of x and y coords
    if (
        xCoords[0] !== xCoords[1] ||
        xCoords[2] !== xCoords[3] ||
        yCoords[0] !== yCoords[1] ||
        yCoords[2] !== yCoords[3]
    ) {
        // Coords are not rectangle
        return null;
    }

    const [x1, , x2] = xCoords;
    const [y1, , y2] = yCoords;

    const width = Math.abs(x1 - x2);
    const height = Math.abs(y1 - y2);
    const x = Math.min(x1, x2);
    const y = Math.min(y1, y2);

    return new Rectangle(x, y, width, height);
};

Rectangle.areaOverlapping = function(rectangle0, rectangle1) {
    let overlap = 0;
    for (const coords of rectangle1) {
        if (rectangle0.containsCoords(coords)) {
            overlap++;
        }
    }
    return overlap;
};

Rectangle.prototype.containsCoords = function(coords) {
    let [x, y] = coords;
    if (
        x >= this.x &&
        x < this.x + this.width &&
        y >= this.y &&
        y < this.y + this.height
    ) {
        return true;
    }
    return false;
};

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

module.exports = overlappingRectangles;
