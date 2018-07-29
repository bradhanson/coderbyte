/**
 * Have the function swapCase(str) take the str parameter and swap the case of
 * each character. For example: if str is "Hello World" the output should be
 * hELLO wORLD. Let numbers and symbols stay the way they are.
 *
 * https://www.coderbyte.com/results/bhanson:Swap%20Case:JavaScript
 *
 * @param  {string} str
 * @return {string}
 */
function swapCase(str) {
    const LOWER = 'abcdefghijklmnopqrstuvwxyz';
    const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const newString = str
        .split('')
        .map(char => {
            if (LOWER.includes(char)) {
                return char.toUpperCase();
            }

            if (UPPER.includes(char)) {
                return char.toLowerCase();
            }

            return char;
        })
        .join('');

    return newString;
}

module.exports = swapCase;
