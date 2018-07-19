/**
 * Using the JavaScript language, have the function stepWalking(num) take the
 * num parameter being passed which will be an integer between 1 and 15 that
 * represents the number of stairs you will have to climb. You can climb the set
 * of stairs by taking either 1 step or 2 steps, and you can combine these in
 * any order. So for example, to climb 3 steps you can either do: (1 step, 1
 * step, 1 step) or (2, 1) or (1, 2). So for 3 steps we have 3 different ways to
 * climb them, so your program should return 3. Your program should return the
 * number of combinations of climbing num steps.
 *
 * https://www.coderbyte.com/results/bhanson:Step%20Walking:JavaScript
 *
 * @param  {number} num
 * @return {number}
 */
function stepWalking(num) {
    if (!Number.isInteger(num) || num < 0) {
        return -1;
    }

    // Define step increments.  Can be anything.
    const stepIncrements = [1, 2];

    // Will store all resulting valid combination of steps
    const stepCombos = [];

    // Iterative breadth-first search
    let queue = stepIncrements.map(num => [num]);
    while (queue.length !== 0) {
        const nextQueue = [];

        queue.forEach(stepList => {
            const sum = stepList.reduce((sum, value) => (sum += value), 0);

            if (sum === num) {
                stepCombos.push(stepList);
                return;
            }

            stepIncrements.forEach(increment => {
                if (sum + increment <= num) {
                    const stepListCopy = stepList.slice();
                    stepListCopy.push(increment);
                    nextQueue.push(stepListCopy);
                }
            });
        });

        queue = nextQueue;
    }

    return stepCombos.length;
}

module.exports = stepWalking;
