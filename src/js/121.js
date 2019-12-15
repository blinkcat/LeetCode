/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    const len = prices.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            max = Math.max(prices[j] - prices[i], max);
        }
    }

    return max;
};

/**
 * 暴力法可以解决 o(n2)，是否可以一次遍历，o(n) 解决？
 * 这个问题可以转化为在数组中找一个最小数，在它的后面找一个比它大的数。
 * 这两个数的差值最大。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        min = Math.min(min, price);
        maxProfit = Math.max(maxProfit, price - min);
    }

    return maxProfit;
};

/**
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39038/Kadane's-Algorithm-Since-no-one-has-mentioned-about-this-so-far-%3A)-(In-case-if-interviewer-twists-the-input)
 * 另一种方法，也是o(n)，比较难理解。
 * 可以转化为 最大子序列 问题
 * 假设原数组是 [a0, a1, a2, a3, a4, a5, a6]
 *
 * b1 = 0
 * b2 = a2 - a1
 * b3 = a3 - a2
 * b4 = a4 - a3
 * b5 = a5 - a4
 * b6 = a6 - a5
 *
 * 可以得到原数组相邻元素的差值数组 [b1, b2, b3, b4, b5, b6]
 * maxCur 每次的累加就是原数组中某两个值的差值，比如：
 * b3 + b4 + b5 = a5 - a2
 * 至于 maxCur 和 0 比大小，是因为，如果 maxCur 是负数，说明 当前 i 下标这个值比
 * 前一个值要小，所以应该用这个值当做最小值。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxCur = 0;
    let maxSoFar = 0;

    for (let i = 1; i < prices.length; i++) {
        maxCur = Math.max(0, (maxCur += prices[i] - prices[i - 1]));
        maxSoFar = Math.max(maxSoFar, maxCur);
    }

    return maxSoFar;
};
