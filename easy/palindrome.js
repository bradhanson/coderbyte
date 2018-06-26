/**
 * Have the function palindrome(str) take the str parameter being passed and
 * return the string true if the parameter is a palindrome, (the string is the
 * same forward as it is backward) otherwise return the string false. For
 * example: "racecar" is also "racecar" backwards. Punctuation and numbers will
 * not be part of the string.
 * @param  {string} str
 * @return {string}
 */
function palindrome(str) {
    str = str.replace(/ /g, '');

    for (let i = 0, max = Math.floor(str.length / 2); i < max; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return 'false';
        }
    }
    return 'true';
}

module.exports = palindrome;
