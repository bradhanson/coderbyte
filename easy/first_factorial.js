/**
 * Have the function firstFactorial(num) take the num parameter being passed and
 * return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the
 * test cases, the range will be between 1 and 18 and the input will always be
 * an integer.
 * @param  {number} num
 * @return {number}
 */
function firstFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

module.exports = firstFactorial;
