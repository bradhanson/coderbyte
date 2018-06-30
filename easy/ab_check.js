/**
 * Have the function abCheck(str) take the str parameter being passed and return
 * the string true if the characters a and b are separated by exactly 3 places
 * anywhere in the string at least once (ie. "lane borrowed" would result in
 * true because there is exactly three characters between a and b). Otherwise
 * return the string false.
 *
 * https://www.coderbyte.com/results/bhanson:AB%20Check:JavaScript
 *
 * @param  {string} str
 * @return {string} 'true' or 'false'
 */
function abCheck(str) {
    if (str.length < 5) {
        return 'false';
    }

    for (let i = 0; i < str.length - 4; i++) {
        // look for a
        if (str[i] === 'a') {
            if (str[i + 4] === 'b') {
                return 'true';
            }
        }

        if (str[i] === 'b') {
            if (str[i + 4] === 'a') {
                return 'true';
            }
        }
    }

    return 'false';
}

module.exports = abCheck;
