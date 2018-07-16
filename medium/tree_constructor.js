/**
 * Using the JavaScript language, have the function TreeConstructor(strArr) take
 * the array of strings stored in strArr, which will contain pairs of integers
 * in the following format: (i1,i2), where i1 represents a child node in a tree
 * and the second integer i2 signifies that it is the parent of i1. For example:
 * if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:
 *
 * [Image of Example Tree](https://i.imgur.com/NMRdSO1.png)
 *
 * which you can see forms a proper binary tree. Your program should, in this
 * case, return the string true because a valid binary tree can be formed. If a
 * proper binary tree cannot be formed with the integer pairs, then return the
 * string false. All of the integers within the tree will be unique, which means
 * there can only be one node in the tree with the given integer value.
 *
 * https://www.coderbyte.com/results/bhanson:Tree%20Constructor:JavaScript
 *
 * @param  {array} strArr
 * @return {string} 'true' or 'false'
 */
function treeConstructor(strArr) {
    // Convert ['(1,2)','(2,4)','(5,7)','(7,2)','(9,5)']
    // format to [[1,2],[2,4],[5,7],[7,2],[9,5]]
    const pairs = strArr.map(str => str.match(/[\d]+/g).map(Number));

    const nodesWithNoParents = [];
    for (let i = 0; i < pairs.length; i++) {
        if (numChildren(pairs, pairs[i][0]) > 2) {
            return 'false';
        }
        if (numParents(pairs, pairs[i][1]) === 0) {
            nodesWithNoParents.push(pairs[i][1]);
        }
    }

    const uniqueNodesWithNoParents = new Set(nodesWithNoParents);

    if (uniqueNodesWithNoParents.size !== 1) {
        return 'false';
    }
    return 'true';

    function numChildren(pairs, number) {
        let count = 0;
        pairs.forEach(pair => {
            if (pair[1] === number) {
                count++;
            }
        });
        return count;
    }

    function numParents(pairs, number) {
        let count = 0;
        pairs.forEach(pair => {
            if (pair[0] === number) {
                count++;
            }
        });
        return count;
    }
}

module.exports = treeConstructor;
