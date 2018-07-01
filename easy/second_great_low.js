/**
 * Have the function secondGreatLow(arr) take the array of numbers stored in arr
 * and return the second lowest and second greatest numbers, respectively,
 * separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the
 * output should be 12 98. The array will not be empty and will contain at least
 * 2 numbers. It can get tricky if there's just two numbers!
 *
 * https://www.coderbyte.com/results/bhanson:Second%20GreatLow:JavaScript
 *
 * @param  {array} arr
 * @return {string}
 */
function secondGreatLow(arr) {
    arr = arr.slice().sort((a, b) => a - b);

    let second = arr[1];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            second = arr[i];
            break;
        }
    }

    let penultimate = arr[arr.length - 2];
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] !== arr[arr.length - 1]) {
            penultimate = arr[i];
            break;
        }
    }

    return second + ' ' + penultimate;
}

module.exports = secondGreatLow;
