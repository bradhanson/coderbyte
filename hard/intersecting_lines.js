/**
 * Using the JavaScript language, have the function intersectingLines(strArr)
 * take strArr which will be an array of 4 coordinates in the form: (x,y). Your
 * program should take these points where the first 2 form a line and the last 2
 * form a line, and determine whether the lines intersect, and if they do, at
 * what point. For example: if strArr is ["(3,0)","(1,4)","(0,-3)","(2,3)"],
 * then the line created by (3,0) and (1,4) and the line created by (0,-3) (2,3)
 * intersect at (9/5,12/5). Your output should therefore be the 2 points in
 * fraction form in the following format: (9/5,12/5). If there is no denominator
 * for the resulting points, then the output should just be the integers like
 * so: (12,3). If any of the resulting points is negative, add the negative sign
 * to the numerator like so: (-491/63,-491/67). If there is no intersection,
 * your output should return the string "no intersection". The input points and
 * the resulting points can be positive or negative integers.
 *
 * https://www.coderbyte.com/results/bhanson:Intersecting%20Lines:JavaScript
 *
 * @param  {array} strArr
 * @return {string}
 */
function intersectingLines(strArr) {
    // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
    const [x1, y1, x2, y2, x3, y3, x4, y4] = strArr
        .join('')
        .match(/-?\d+/g)
        .map(Number);

    // https://wikimedia.org/api/rest_v1/media/math/render/svg/c51a9b486a6ef5a7a08b92d75e71a07888034a9a
    const pxNumerator =
        (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4);
    const pxDenominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    const pyNumerator =
        (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4);
    const pyDenominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    // The problem is solved at this point, but we need to format the answer to spec

    if (pxDenominator === 0 || pyDenominator === 0) {
        return 'no intersection';
    }

    const pxString = formatFractionToString(pxNumerator, pxDenominator);
    const pyString = formatFractionToString(pyNumerator, pyDenominator);

    return `(${pxString},${pyString})`;
}

function greatestCommonFactor(num0, num1) {
    num0 = Math.abs(num0);
    num1 = Math.abs(num1);

    if (num0 === 0) return num1;
    if (num1 === 0) return num0;

    const max = Math.min(num0, num1);
    let gcf = 1;
    for (let i = 1; i <= max; i++) {
        if (num0 % i === 0 && num1 % i === 0) {
            gcf = i;
        }
    }
    return gcf;
}

function formatFractionToString(numerator, denominator) {
    // Reduce fraction
    const gcf = greatestCommonFactor(numerator, denominator);
    numerator /= gcf;
    denominator /= gcf;

    // Combine signs and remove from elements to add at end
    sign = Math.sign(numerator) * Math.sign(denominator) === 1 ? '' : '-';
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    let str;
    if (numerator === 0) {
        str = '0';
    } else if (numerator === denominator || denominator === 1) {
        str = `${sign}${numerator}`;
    } else {
        str = `${sign}${numerator}/${denominator}`;
    }

    return str;
}

module.exports = intersectingLines;
