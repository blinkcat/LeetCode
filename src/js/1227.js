/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function(n) {
    return n==1? 1:0.5

    // return n == 1 ? 1 : 1 / n + ((n - 2) / n) * nthPersonGetsNthSeat(n - 1);
};

/**
 * 第一个人坐到自己的位置上，和坐到第n个人的位置上的概率都是 1/n
 *  
 */
