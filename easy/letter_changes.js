/**
 * Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.
 * @param  {string} str
 * @return {string}
 */
function letterChanges(str) {
    let validCharacters =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let newString = '';

    for (let i = 0; i < str.length; i++) {
        if (validCharacters.includes(str[i])) {
            let char = str.charCodeAt(i);
            newString +=
                str[i] === 'z' || str[i] === 'Z'
                    ? String.fromCharCode(char - 25)
                    : String.fromCharCode(char + 1);
        } else {
            newString += str[i];
        }
    }

    newString = capitalizeVowels(newString);

    return newString;
}

/**
 * Capitalizes the vowels in a string and returns a new string
 * @param  {string} str
 * @return {string}
 */
function capitalizeVowels(str) {
    const VOWELS = 'aeiou';

    const newString = str
        .split('')
        .map(char => (VOWELS.includes(char) ? char.toUpperCase() : char))
        .join('');

    return newString;
}

module.exports = letterChanges;
