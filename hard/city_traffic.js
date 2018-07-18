/**
 * Using the JavaScript language, have the function cityTraffic(strArr) read
 * strArr which will be a representation of an undirected graph in a form
 * similar to an adjacency list. Each element in the input will contain an
 * integer which will represent the population for that city, and then that will
 * be followed by a comma separated list of its neighboring cities and their
 * populations (these will be separated by a colon). For example: strArr may be
 *
 * ["1:[5]", "4:[5]", "3:[5]", "5:[1,4,3,2]", "2:[5,15,7]", "7:[2,8]",
 * "8:[7,38]", "15:[2]", "38:[8]"]. This graph then looks like the following
 * picture:
 *
 * [Image of cities graph](https://i.imgur.com/5xbQDUY.jpg)
 *
 * Each node represents the population of that city and each edge represents a
 * road to that city. Your goal is to determine the maximum traffic that would
 * occur via a single road if everyone decided to go to that city. For example:
 * if every single person in all the cities decided to go to city 7, then via
 * the upper road the number of people coming in would be (8 + 38) = 46. If all
 * the cities beneath city 7 decided to go to it via the lower road, the number
 * of people coming in would be (2 + 15 + 1 + 3 + 4 + 5) = 30. So the maximum
 * traffic coming into the city 7 would be 46 because the maximum value of (30,
 * 46) = 46.
 *
 * Your program should determine the maximum traffic for every single city and
 * return the answers in a comma separated string in the format:
 * city:max_traffic,city:max_traffic,... The cities should be outputted in
 * sorted order by the city number. For the above example, the output would
 * therefore be: 1:82,2:53,3:80,4:79,5:70,7:46,8:38,15:68,38:45. The cities will
 * all be unique positive integers and there will not be any cycles in the
 * graph. There will always be at least 2 cities in the graph.
 *
 * https://www.coderbyte.com/results/bhanson:City%20Traffic:JavaScript
 *
 * @param  {array} strArr
 * @return {string}
 */
function cityTraffic(strArr) {
    'use strict';

    const graph = new Cities();

    // Populate graph with nodes and connections
    const reverseConnections = [];
    strArr.forEach(city => {
        let [namePopulation, edges] = city.split(':');
        namePopulation = Number(namePopulation);
        edges = JSON.parse(edges);

        const cityNode = graph.addNode(namePopulation);

        edges.forEach(edge => {
            cityNode.addEdge(edge);
            // Cannot add bidirectional connections yet because not all nodes
            // are created at this time
            reverseConnections.push([edge, namePopulation]);
        });
    });

    // Add bidirectional connections
    reverseConnections.forEach(connection => {
        const [nodeA, nodeB] = connection;
        graph.node(nodeA).addEdge(nodeB);
    });

    const trafficData = [];

    // Get max traffic of each city
    for (const city of graph) {
        const [namePopulation, cityNode] = city;
        const maxTraffic = graph.maxTrafficFromOneRoad(namePopulation);
        trafficData.push({ namePopulation, maxTraffic });
    }

    trafficData.sort((a, b) => {
        return a.namePopulation - b.namePopulation;
    });

    const trafficDataString = trafficData
        .map(city => `${city.namePopulation}:${city.maxTraffic}`)
        .join(',');

    return trafficDataString;
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

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    *[Symbol.iterator]() {
        const nodeItr = this.nodes[Symbol.iterator]();
        for (const node of nodeItr) {
            yield node;
        }
    }

    addNode(key) {
        this.nodes.set(key, new Node(key));
        return this.node(key);
    }

    node(key) {
        return this.nodes.get(key);
    }
}

class Cities extends Graph {
    constructor() {
        super();
    }

    maxTrafficFromOneRoad(key) {
        const city = this.node(key);

        let edgeTraffic = [];
        city.edges.forEach((_, edgeKey) => {
            edgeTraffic.push(this.sumTrafficFromAllRoads(edgeKey, [key]));
        });

        if (edgeTraffic.length === 0) {
            return 0;
        }

        return Math.max(...edgeTraffic);
    }

    sumTrafficFromAllRoads(key, visited = []) {
        const city = this.node(key);

        visited = visited.slice();
        visited.push(key);

        let edgeTraffic = [];
        city.edges.forEach((weight, edgeKey) => {
            if (!visited.includes(edgeKey)) {
                edgeTraffic.push(this.sumTrafficFromAllRoads(edgeKey, visited));
            }
        });

        if (edgeTraffic.length === 0) {
            return key;
        }

        const edgeSum = edgeTraffic.reduce((sum, val) => (sum += val), 0);

        return edgeSum + key;
    }
}

module.exports = cityTraffic;
