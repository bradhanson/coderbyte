/**
 * Have the function countingMinutesI(str) take the str parameter being passed
 * which will be two times (each properly formatted with a colon and am or pm)
 * separated by a hyphen and return the total number of minutes between the two
 * times. The time will be in a 12 hour clock format. For example: if str is
 * 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the
 * output should be 1320.
 *
 * https://www.coderbyte.com/results/bhanson:Counting%20Minutes%20I:JavaScript
 *
 * @param  {string} str
 * @return {number}
 */
function countingMinutesI(str) {
    let times = str.split('-');

    times = times.map(function(currentValue, index, array) {
        let pairs = currentValue.split(':');
        let time =
            (pairs[1][2] === 'a'
                ? parseInt(pairs[0]) % 12
                : (parseInt(pairs[0]) % 12) + 12) *
                60 +
            parseInt(pairs[1][0] + pairs[1][1]);
        return time;
    });

    let diff = times[1] - times[0];
    return diff < 0 ? diff + 1440 : diff;
}

module.exports = countingMinutesI;
