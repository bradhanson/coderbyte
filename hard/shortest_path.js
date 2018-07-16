/**
 * Using the JavaScript language, have the function shortestPath(strArr) take
 * strArr which will be an array of strings which models a non-looping Graph.
 * The structure of the array will be as follows: The first element in the array
 * will be the number of nodes N (points) in the array as a string. The next N
 * elements will be the nodes which can be anything (A, B, C .. Brick Street,
 * Main Street .. etc.). Then after the Nth element, the rest of the elements in
 * the array will be the connections between all of the nodes. They will look
 * like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there
 * may exist no connections at all.
 *
 * An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"].
 * Your program should return the shortest path from the first Node to the last
 * Node in the array separated by dashes. So in the example above the output
 * should be A-B-D. Here is another example with strArr being
 * ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"].
 * The output for this array should be A-E-D-F-G. There will only ever be one
 * shortest path for the array. If no path between the first and last node
 * exists, return -1. The array will at minimum have two nodes. Also, the
 * connection A-B for example, means that A can get to B and B can get to A.
 *
 * https://www.coderbyte.com/results/bhanson:Shortest%20Path:JavaScript
 *
 * @param  {array} strArr
 * @return {string} or -1 for no path
 */
function shortestPath(strArr) {
    // Parse input data
    const numNodes = parseInt(strArr[0]);
    const nodes = strArr.slice(1, numNodes + 1);
    const paths = strArr.slice(numNodes + 1, strArr.length);

    // Hash table to store entry into all nodes so we can enter the graph anywhere
    const map = new Map();

    // Add empty nodes
    nodes.forEach(node => {
        map.set(node, new Node(node));
    });

    // Add paths
    paths.forEach(path => {
        const [start, end] = path.split('-');
        map.get(start).addEdge(map.get(end));
        map.get(end).addEdge(map.get(start)); // bi-directional
    });

    // Per spec, start and end are first and last node as given respectively
    const start = nodes[0];
    const end = nodes[nodes.length - 1];

    const shortestPath = map.get(start).pathTo(end);

    if (shortestPath.length === 0) {
        return -1;
    }

    return shortestPath.join('-');
}

function Node(key) {
    this.key = key;
    this.edges = [];
}

Node.prototype.addEdge = function(edge) {
    this.edges.push(edge);
};

// Returns shortest path as array or [] if no path available
// Guarantees shortest path by trying all possibilities
Node.prototype.pathTo = function(endKey, visited = []) {
    if (visited.includes(this.key)) {
        return [];
    }

    if (this.key === endKey) {
        return [this.key];
    }

    const childrenPaths = [];
    for (let i = 0; i < this.edges.length; i++) {
        const edge = this.edges[i];
        const copy = visited.slice();
        copy.push(this.key);
        const children = edge.pathTo(endKey, copy);
        if (children.length > 0) {
            const selfAndChildren = [];
            selfAndChildren.push(this.key, ...children);
            childrenPaths.push(selfAndChildren);
        }
    }
    childrenPaths.sort((a, b) => a.length - b.length);

    return childrenPaths.length > 0 ? childrenPaths[0] : [];
};

module.exports = shortestPath;
