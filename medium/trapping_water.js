/**
 * Using the JavaScript language, have the function TrappingWater(arr) take the
 * array of non-negative integers stored in arr, and determine the largest
 * amount of water that can be trapped. The numbers in the array represent the
 * height of a building (where the width of each building is 1) and if you
 * imagine it raining, water will be trapped between the two tallest buildings.
 * For example: if arr is [3, 0, 0, 2, 0, 4] then this array of building heights
 * looks like the following picture if we draw it out:
 *
 * [Image of buildings](https://i.imgur.com/PD6xjHs.png)
 *
 * Now if you imagine it rains and water gets trapped in this picture, then
 * it'll look like the following (the x's represent water):
 *
 * [Image of buildings with water](https://i.imgur.com/IL49eNq.png)
 *
 * This is the most water that can be trapped in this picture, and if you
 * calculate the area you get 10, so your program should return 10.
 *
 * https://www.coderbyte.com/results/bhanson:Trapping%20Water:JavaScript
 *
 * @param  {array} arr
 * @return {number}
 */
function trappingWater(arr) {
    let maxArea = 0;

    for (let a = 0; a < arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            const maxHeight = Math.min(arr[a], arr[b]);

            // Area, ignoring in-between buildings
            let area = (b - a - 1) * maxHeight;

            // Now subtract smaller buildings in between
            for (let i = a + 1; i < b; i++) {
                const missingWater = arr[i] > maxHeight ? maxHeight : arr[i];
                area -= missingWater;
            }

            if (area > maxArea) {
                maxArea = area;
            }
        }
    }

    return maxArea;
}

module.exports = trappingWater;
