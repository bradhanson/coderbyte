/**
 * Have the function arrayAdditionI(arr) take the array of numbers stored in arr
 * and return the string true if any combination of numbers in the array
 * (excluding the largest number) can be added up to equal the largest number in
 * the array, otherwise return the string false. For example: if arr contains
 * [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 =
 * 23. The array will not be empty, will not contain all the same elements, and
 * may contain negative numbers.
 *
 * https://www.coderbyte.com/results/bhanson:Array%20Addition%20I:JavaScript
 *
 * @param  {array} arr
 * @return {string} true or false
 */
function arrayAdditionI(arr) {
    // find largest number
    let largestIndex = 0;
    let largestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestIndex = i;
            largestNumber = arr[i];
        }
    }
    arr.splice(largestIndex, 1);

    let combos = [];
    let size = arr.length;

    for (let i = 0, max = Math.pow(2, size); i < max; i++) {
        let num = i.toString(2);
        while (num.length < size) {
            num = '0' + num;
        }
        combos.push(num);
    }

    // iterate over all combos of numbers
    for (let i = 0; i < combos.length; i++) {
        let sum = 0;
        for (let j = 0; j < combos[i].length; j++) {
            if (combos[i][j] === '1') {
                sum += arr[j];
            }
        }

        if (sum === largestNumber) {
            return 'true';
        }
    }
    return 'false';
}

module.exports = arrayAdditionI;
