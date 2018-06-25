/**
 * Have the function pentagonalNumber(num) read num which will be a positive
 * integer and determine how many dots exist in a pentagonal shape around a
 * center dot on the Nth iteration. For example, in the image below you can see
 * that on the first iteration there is only a single dot, on the second
 * iteration there are 6 dots, on the third there are 16 dots, and on the fourth
 * there are 31 dots.
 *
 * [Pentagonal Diagram](https://i.imgur.com/fYj3yvL.png)
 *
 * Your program should return the number of dots that exist in the whole
 * pentagon on the Nth iteration.
 *
 * @param  {number} num
 * @return {number}
 */
function pentagonalNumber(num) {
    let totalDots = 1;
    for (let i = 1; i <= num; i++) {
        totalDots += (i - 2) * 5 + 5;
    }
    return totalDots;
}

module.exports = pentagonalNumber;
