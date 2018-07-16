/**
 * Using the JavaScript language, have the function maxHeapChecker(arr) take arr
 * which represents a heap data structure and determine whether or not it is a
 * max heap. A max heap has the property that all nodes in the heap are either
 * greater than or equal to each of its children. For example: if arr is
 * [100,19,36,17] then this is a max heap and your program should return the
 * string max. If the input is not a max heap then your program should return a
 * list of nodes in string format, in the order that they appear in the tree,
 * that currently do not satisfy the max heap property because the child nodes
 * are larger than their parent. For example: if arr is [10,19,52,13,16] then
 * your program should return 19,52.
 *
 * Another example: if arr is [10,19,52,104,14] then your program should return
 * 19,52,104
 *
 * https://www.coderbyte.com/results/bhanson:Max%20Heap%20Checker:JavaScript
 *
 * @param  {array} arr
 * @return {string}
 */
function maxHeapChecker(arr) {
    // https://en.wikipedia.org/wiki/Binary_heap#Heap_implementation

    // Iterative solution: breadth-first search

    const invalidNodes = [];

    // Initialize to root, each successive queue will have the next level depth of indexes
    let queue = [0];

    arr.forEach(_ => {
        const nextQueue = [];

        queue.forEach(nodeIndex => {
            const leftIndex = 2 * nodeIndex + 1;
            const rightIndex = 2 * nodeIndex + 2;

            if (leftIndex < arr.length) {
                if (arr[leftIndex] > arr[nodeIndex]) {
                    invalidNodes.push({
                        index: leftIndex,
                        value: arr[leftIndex]
                    });
                }
                nextQueue.push(leftIndex);
            }

            if (rightIndex < arr.length) {
                if (arr[rightIndex] > arr[nodeIndex]) {
                    invalidNodes.push({
                        index: rightIndex,
                        value: arr[rightIndex]
                    });
                }
                nextQueue.push(rightIndex);
            }
        });

        queue = nextQueue;
    });

    if (invalidNodes.length === 0) {
        return 'max';
    }

    return invalidNodes.map(node => node.value).join(',');
}

module.exports = maxHeapChecker;
