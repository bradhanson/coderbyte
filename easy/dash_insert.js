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

    for (let i = 1, lastNumberIsOdd = str[0] % 2 === 1; i < str.length; i++) {
        const numberIsOdd = str[i] % 2 === 1;

        newString += numberIsOdd && lastNumberIsOdd ? '-' + str[i] : str[i];

        lastNumberIsOdd = numberIsOdd;
    }
    return newString;
}

module.exports = dashInsert;
