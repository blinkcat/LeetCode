/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = [];
    const len = s.length;
    let maxlen = 1;
    let maxrange = [0, 0];

    for (let i = 0; i < len; i++) {
        dp[i] = [];
    }

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (i == j) {
                dp[i][j] = 1;
            } else if (s[i] == s[j]) {
                if (i + 1 == j) {
                    dp[i][j] = 2;
                } else if (dp[i + 1][j - 1] != -1) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = -1;
                }
            } else {
                dp[i][j] = -1;
            }

            if (dp[i][j] > maxlen) {
                maxlen = dp[i][j];
                maxrange = [i, j];
            }
        }
    }

    return s.slice(maxrange[0], maxrange[1] + 1);
};

/**
 * 虽然用dp方法做出来了，但是需要o(n2)的空间复杂度，如果用波纹法，就可以降到o(1)的复杂度
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const [left1, right1] = help(i, i);
        const [left2, right2] = help(i, i + 1);
        let left = 0;
        let right = 0;

        if (right1 - left1 - 1 > right2 - left2 - 1) {
            left = left1;
            right = right1;
        } else {
            left = left2;
            right = right2;
        }

        if (right - left - 1 > end - start) {
            start = left + 1;
            end = right - 1;
        }
    }

    return s.slice(start, end + 1);

    function help(left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left--;
            right++;
        }

        return [left, right];
    }
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = help(i, i);
        const len2 = help(i, i + 1);

        const len = Math.max(len1, len2);

        if (len > end - start) {
            // 短，但是难理解
            start = i - ((len - 1) >> 1);
            end = i + (len >> 1);
        }
    }

    return s.slice(start, end + 1);

    function help(left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
};
