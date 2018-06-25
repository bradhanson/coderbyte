/**
 * Have the function simpleAdding(num) add up all the numbers from 1 to num. For
 * example: if the input is 4 then your program should return 10 because 1 + 2 +
 * 3 + 4 = 10. For the test cases, the parameter num will be any number from 1
 * to 1000.
 * @param  {number} num
 * @return {number}
 */
function simpleAdding(num) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

module.exports = simpleAdding;
