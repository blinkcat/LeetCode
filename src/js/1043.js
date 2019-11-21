/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {
    const dp = new Array(A.length + 1).fill(0);

    for (let i = 1; i <= A.length; i++) {
        for (let j = 1; j <= K; j++) {
            dp[i] =
                i > j
                    ? Math.max(dp[i], dp[i - j] + Math.max.apply(null, A.slice(i - j, i)) * j)
                    : Math.max.apply(null, A.slice(0, i)) * i;
        }
    }
    console.log(dp);
    return dp[A.length];
};

// dp[i] = dp[i-k] + max(A[i-k+1 ~ i]) * k
// 动态规划问题
