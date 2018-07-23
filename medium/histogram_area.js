/**
 * Using the JavaScript language, have the function histogramArea(arr) read the
 * array of non-negative integers stored in arr which will represent the heights
 * of bars on a graph (where each bar width is 1), and determine the largest
 * area underneath the entire bar graph. For example: if arr is [2, 1, 3, 4, 1]
 * then this looks like the following bar graph:
 *
 * [Image of Example Histogram](https://i.imgur.com/GyUx5Gh.jpg)
 *
 * You can see in the above bar graph that the largest area underneath the graph
 * is covered by the x's. The area of that space is equal to 6 because the
 * entire width is 2 and the maximum height is 3, therefore 2 * 3 = 6. Your
 * program should return 6. The array will always contain at least 1 element.
 *
 * https://www.coderbyte.com/results/bhanson:Histogram%20Area:JavaScript
 *
 * @param  {array} arr
 * @return {number}
 */
function histogramArea(arr) {
    const histogram = arr;

    // 1s must be adjacent with no 0s in between
    const comboFilter = combo => /^[0]*[1]+[0]*$/.test(combo);

    const combos = ComboGenerator.generate(histogram.length, comboFilter);

    let maxArea = 0;

    for (const combo of combos) {
        const area = histogramAreaOfCombo(histogram, combo);
        if (area > maxArea) {
            maxArea = area;
        }
    }

    return maxArea;
}

class ComboGenerator {
    /**
     * Function is a predicate to test each combination generated.  Return true
     * to keep the element, false otherwise.
     * @callback filterCallback
     * @param {string} combo String represented.  '0001', '0010', '0011', etc.
     */

    /**
     * Returns generator of combinations as strings, '1' is on and '0' is off.
     *
     * `maxLength` is the number of binary digits to generate.  Examples:
     *
     * 4: 0000 ... 1111
     * 5: 00000 ... 11111
     * 6: 000000 ... 111111
     * @param  {number} maxLength
     * @param  {filterCallback} [filterCallback = () => true]
     * @return {Generator}
     */
    static *generate(maxLength, filterCallback = () => true) {
        const max = Math.pow(2, maxLength);
        for (let i = 0; i < max; i++) {
            let combo = i.toString(2);
            // Pad left
            while (combo.length < maxLength) {
                combo = '0' + combo;
            }

            if (filterCallback(combo)) {
                yield combo;
            }
        }
    }
}

function histogramAreaOfCombo(histogram, combo) {
    const hist = histogram.filter((element, index) => combo[index] === '1');
    const maxHeight = Math.min(...hist);
    return maxHeight * hist.length;
}

module.exports = histogramArea;
