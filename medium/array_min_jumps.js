/**
 * Using the JavaScript language, have the function arrayMinJumps(arr) take the
 * array of integers stored in arr, where each integer represents the maximum
 * number of steps that can be made from that position, and determine the least
 * amount of jumps that can be made to reach the end of the array. For example:
 * if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then your program should output the
 * number 3 because you can reach the end of the array from the beginning via
 * the following steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END. Both of these
 * combinations produce a series of 3 steps. And as you can see, you don't
 * always have to take the maximum number of jumps at a specific position, you
 * can take less jumps even though the number is higher.
 *
 * If it is not possible to reach the end of the array, return -1.
 *
 * https://www.coderbyte.com/results/bhanson:Array%20Min%20Jumps:JavaScript
 *
 * @param  {array} arr of integers
 * @return {number}
 */
function arrayMinJumps(arr) {
    // Brute force

    // Generate combos
    let combos = [];
    for (let max = Math.pow(2, arr.length), i = max / 2; i < max; i++) {
        let combo = i.toString(2);
        combos.push(combo);
    }

    // Find combos that can reach the end
    let goodCombos = [];
    combos.forEach(combo => {
        let goodCombo = true;

        for (let i = 0, last = 0, skips = 0; i < combo.length; i++) {
            if (combo[i] === '1') {
                if (i - last > skips) {
                    // fail
                    goodCombo = false;
                    break;
                }

                skips = arr[i];
                last = i;
            }
        }

        // Must be able to get to the end
        if (combo[combo.length - 1] !== '1') {
            goodCombo = false;
        }

        if (goodCombo) {
            goodCombos.push(combo);
        }
    });

    // Replace combos with number of jumps to reach the end,
    // and sort combos by number of jumps ascending
    const numJumps = goodCombos
        .map(combo => {
            return combo
                .split('')
                .map(Number)
                .reduce((sum, value) => (sum += value), -1);
        })
        .sort((a, b) => a - b);

    if (numJumps.length === 0) {
        return -1;
    }

    return numJumps[0];
}

module.exports = arrayMinJumps;
