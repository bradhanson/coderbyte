/**
 * Have the function meanMode(arr) take the array of numbers stored in arr and
 * return 1 if the mode equals the mean, 0 if they don't equal each other (ie.
 * [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
 * The array will not be empty, will only contain positive integers, and will
 * not contain more than one mode.
 *
 * https://www.coderbyte.com/results/bhanson:Mean%20Mode:JavaScript
 *
 * @param  {array} arr
 * @return {number}
 */
function meanMode(arr) {
    // Find mode
    let mostOccurances = 0;
    let mode = 0;
    for (let i = 0; i < arr.length; i++) {
        let marco = arr[i];
        for (let j = i + 1, count = 0; j < arr.length; j++) {
            if (marco === arr[j]) {
                // match!
                count++;
                if (count > mostOccurances) {
                    mostOccurances = count;
                    mode = arr[j];
                }
            }
        }
    }

    // Find mean
    let mean = 0;
    for (let i = 0; i < arr.length; i++) {
        mean += arr[i];
    }
    mean = Math.round(mean / arr.length);

    return mean === mode ? 1 : 0;
}

module.exports = meanMode;
