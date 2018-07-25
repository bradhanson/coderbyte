/**
 * Using the JavaScript language, have the function linearCongruence(str) read
 * the str parameter being passed which will be a linear congruence equation in
 * the form: "ax = b (mod m)" Your goal is to solve for x and return the number
 * of solutions to x. For example: if str is "32x = 8 (mod 4)" then your program
 * should return 4 because the answers to this equation can be either 0, 1, 2,
 * or 3.
 *
 * https://www.coderbyte.com/results/bhanson:Linear%20Congruence:JavaScript
 *
 * @param  {string} str
 * @return {number}
 */
function linearCongruence(str) {
    // http://mathworld.wolfram.com/LinearCongruenceEquation.html

    // parse 'ax = b (mod m)'
    const [, a, b, m] = str
        .match(/([\d]+)x[ ]+=[ ]+([\d]+)[ ]+\(mod ([\d]+)\)/)
        .map(Number);

    const answers = [];

    for (let i = 0; i < m; i++) {
        if ((a * i) % m === b % m) {
            answers.push(i);
        }
    }

    return answers.length;
}

module.exports = linearCongruence;
