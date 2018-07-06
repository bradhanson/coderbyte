/**
 * Have the function dashInsert(str) insert dashes ('-') between each two odd
 * numbers in str. For example: if str is 454793 the output should be 4547-9-3.
 * Don't count zero as an odd number.
 *
 * https://www.coderbyte.com/results/bhanson:Dash%20Insert:JavaScript
 *
 * @param  {string} str
 * @return {string}
 */
function dashInsert(str) {
    let newString = str[0] || '';

    for (let i = 1, lastOdd = str[0] % 2; i < str.length; i++) {
        if (str[i] % 2 === 1 && lastOdd === 1) {
            newString += '-' + str[i];
        } else {
            newString += str[i];
        }
        lastOdd = str[i] % 2;
    }
    return newString;
}

module.exports = dashInsert;
