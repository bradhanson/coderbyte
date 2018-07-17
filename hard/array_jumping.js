/**
 * Using the JavaScript language, have the function arrayJumping(arr) take the
 * array of numbers stored in arr and first determine the largest element in the
 * array, and then determine whether or not you can reach that same element
 * within the array by moving left or right continuously according to whatever
 * integer is in the current spot. If you can reach the same spot within the
 * array, then your program should output the least amount of jumps it took. For
 * example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is
 * and if you jump 6 spaces to the right while looping around the array you end
 * up at the last element where the 1 is. Then from here you jump 1 space to the
 * left and you're back where you started, so your program should output 2. If
 * it's impossible to end up back at the largest element in the array your
 * program should output -1. The largest element in the array will never equal
 * the number of elements in the array. The largest element will be unique.
 *
 * https://www.coderbyte.com/results/bhanson:Array%20Jumping:JavaScript
 *
 * @param  {array} arr
 * @return {number}
 */
function arrayJumping(arr) {
    const max = Math.max(...arr);
    const startIndex = arr.indexOf(max);

    // Iterative "breadth-first search"
    // `queue` stores an array of arrays.  The inner arrays represent paths of
    // indexes.  They all start with the index of the largest number and each
    // jump is appended and the entire new structure is stored in a new queue.

    let queue = [[startIndex]];

    while (queue.length !== 0) {
        const nextQueue = [];

        for (let i = 0; i < queue.length; i++) {
            const indexList = queue[i];
            const lastIndex = indexList[indexList.length - 1];

            const left =
                (((lastIndex - arr[lastIndex]) % arr.length) + arr.length) %
                arr.length;
            const right = (lastIndex + arr[lastIndex]) % arr.length;

            if (left === startIndex || right === startIndex) {
                // Success!
                return indexList.length;
            }

            if (!indexList.includes(left)) {
                const leftArr = indexList.slice();
                leftArr.push(left);
                nextQueue.push(leftArr);
            }

            if (!indexList.includes(right)) {
                const rightArr = indexList.slice();
                rightArr.push(right);
                nextQueue.push(rightArr);
            }
        }
        queue = nextQueue;
    }

    // No path possible
    return -1;
}

module.exports = arrayJumping;
