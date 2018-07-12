/**
 * Using the JavaScript language, have the function preorderTraversal(strArr)
 * take the array of strings stored in strArr, which will represent a binary
 * tree with integer values in a format similar to how a binary heap is
 * implemented with NULL nodes at any level represented with a #. Your goal is
 * to return the pre-order traversal of the tree with the elements separated by
 * a space. For example: if strArr is ["5", "2", "6", "1", "9", "#", "8", "#",
 * "#", "#", "#", "4", "#"] then this tree looks like the following tree:
 *
 * [Image of Example Tree](https://i.imgur.com/Lcy6mtO.png)
 *
 * For the input above, your program should return the string 5 2 1 9 6 8 4
 * because that is the pre-order traversal of the tree.
 * @param  {array} strArr
 * @return {string}
 */
function preorderTraversal(strArr) {
    // https://en.wikipedia.org/wiki/Binary_heap#Heap_implementation

    const preorderArr = preorder(strArr);

    return preorderArr.join(' ');
}

function preorder(strArr, index = 0) {
    const currentNode = strArr[index];

    if (index >= strArr.length || currentNode === '#') {
        return [];
    }

    const left = preorder(strArr, 2 * index + 1);
    const right = preorder(strArr, 2 * index + 2);

    const nodeAndChildren = [];
    nodeAndChildren.push(currentNode, ...left, ...right);

    return nodeAndChildren;
}

module.exports = preorderTraversal;
