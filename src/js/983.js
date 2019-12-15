/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const dp = [];
    const n = days.length;

    function dfs(i) {
        if (dp[i] != null) {
            return dp[i];
        }

        // if (i > 365) {
        if (i > n - 1) {
            return 0;
        }

        let cost = 0;

        if (days.indexOf(i) > -1) {
            cost = Math.min(
                dfs(i + 1) + costs[0],
                dfs(i + 7) + costs[1],
                dfs(i + 30) + costs[2]
            );
        } else {
            cost = dfs(i + 1);
        }

        dp[i] = cost;
        return cost;
    }

    // return dfs(1);
    return dfs(days[0]);
};

/**
 * cost 数组表示 1，7，30 天的票价
 * dp[i] 表示从第 i 天开始，到最后一天的最小花费
 * dp[i]=min(dp[i+1]+cost[0], dp[i+7]+cost[1], dp[i+30]+cost[2])
 */

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const dp = [];
    const durations = [1, 7, 30];

    function dfs(i) {
        if (dp[i] != null) {
            return dp[i];
        }

        if (i >= days.length) {
            return 0;
        }

        let j = i;
        let res = Infinity;

        for (let k = 0; k < 3; k++) {
            while (j < days.length && days[j] < days[i] + durations[k]) {
                j++;
            }
            res = Math.min(res, dfs(j) + costs[k]);
        }

        dp[i] = res;

        return res;
    }

    return dfs(0);
};

/**
 * dp[i] 表示从 days[i] 开始，到计划最后一天的最小花费
 * days[j1]<days[i]+1
 * days[j7]<days[i]+7
 * days[j30]<days[i]+30
 */
