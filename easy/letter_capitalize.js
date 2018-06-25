/**
 * Have the function letterCapitalize(str) take the str parameter being passed
 * and capitalize the first letter of each word. Words will be separated by only
 * one space.
 * @param  {string} str
 * @return {string}
 */
function letterCapitalize(str) {
    let newString = '';
    for (let i = 0, newWord = true; i < str.length; i++) {
        if (newWord) {
            newString += str[i].toUpperCase();
        } else {
            newString += str[i];
        }

        newWord = str[i] === ' ' ? true : false;
    }

    return newString;
}

module.exports = letterCapitalize;
