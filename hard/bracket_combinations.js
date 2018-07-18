/**
 * Have the function bracketCombinations(num) read num which will be an integer
 * greater than or equal to zero, and return the number of valid combinations
 * that can be formed with num pairs of parentheses. For example, if the input
 * is 3, then the possible combinations of 3 pairs of parenthesis, namely:
 * ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total
 * combinations when the input is 3, so your program should return 5.
 *
 * https://www.coderbyte.com/results/bhanson:Bracket%20Combinations:JavaScript
 *
 * @param  {number} num
 * @return {number}
 */
function bracketCombinations(num) {
    // https://en.wikipedia.org/wiki/Catalan_number
    return (1 / (num + 1)) * choose(2 * num, num);
}

function factorial(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}

function choose(num, k) {
    return factorial(num) / (factorial(k) * factorial(num - k));
}

module.exports = bracketCombinations;
