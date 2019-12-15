/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            max += prices[i + 1] - prices[i];
        }
    }

    return max;
};

/**
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 * 如果看明白这句，就容易解决了，在同一天你不会先买再卖，但你可以先卖再买。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return dfs(0);

    function dfs(s) {
        let maxprofit = 0;

        for (let i = s; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                let profit = 0;

                if (prices[j] < prices[i]) {
                    continue;
                } else {
                    profit = dfs(j + 1) + prices[j] - prices[i];
                }
                maxprofit = Math.max(maxprofit, profit);
            }
        }

        return maxprofit;
    }
};

/**
 *  如果用暴力法, 会超时
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let valley = prices[0];
    let peek = prices[0];
    let maxprofit = 0;
    let i = 0;
    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] > prices[i + 1]) {
            i++;
        }
        valley = prices[i];
        i++;
        if (i == prices.length) {
            i--;
        }
        peek = prices[i];
        maxprofit += peek - valley;
    }

    return maxprofit;
};

/**
 * 采用峰谷法
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/
 * 先找谷再找峰，不要错过一个
 */
