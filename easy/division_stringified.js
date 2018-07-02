/**
 * Have the function divisionStringified(num1,num2) take both parameters being
 * passed, divide num1 by num2, and return the result as a string with properly
 * formatted commas. If an answer is only 3 digits long, return the number with
 * no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789
 * and num2 is 10000 the output should be "12,346".
 *
 * https://www.coderbyte.com/results/bhanson:Division%20Stringified:JavaScript
 *
 * @param  {number} num1
 * @param  {number} num2
 * @return {string}
 */
function divisionStringified(num1, num2) {
    if (num2 === 0) {
        return 'undefined';
    }

    const quotientString = Math.round(num1 / num2).toString();

    // Process array from right-to-left to add commas, but more pragmatically
    // will just reverse the numbers and work left-to-right
    const reversedData = quotientString.split('').reverse();
    let formattedString = '';
    for (let i = 0; i < reversedData.length; i++) {
        if (i % 3 === 2 && i != reversedData.length - 1) {
            // need comma next
            formattedString = ',' + reversedData[i] + formattedString;
        } else {
            formattedString = reversedData[i] + formattedString;
        }
    }
    return formattedString;
}

module.exports = divisionStringified;
