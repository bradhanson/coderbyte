/**
 * Have the function weightedPath(strArr) take strArr which will be an array of
 * strings which models a non-looping weighted Graph. The structure of the array
 * will be as follows: The first element in the array will be the number of
 * nodes N (points) in the array as a string. The next N elements will be the
 * nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.).
 * Then after the Nth element, the rest of the elements in the array will be the
 * connections between all of the nodes along with their weights (integers)
 * separated by the pipe symbol (|). They will look like this: (A|B|3, B|C|12 ..
 * Brick Street|Main Street|14 .. etc.). Although, there may exist no
 * connections at all.
 *
 * An example of strArr may be:
 * ["4","A","B","C","D","A|B|1","B|D|9","B|C|3","C|D|4"]. Your program should
 * return the shortest path when the weights are added up from node to node from
 * the first Node to the last Node in the array separated by dashes. So in the
 * example above the output should be A-B-C-D. Here is another example with
 * strArr being
 * ["7","A","B","C","D","E","F","G","A|B|1","A|E|9","B|C|2","C|D|1","D|F|2","E|D|6","F|G|2"].
 * The output for this array should be A-B-C-D-F-G. There will only ever be one
 * shortest path for the array. If no path between the first and last node
 * exists, return -1. The array will at minimum have two nodes. Also, the
 * connection A-B for example, means that A can get to B and B can get to A. A
 * path may not go through any Node more than once.
 *
 * https://www.coderbyte.com/results/bhanson:Weighted%20Path:JavaScript
 *
 * @param  {array} strArr
 * @return {string} or -1 if no path exists
 */
function weightedPath(strArr) {
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
        let [start, end, weight] = path.split('|');
        weight = Number(weight);
        map.get(start).addEdge(map.get(end), weight);
        map.get(end).addEdge(map.get(start), weight); // bi-directional
    });

    // Per spec, start and end are first and last node as given respectively
    const start = nodes[0];
    const end = nodes[nodes.length - 1];

    let shortestPath = map.get(start).pathTo(end);

    if (shortestPath.length === 0) {
        return -1;
    }

    shortestPath = shortestPath.map(node => node.key);

    return shortestPath.join('-');
}

function Node(key) {
    this.key = key;
    this.edges = [];
}

Node.prototype.addEdge = function(node, weight) {
    this.edges.push(new Edge(node, weight));
};

function Edge(node, weight) {
    this.node = node;
    this.weight = weight;
}

// Returns shortest path as array or [] if no path available
// Guarantees shortest path by trying all possibilities
// TODO:  Refactor :)
Node.prototype.pathTo = function(endKey, visited = [], fromWeight = 0) {
    if (hasVisited(this.key)) {
        return [];
    }

    if (this.key === endKey) {
        return [
            {
                key: this.key,
                weight: fromWeight
            }
        ];
    }

    const copy = visited.slice();
    copy.push({
        key: this.key,
        weight: fromWeight
    });

    const childrenPaths = [];
    for (let i = 0; i < this.edges.length; i++) {
        const edge = this.edges[i];
        const children = edge.node.pathTo(endKey, copy, edge.weight);
        if (children.length > 0) {
            const selfAndChildren = [];
            selfAndChildren.push(
                { key: this.key, weight: fromWeight },
                ...children
            );
            childrenPaths.push(selfAndChildren);
        }
    }

    childrenPaths.sort((a, b) => {
        const aSum = a.reduce((sum, path) => (sum += path.weight), 0);
        const bSum = b.reduce((sum, path) => (sum += path.weight), 0);

        return aSum - bSum;
    });

    return childrenPaths.length > 0 ? childrenPaths[0] : [];

    function hasVisited(key) {
        for (let i = 0; i < visited.length; i++) {
            if (visited[i].key === key) {
                return true;
            }
        }
        return false;
    }
};

module.exports = weightedPath;
