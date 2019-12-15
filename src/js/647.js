/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const len = s.length;
    let count = 0;

    function help(l, r) {
        while (l >= 0 && r < len && s[l] == s[r]) {
            count++;
            l--;
            r++;
        }
    }

    for (let i = 0; i < len; i++) {
        help(i, i);
        help(i, i + 1);
    }

    return count;
};

/**
 * dp(i, j) i表示开始下标，j表示字符串长度
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    const len = s.length;
    const dp = [];

    for (let i = 0; i < len; i++) {
        dp[i] = [];
    }

    for (let n = 1; n <= len; n++) {
        for (let i = 0; i < len - n + 1; i++) {
            const j = i + n - 1;
            if (i == j) {
                dp[i][j] = true;
                count++;
            } else if (s[i] == s[j]) {
                if (i + 1 == j) {
                    dp[i][j] = true;
                    count++;
                } else if (dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    count++;
                }
            }
        }
    }

    return count;
};
