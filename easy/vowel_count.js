/**
 * Have the function vowelCount(str) take the str string parameter being passed
 * and return the number of vowels the string contains (ie. "All cows eat grass
 * and moo" would return 8). Do not count y as a vowel for this challenge.
 * @param  {string} str
 * @return {number}
 */
function vowelCount(str) {
    const vowels = 'AEIOUaeiou';

    const vowelCount = str.split('').filter(char => {
        return vowels.includes(char);
    }).length;

    return vowelCount;
}

module.exports = vowelCount;
