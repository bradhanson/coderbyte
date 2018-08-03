/**
 * Have the function powersOfTwo(num) take the num parameter being passed which
 * will be an integer and return the string true if it's a power of two. If it's
 * not return the string false. For example if the input is 16 then your program
 * should return the string true but if the input is 22 then the output should
 * be the string false.
 *
 * https://www.coderbyte.com/results/bhanson:Powers%20of%20Two:JavaScript
 *
 * @param  {number} num
 * @return {string} 'true' or 'false'
 */
function powersOfTwo(num) {
    return Number.isInteger(Math.log(num) / Math.log(2)) ? 'true' : 'false';
}

module.exports = powersOfTwo;
