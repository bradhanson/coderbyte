/**
 * Using the JavaScript language, have the function vertexCovering(strArr) take
 * strArr which will be an array of length three. The first part of the array
 * will be a list of vertices in a graph in the form (A,B,C,...), the second
 * part of the array will be the edges connecting the vertices in the form
 * (A-B,C-D,...) where each edge is bidirectional. The last part of the array
 * will be a set of vertices in the form (X,Y,Z,...) and your program will have
 * to determine whether or not the set of vertices given covers every edge in
 * the graph such that every edge is incident to at least one vertex in the set.
 *
 * For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(A,B)"] then the
 * vertices (A,B) are in fact one of the endpoints of every edge in the graph,
 * so every edge has been accounted for. Therefore your program should return
 * the string yes. But, if for example the last part of the array was (C,B) then
 * these vertices don't cover all the edges because the edge connecting A-D is
 * left out. If this is the case your program should return the edges given in
 * the second part of the array that are left out in the same order they were
 * listed, so for this example your program should return (A-D).
 *
 * The graph will have at least 2 vertices and all the vertices in the graph
 * will be connected. The third part of the array listing the vertices may be
 * empty, where it would only contain the parenthesis with no values within it:
 * "()"
 *
 * https://www.coderbyte.com/results/bhanson:Vertex%20Covering:JavaScript
 *
 * @param  {array} strArr
 * @return {string}
 */
function vertexCovering(strArr) {
    let [, edges, vertices] = strArr;

    edges = edges.substr(1, edges.length - 2).split(',');
    vertices = vertices.substr(1, vertices.length - 2).split(',');

    const missingEdges = edges.filter(edge => {
        return !vertices.some(vertice => {
            if (vertice === '') {
                return false;
            }
            return edge.includes(vertice);
        });
    });

    if (missingEdges.length === 0) {
        return 'yes';
    }

    return `(${missingEdges.join(',')})`;
}

module.exports = vertexCovering;
