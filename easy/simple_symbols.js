/**
 * Have the function simpleSymbols(str) take the str parameter being passed and
 * determine if it is an acceptable sequence by either returning the string true
 * or false. The str parameter will be composed of + and = symbols with several
 * letters between them (ie. ++d+===+c++==a) and for the string to be true each
 * letter must be surrounded by a + symbol. So the string to the left would be
 * false. The string will not be empty and will have at least one letter.
 *
 * https://www.coderbyte.com/results/bhanson:Simple%20Symbols:JavaScript
 *
 * @param  {string} str
 * @return {string} 'true' or 'false'
 */
function simpleSymbols(str) {
    if (str === '') {
        return 'false';
    }

    let result = str.split('').every(letterEval);

    return result ? 'true' : 'false';

    function letterEval(letter, index) {
        let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (letters.includes(letter)) {
            // Check for first or last character
            if (index === 0 || index === str.length - 1) {
                // Letter is first or last char, fail case
                return false;
            }

            if (str[index - 1] === '+' && str[index + 1] === '+') {
                return true;
            }
        } else {
            // Ignore non letters
            return true;
        }
    }
}

module.exports = simpleSymbols;
