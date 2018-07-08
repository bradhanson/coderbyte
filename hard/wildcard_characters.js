/**
 * Using the JavaScript language, have the function wildcardCharacters(str) read
 * str which will contain two strings separated by a space. The first string
 * will consist of the following sets of characters: +, *, and {N} which is
 * optional. The plus (+) character represents a single alphabetic character,
 * the asterisk (*) represents a sequence of the same character of length 3
 * unless it is followed by {N} which represents how many characters should
 * appear in the sequence where N will be at least 1. Your goal is to determine
 * if the second string exactly matches the pattern of the first string in the
 * input.
 *
 * For example: if str is "++*{5} gheeeee" then the second string in this case
 * does match the pattern, so your program should return the string true. If the
 * second string does not match the pattern your program should return the
 * string false.
 *
 * https://coderbyte.com/results/bhanson:Wildcard%20Characters:JavaScript
 *
 * @param  {string} str
 * @return {string} 'true' or 'false'
 */
function wildcardCharacters(str) {
    // Separate inputs
    const pair = str.split(' ');
    const patternTokens = pair[0];
    const matchString = pair[1];

    // Step 1:  Build a regular expression from the given pattern
    let matchRegex = '^';

    for (let i = 0, n = 1; i < patternTokens.length; i++) {
        switch (patternTokens[i]) {
            case '+':
                matchRegex += '[a-z]';
                break;
            case '*':
                let repeat = 0;
                if (tokenHasLengthParameter(i)) {
                    // Custom length
                    repeat = Number(str[i + 2]) - 1;
                    i = i + 3;
                } else {
                    // Default length 3 (one letter plus two repeats)
                    repeat = 2;
                }

                matchRegex += '([a-z])\\' + n++ + '{' + repeat + '}';
                break;
            default:
                break;
        }
    }
    matchRegex += '$';

    // Step 2:  Apply regex to matchString and return results
    matchRegex = new RegExp(matchRegex, 'i');
    return String(matchRegex.test(matchString));

    /* Helpers */

    function tokenHasLengthParameter(index) {
        if (index + 1 < patternTokens.length && str[index + 1] === '{') {
            return true;
        }
        return false;
    }
}

module.exports = wildcardCharacters;
