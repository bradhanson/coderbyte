/**
 * Using the JavaScript language, have the function binarySearchTreeLca(strArr)
 * take the array of strings stored in strArr, which will contain 3 elements:
 * the first element will be a binary search tree with all unique values in a
 * preorder traversal array, the second and third elements will be two different
 * values, and your goal is to find the lowest common ancestor of these two
 * values. For example: if strArr is ["[10, 5, 1, 7, 40, 50]", "1", "7"] then
 * this tree looks like the following:
 *
 * [Image of Binary Search Tree](https://i.imgur.com/e4SY86q.png)
 *
 * For the input above, your program should return 5 because that is the value
 * of the node that is the LCA of the two nodes with values 1 and 7. You can
 * assume the two nodes you are searching for in the tree will exist somewhere
 * in the tree.
 *
 * https://www.coderbyte.com/results/bhanson:Binary%20Search%20Tree%20LCA:JavaScript
 *
 * @param  {array} strArr
 * @return {number}
 */
function binarySearchTreeLca(strArr) {
    const preorderNodes = JSON.parse(strArr.shift());
    const searchNodes = strArr.map(Number);

    const tree = new Tree();

    preorderNodes.forEach(number => {
        tree.insert(number);
    });

    const path0 = tree.path(searchNodes[0]);
    const path1 = tree.path(searchNodes[1]);

    for (let i = path0.length - 1; i >= 0; i--) {
        if (path1.includes(path0[i])) {
            return path0[i];
        }
    }

    return null;
}

function Tree() {
    this.root = null;
}

Tree.Node = function(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
};

Tree.prototype.insert = function(key, nodePtr = null) {
    if (!this.root) {
        this.root = new Tree.Node(key);
        return;
    }

    if (!nodePtr) {
        this.insert(key, this.root);
        return;
    }

    if (key < nodePtr.key) {
        if (nodePtr.left === null) {
            nodePtr.left = new Tree.Node(key);
        } else {
            this.insert(key, nodePtr.left);
        }
    } else {
        if (nodePtr.right === null) {
            nodePtr.right = new Tree.Node(key);
        } else {
            this.insert(key, nodePtr.right);
        }
    }
};

Tree.prototype.keyExists = function(key, nodePtr = null) {
    if (!this.root) {
        return false;
    }

    if (!nodePtr) {
        return this.keyExists(key, this.root);
    }

    if (key === nodePtr.key) {
        return true;
    }

    if (key < nodePtr.key) {
        if (nodePtr.left === null) {
            return false;
        } else {
            return this.keyExists(key, nodePtr.left);
        }
    } else {
        if (nodePtr.right === null) {
            return false;
        } else {
            return this.keyExists(key, nodePtr.right);
        }
    }
};

// Returns array showing path to node, or [] if node does not exist
Tree.prototype.path = function(key, nodePtr = null, history = []) {
    if (!this.root) {
        return [];
    }

    if (!nodePtr) {
        return this.path(key, this.root, history);
    }

    if (key === nodePtr.key) {
        history.push(key);
        return history;
    }

    if (key < nodePtr.key) {
        if (nodePtr.left === null) {
            return [];
        } else {
            history.push(nodePtr.key);
            return this.path(key, nodePtr.left, history);
        }
    } else {
        if (nodePtr.right === null) {
            return [];
        } else {
            history.push(nodePtr.key);
            return this.path(key, nodePtr.right, history);
        }
    }
};

module.exports = binarySearchTreeLca;
