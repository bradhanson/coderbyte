/**
 * Have the function longestWord(sen) take the sen parameter being passed and
 * return the largest word in the string. If there are two or more words that
 * are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.
 * @param  {string} sen
 * @return {string}
 */
function longestWord(sen) {
    let validCharacters =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let maxLength = 0;
    let longestWord = '';

    for (let i = 0, length = 0, word = ''; i < sen.length; i++) {
        let c = sen[i];
        if (validCharacters.includes(c)) {
            length++;
            word += c;
        } else {
            length = 0;
            word = '';
        }

        if (length > maxLength) {
            maxLength = length;
            longestWord = word;
        }
    }

    return longestWord;
}

module.exports = longestWord;
