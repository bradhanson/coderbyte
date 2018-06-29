/**
 * Have the function letterCountI(str) take the str parameter being passed and
 * return the first word with the greatest number of repeated letters. For
 * example: "Today, is the greatest day ever!" should return greatest because it
 * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
 * are no words with repeating letters return -1. Words will be separated by
 * spaces.
 *
 * https://www.coderbyte.com/results/bhanson:Letter%20Count%20I:JavaScript
 *
 * @param  {string} str
 * @return {string} or -1
 */
function letterCountI(str) {
    let words = str.split(' ');

    let bestCount = 0;
    let bestWord = '';

    for (let i = 0; i < words.length; i++) {
        let letterCount = [];
        let largestCount = 0;
        for (let j = 0; j < words[i].length; j++) {
            letterCount[words[i][j]] =
                letterCount[words[i][j]] === undefined
                    ? 1
                    : ++letterCount[words[i][j]];
            if (
                letterCount[words[i][j]] >= 2 &&
                letterCount[words[i][j]] > largestCount
            ) {
                largestCount = letterCount[words[i][j]];
            }
        }

        if (largestCount > bestCount) {
            bestCount = largestCount;
            bestWord = words[i];
        }
    }
    return bestWord === '' ? -1 : bestWord;
}

module.exports = letterCountI;
