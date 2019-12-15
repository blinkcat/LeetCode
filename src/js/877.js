/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const dp = [];
    const len = piles.length;

    for (let i = 0; i < len; i++) {
        dp[i] = [];
        for (let j = 0; j < len; j++) {
            dp[i][j] = 0;
        }
    }

    for (let l = 2; l <= len; l += 2) {
        // 注意这里 i 的取值范围，i 最大可以是 len-l 因为 (len-1) - (len-l) + 1 = l
        for (let i = 0; i < len - l + 1; i++) {
            const j = i + l - 1;

            if (l == 2) {
                // 最优情况下，第一次拿的人肯定取最大值
                dp[i][j] = Math.abs(piles[i] - piles[j]);
            } else {
                dp[i][j] = Math.max.apply(null, [
                    dp[i][j],
                    Math.abs(piles[i] - piles[j]) + dp[i + 1][j - 1],
                    piles[i] - piles[i + 1] + dp[i + 2][j],
                    piles[j] - piles[j - 1] + dp[i][j - 2]
                ]);
            }
        }
    }

    return dp[0][len - 1] > 0;
};

/**
 * dp[i][j] 表示 [i...j] 中， 第一次取与第二次取石头的差值
 *
 * 当只有两堆石头时，dp[i][j] = Math.abs(piles[i] - piles[j])，由此可以得出初始状态。
 *
 * dp[i][j] = Math.max( piles[i]-piles[j]+dp[i+1][j-1], piles[j]-piles[i]+dp[i+1][j-1],
 * piles[i]-piles[i+1]+dp[i+2][j], piles[j]-piles[j-1]+piles[i][j-2]
 * )
 *
 * 最后 dp[0][len-1] 就是结果
 */

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    return true;
};

/**
 * 根据下标，将石头分为奇数组 odd，偶数组 even。
 * if sum(odd)>sum(even), 先取的人第一次先取奇数下标的石头，就可以确保自己一直会取奇数下标的石头。
 * 这样先取的人一定会赢。
 */
