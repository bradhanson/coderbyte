/**
 * Have the function primeTime(num) take the num parameter being passed and
 * return the string true if the parameter is a prime number, otherwise return
 * the string false. The range will be between 1 and 2^16.
 * @param  {number} num
 * @return {string}
 */
function primeTime(num) {
    for (let i = 2, max = Math.floor(num / 2); i <= max; i++) {
        if (num % i === 0) {
            // divisible!  not prime
            return 'false';
        }
    }
    return 'true';
}

module.exports = primeTime;
