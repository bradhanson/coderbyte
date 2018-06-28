/**
 * Have the function arithGeo(arr) take the array of numbers stored in arr and
 * return the string "Arithmetic" if the sequence follows an arithmetic pattern
 * or return "Geometric" if it follows a geometric pattern. If the sequence
 * doesn't follow either pattern return -1. An arithmetic sequence is one where
 * the difference between each of the numbers is consistent, where as in a
 * geometric sequence, each term after the first is multiplied by some constant
 * or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2,
 * 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be
 * entered, and no array will contain all the same elements.
 *
 * https://www.coderbyte.com/results/bhanson:Arith%20Geo:JavaScript
 *
 * @param  {array} arr
 * @return {string} or -1 on failure
 */
function arithGeo(arr) {
    if (arr.length === 1 || arr.length === 0) {
        return -1;
    }

    let arithmetic = true;
    // test arithmetic
    for (let i = 2, diff = arr[1] - arr[0]; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            arithmetic = false;
        }
    }

    if (arithmetic) {
        return 'Arithmetic';
    }

    let geometric = true;
    // geometric
    for (let i = 2, divisor = arr[1] / arr[0]; i < arr.length; i++) {
        if (arr[i] / arr[i - 1] !== divisor) {
            geometric = false;
        }
    }

    if (geometric) {
        return 'Geometric';
    }

    return -1;
}

module.exports = arithGeo;
