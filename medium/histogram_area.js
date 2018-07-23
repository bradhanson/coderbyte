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

    // Generate combos
    const combos = [];
    for (let max = Math.pow(2, histogram.length), i = 0; i < max; i++) {
        let combo = i.toString(2);
        // Pad left
        while (combo.length < histogram.length) {
            combo = '0' + combo;
        }

        // 1s must be adjacent with no 0s in between
        const goodComboRegEx = /^[0]*[1]+[0]*$/;
        const goodCombo = goodComboRegEx.test(combo);
        if (goodCombo) {
            combos.push(combo);
        }
    }

    let maxArea = 0;
    combos.forEach(combo => {
        const area = histogramAreaOfCombo(histogram, combo);
        if (area > maxArea) {
            maxArea = area;
        }
    });

    return maxArea;
}

function histogramAreaOfCombo(histogram, combo) {
    const hist = histogram.filter((element, index) => combo[index] === '1');
    const maxHeight = Math.min(...hist);
    return maxHeight * hist.length;
}

module.exports = histogramArea;
