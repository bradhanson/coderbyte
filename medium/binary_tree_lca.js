/**
 * Using the JavaScript language, have the function binaryTreeLCA(strArr) take
 * the array of strings stored in strArr, which will contain 3 elements: the
 * first element will be a binary tree with all unique values in a format
 * similar to how a binary heap is implemented with NULL nodes at any level
 * represented with a #, the second and third elements will be two different
 * values, and your goal is to find the lowest common ancestor of these two
 * values. For example: if strArr is ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #,
 * #, #]", "6", "4"] then this tree looks like the following:
 *
 * [Image of Example Tree](https://i.imgur.com/YrPRxyx.png)
 *
 * For the input above, your program should return 5 because that is the value
 * of the node that is the LCA of the two nodes with values 6 and 4. You can
 * assume the two nodes you are searching for in the tree will exist somewhere
 * in the tree.
 *
 * https://www.coderbyte.com/results/bhanson:Binary%20Tree%20LCA:JavaScript
 *
 * @param  {array} strArr
 * @return {number}
 */
function binaryTreeLca(strArr) {
    // Coderbyte.com calls this "Binary Tree LCA", but really this should be
    // called "Binary Max Heap LCA"
    // https://en.wikipedia.org/wiki/Binary_heap

    const heapNodes = strArr.shift().match(/[\d#]+/g);
    const searchNodes = strArr.map(Number);

    const nodeAPath = path(heapNodes, searchNodes[0]);
    const nodeBPath = path(heapNodes, searchNodes[1]);

    // Find LCA
    for (let i = 0; i < nodeAPath.length; i++) {
        if (nodeBPath.includes(nodeAPath[i]) && nodeAPath[i] !== '#') {
            return Number(nodeAPath[i]);
        }
    }
    return -1;
}

// returns array of path to key, or empty array if doesn't exist
// https://en.wikipedia.org/wiki/Binary_heap#Heap_implementation
function path(arr, key) {
    const pathArr = [];
    let keyIndex = arr.indexOf(String(key));
    if (keyIndex === -1) {
        return [];
    }

    while (keyIndex !== 0) {
        pathArr.push(arr[keyIndex]);
        const parentIndex = Math.floor((keyIndex - 1) / 2);
        keyIndex = parentIndex;
    }
    pathArr.push(arr[keyIndex]); // keyIndex === 0
    return pathArr;
}

module.exports = binaryTreeLca;
