/**
 * Using the JavaScript language, have the function hamiltonianPath(strArr) take
 * strArr which will be an array of length three. The first part of the array
 * will be a list of vertices in a graph in the form (A,B,C,...), the second
 * part of the array will be the edges connecting the vertices in the form
 * (A-B,C-D,...) where each edge is bidirectional. The last part of the array
 * will be a set of vertices in the form (X,Y,Z,...) and your program will have
 * to determine whether or not the set of vertices given forms a Hamiltonian
 * path on the graph which means that every vertex in the graph is visited only
 * once in the order given.
 *
 * For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C,A,D,B)"] then
 * the vertices (C,A,D,B) in this order do in fact form a Hamiltonian path on
 * the graph so your program should return the string yes. If for example the
 * last part of the array was (D,A,B,C) then this doesn't form a Hamiltonian
 * path because once you get to B you can't get to C in the graph without
 * passing through the visited vertices again. Here your program should return
 * the vertex where the path had to terminate, in this case your program should
 * return B.
 *
 * The graph will have at least 2 vertices and all the vertices in the graph
 * will be connected.
 *
 * https://www.coderbyte.com/information/Hamiltonian%20Path
 *
 * @param  {array} strArr
 * @return {string}
 */
function hamiltonianPath(strArr) {
    // Parse input
    let [nodes, edges, path] = strArr.map(str =>
        str.substr(1, str.length - 2).split(',')
    );

    const graph = new Graph();

    // Add empty nodes
    nodes.forEach(key => {
        graph.addNode(key);
    });

    // Add edges
    edges.forEach(edge => {
        const [nodeA, nodeB] = edge.split('-');
        graph.node(nodeA).addEdge(nodeB);
        graph.node(nodeB).addEdge(nodeA);
    });

    // https://en.wikipedia.org/wiki/Hamiltonian_path

    const missingConnections = graph.getMissingPathConnections(path);

    if (missingConnections.length === 0) {
        return 'yes';
    }
    return missingConnections[0];
}

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(key) {
        this.nodes.set(key, new Node(key));
        return this.node(key);
    }

    node(key) {
        return this.nodes.get(key);
    }

    getMissingPathConnections(nodeKeyArr) {
        const missingConnections = [];
        for (let i = 1; i < nodeKeyArr.length; i++) {
            const nodeA = this.node(nodeKeyArr[i - 1]);
            const keyB = nodeKeyArr[i];
            if (!nodeA.hasEdge(keyB)) {
                missingConnections.push(nodeA.key);
            }
        }
        return missingConnections;
    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.edges = new Map();
    }

    addEdge(key, weight = 1) {
        this.edges.set(key, weight);
    }

    hasEdge(key) {
        return this.edges.has(key);
    }
}

module.exports = hamiltonianPath;
