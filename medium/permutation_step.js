/**
 * Have the function permutationStep(num) take the num parameter being passed
 * and return the next number greater than num using the same digits. For
 * example: if num is 123 return 132, if it's 12453 return 12534. If a number
 * has no greater permutations, return -1 (ie. 999).
 *
 * https://www.coderbyte.com/results/bhanson:Permutation%20Step:JavaScript
 *
 * @param  {number} num
 * @return {number}
 */
function permutationStep(num) {
    const permutations = Array.from(
        new Set( // use Set to filter for unique values
            permute(num.toString().split(''))
                .map(number => number.join(''))
                .map(Number)
        )
    );

    permutations.sort((a, b) => a - b);

    const largerPermutations = permutations.filter(
        permutation => permutation > num
    );

    if (largerPermutations.length > 0) {
        return largerPermutations[0];
    }
    return -1;
}

// https://en.wikipedia.org/wiki/Heap's_algorithm
// Iterative
function permute(arr) {
    let count = Array(arr.length).fill(0);

    const results = [arr.slice()];

    let i = 0;
    while (i < arr.length) {
        if (count[i] < i) {
            if (i % 2 === 0) {
                const temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
            } else {
                const temp = arr[count[i]];
                arr[count[i]] = arr[i];
                arr[i] = temp;
            }
            results.push(arr.slice());
            count[i]++;
            i = 0;
        } else {
            count[i] = 0;
            i++;
        }
    }
    return results;
}

module.exports = permutationStep;
