/**
 * Using the JavaScript language, have the function farthestNodes(strArr) read
 * strArr which will be an array of hyphenated letters representing paths
 * between those two nodes. For example: ["a-b","b-c","b-d"] means that there is
 * a path from node a to b (and b to a), b to c, and b to d. Your program should
 * determine the longest path that exists in the graph and return the length of
 * that path. So for the example above, your program should return 2 because of
 * the paths a-b-c and d-b-c. The path a-b-c also means that there is a path
 * c-b-a. No cycles will exist in the graph and every node will be connected to
 * some other node in the graph.
 *
 * https://www.coderbyte.com/results/bhanson:Farthest%20Nodes:JavaScript
 *
 * @param  {array} strArr
 * @return {number}
 */
function farthestNodes(strArr) {
    const nodeKeys = new Set(strArr.join('-').split('-'));

    const map = new Map();

    // Initialize empty nodes
    nodeKeys.forEach(key => {
        map.set(key, new Node(key));
    });

    // Connect nodes
    strArr.forEach(connection => {
        const [nodeA, nodeB] = connection.split('-');
        map.get(nodeA).addEdge(map.get(nodeB));
        map.get(nodeB).addEdge(map.get(nodeA));
    });

    // Try each node as a start node
    let longestPath = 0;
    map.forEach(node => {
        const path = node.getFarthestPath();
        if (path.length > longestPath) {
            longestPath = path.length;
        }
    });

    return longestPath - 1;
}

function Node(key) {
    this.key = key;
    this.edges = [];
}

Node.prototype.addEdge = function(node) {
    this.edges.push(node);
};

Node.prototype.getFarthestPath = function(visited = []) {
    if (visited.includes(this.key)) {
        return visited;
    }

    visited = visited.slice();
    visited.push(this.key);

    const selfAndChildren = [];

    this.edges.forEach(edge => {
        const child = edge.getFarthestPath(visited);
        selfAndChildren.push(child);
    });

    if (selfAndChildren.length === 0) {
        return visited;
    }

    // Select longest of child paths to return
    selfAndChildren.sort((a, b) => b.length - a.length);
    return selfAndChildren[0];
};

module.exports = farthestNodes;
