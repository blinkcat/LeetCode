/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length;
    const len2 = text2.length;
    const dp = [];

    for (let i = 0; i <= len1; i++) {
        dp[i] = [];
        for (let j = 0; j <= len2; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0;
            }
        }
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[len1][len2];
};

/**
 * dp[i][j] 表示 text1[0...i] 和 text2[0...j] 的最长公共子串
 * if text1[i]==text2[j]
 *  dp[i][j]=dp[i-1][j-1]+1
 * else
 *  dp[i][j]=max(dp[i-1][j], dp[i][j-1])
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = [];
    const n1 = text1.length;
    const n2 = text2.length;

    for (let i = 0; i < n1; i++) {
        dp[i] = [0];
        for (let j = 0; j < n2; j++) {
            if (text1[i] == text2[j]) {
                dp[i][j] = i == 0 || j == 0 ? 1 : dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(
                    i == 0 ? 0 : dp[i - 1][j],
                    j == 0 ? 0 : dp[i][j - 1]
                );
            }
        }
    }

    return dp[n1 - 1][n2 - 1];
};
