/**
 * Using the JavaScript language, have the function optimalAssignments(strArr)
 * read strArr which will represent an NxN matrix and it will be in the
 * following format: ["(n,n,n...)","(...)",...] where the n's represent
 * integers. This matrix represents a machine at row i performing task at column
 * j. The cost for this is matrix[i][j]. Your program should determine what
 * machine should perform what task so as to minimize the whole cost and it
 * should return the pairings of machines to tasks in the following format:
 * (i-j)(...)... Only one machine can perform one task. For example: if strArr
 * is ["(5,4,2)","(12,4,3)","(3,4,13)"] then your program should return
 * (1-3)(2-2)(3-1) because assigning the machines to these tasks gives the least
 * cost. The matrix will range from 2x2 to 6x6, there will be no negative costs
 * in the matrix, and there will always be a unique answer.
 *
 * https://www.coderbyte.com/results/bhanson:Optimal%20Assignments:JavaScript
 *
 * @param  {array} strArr
 * @return {string}
 */
function optimalAssignments(strArr) {
    // Parse input to 2d array
    const matrix = strArr.map(row => row.match(/\d+/g).map(Number));

    // Array index = machine (row)
    // Array value = task (col)
    const tasks = [];
    for (let i = 0; i < strArr.length; i++) {
        tasks.push(i);
    }

    // Brute force check all possibilities
    const permutations = permute(tasks);

    let minCost = Number.MAX_SAFE_INTEGER;
    let minAssignment = [];
    permutations.forEach(permutation => {
        const cost = getTotalCost(matrix, permutation);

        if (cost < minCost) {
            minCost = cost;
            minAssignment = permutation;
        }
    });

    // Format output to spec
    const result = minAssignment
        .map((value, index) => `(${index + 1}-${value + 1})`)
        .join('');

    return result;
}

function getTotalCost(matrix, assignment) {
    let cost = 0;
    for (let i = 0; i < assignment.length; i++) {
        cost += matrix[i][assignment[i]];
    }
    return cost;
}

// https://en.wikipedia.org/wiki/Heap's_algorithm
// Iterative
function permute(arr) {
    let count = Array(arr.length).fill(0);

    const results = [arr.slice()];

    let i = 0;
    while (i < arr.length) {
        if (count[i] < i) {
            if (i % 2 === 0) {
                const temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
            } else {
                const temp = arr[count[i]];
                arr[count[i]] = arr[i];
                arr[i] = temp;
            }
            results.push(arr.slice());
            count[i]++;
            i = 0;
        } else {
            count[i] = 0;
            i++;
        }
    }
    return results;
}

module.exports = optimalAssignments;
