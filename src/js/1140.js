/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const sum = new Array(n + 1).fill(0, 0);
    const dp = [];

    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1).fill(0, 0);
    }

    for (let i = n - 1; i >= 0; i--) {
        // 后缀和
        sum[i] = sum[i + 1] + piles[i];
        for (let j = 1; j <= n; j++) {
            for (let k = 1; k <= 2 * j && i + k <= n; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    sum[i] - dp[i + k][Math.max(j, k)]
                );
            }
        }
    }

    return dp[0][1];
};

/**
 * dp[i][j] 表示 m=j 时，piles[i...n-1] alex能取到的最多石子数
 * 其中，0<=i<n，1<=j<=2m，dp[n][j]=0 。后面的状态容易得出，所以从后向前推导。
 * 因为是从后往前推导，先求出后缀和 sum
 * dp[i][j]=max(dp[i][j], sum[i]-dp[i+k][max(j, k)]) 1<=k<=2j
 * 用sum减是因为先手变后手，lee 取到了最大的石子数，剩下的就是alex的，lee 能取的越少，留给 alex 的就越多
 */
