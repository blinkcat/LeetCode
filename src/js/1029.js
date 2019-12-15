/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    return costs
        .sort((a, b) => {
            return b[1] - b[0] - (a[1] - a[0]);
        })
        .reduce((acc, cur, index) => {
            if (index < costs.length / 2) {
                return acc + cur[0];
            } else {
                return acc + cur[1];
            }
        }, 0);
};

/**
 * 贪婪法
 * Example: [30, 100], [40, 90], [50, 50], [70, 50].
 * Savings: 70, 50, 0, -20.
 * 省的越多越好
 */

/**
 * 动态规划
 * dp[i][j] 表示 i+j 个人的最佳选择，其中i个人去A，j个人去B
 * dp[i][j]=min(dp[i-1][j]+costs[i+j-1][0], dp[i][j-1]+costs[i+j-1][1])
 */

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    const dp = [];
    dp[0] = [0];
    const len = costs.length / 2;

    for (let i = 1; i <= len; i++) {
        dp[i] = [];
        dp[i][0] = dp[i - 1][0] + costs[i - 1][0];
    }

    for (let j = 1; j <= len; j++) {
        dp[0][j] = dp[0][j - 1] + costs[j - 1][1];
    }

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j] + costs[i + j - 1][0],
                dp[i][j - 1] + costs[i + j - 1][1]
            );
        }
    }

    return dp[len][len];
};
