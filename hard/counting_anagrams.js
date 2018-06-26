/**
 * Have the function countingAnagrams(str) take the str parameter and determine
 * how many anagrams exist in the string. An anagram is a new word that is
 * produced from rearranging the characters in a different word, for example:
 * cars and arcs are anagrams. Your program should determine how many anagrams
 * exist in a given string and return the total number. For example: if str is
 * "cars are very cool so are arcs and my os" then your program should return 2
 * because "cars" and "arcs" form 1 anagram and "so" and "os" form a 2nd
 * anagram. The word "are" occurs twice in the string but it isn't an anagram
 * because it is the same word just repeated. The string will contain only
 * spaces and lowercase letters, no punctuation, numbers, or uppercase letters.
 *
 * https://www.coderbyte.com/results/bhanson:Counting%20Anagrams:JavaScript
 *
 * @param  {string} str
 * @return {number}
 */
function countingAnagrams(str) {
    let words = str.split(' ');

    let uniqueWords = new Set(words);

    let signatures = {};

    uniqueWords.forEach(word => {
        let key = word
            .split('')
            .sort()
            .join('');
        if (signatures[key] === undefined) {
            signatures[key] = 1;
        } else {
            signatures[key]++;
        }
    });

    let anagrams = Object.values(signatures).reduce(
        (sum, val) => sum + (val - 1),
        0
    );

    return anagrams;
}

module.exports = countingAnagrams;
