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
    let newString;
    newString = caesarCipher(str, 1);
    newString = capitalizeVowels(newString);

    return newString;
}

/*
 * Helper functions below
 */

/**
 * Returns a new string with a Caesar cipher applied
 * https://en.wikipedia.org/wiki/Caesar_cipher
 * @param  {string} str
 * @param  {number} key
 * @return {string}
 */
function caesarCipher(str, key) {
    const newString = str
        .split('')
        .map(char => (isAlpha(char) ? shiftAlphaChar(char, key) : char))
        .join('');

    /**
     * Shifts a character by a delta value
     * @param  {string} char  Assumed to be an alphabetic character
     * @param  {number} delta
     * @return {string}
     */
    function shiftAlphaChar(char, delta) {
        const charCode = char.charCodeAt(0);

        const alphabetStart = isUpperCase(char)
            ? 'A'.charCodeAt(0)
            : 'a'.charCodeAt(0);

        const distanceFromA = charCode - alphabetStart;
        const newDistanceFromA = (distanceFromA + delta) % 26;
        const newCharCode = newDistanceFromA + alphabetStart;

        return String.fromCharCode(newCharCode);
    }

    return newString;
}

/**
 * Checks if a string only includes alphabetic characters
 * @param  {string}  str
 * @return {Boolean}
 */
function isAlpha(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.split('').every(char => alphabet.includes(char));
}

/**
 * Checks if a string does not contain any lowercase characters
 * @param  {string}  str
 * @return {Boolean}
 */
function isUpperCase(str) {
    return str === str.toUpperCase();
}

/**
 * Checks if a string does not contain any uppercase characters
 * @param  {string}  str
 * @return {Boolean}
 */
function isLowerCase(str) {
    return str === str.toLowerCase();
}

/**
 * Capitalizes the vowels in a string and returns a new string
 * @param  {string} str
 * @return {string}
 */
function capitalizeVowels(str) {
    const vowels = 'aeiou';

    const newString = str
        .split('')
        .map(char => (vowels.includes(char) ? char.toUpperCase() : char))
        .join('');

    return newString;
}

module.exports = {
    letterChanges,
    caesarCipher,
    isAlpha,
    isUpperCase,
    isLowerCase,
    capitalizeVowels
};
