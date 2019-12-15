/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function(n) {
    return n == 1 ? 1 : 0.5;

    // return n == 1 ? 1 : 1 / n + ((n - 2) / n) * nthPersonGetsNthSeat(n - 1);
};

/**
 * @see https://www.acwing.com/solution/LeetCode/content/5445/
 */
