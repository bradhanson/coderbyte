/**
 * Have the function numberAddition(str) take the str parameter, search for all
 * the numbers in the string, add them together, then return that final number.
 * For example: if str is "88Hello 3World!" the output should be 91. You will
 * have to differentiate between single digit numbers and multiple digit numbers
 * like in the example above. So "55Hello" and "5Hello 5" should return two
 * different answers. Each string will contain at least one letter or symbol.
 *
 * https://www.coderbyte.com/results/bhanson:Number%20Addition:JavaScript
 *
 * @param  {string} str
 * @return {number}
 */
function numberAddition(str) {
    const DIGITS = '0123456789';

    let numbers = [];

    // First find numbers
    for (let i = 0, number = ''; i < str.length; i++) {
        if (!DIGITS.includes(str[i])) {
            if (number !== '') {
                numbers.push(number);
            }
            number = '';
        } else {
            number += str[i];

            // Special case for last char
            if (i === str.length - 1) {
                numbers.push(number);
            }
        }
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    return sum;
}

module.exports = numberAddition;
