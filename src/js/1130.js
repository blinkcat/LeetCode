/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    const dp = [];
    const max = []; // i~j 中最大值
    const n = arr.length;

    // 初始化
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        max[i] = [];
        for (let j = 0; j < n; j++) {
            if (i == j) {
                dp[i][i] = 0;
                max[i][i] = arr[i];
            } else {
                dp[i][j] = Infinity; // 因为要找最小值
                max[i][j] = 0; // 因为要找最大值
            }
        }
    }

    // 从长度为2开始
    for (let len = 2; len <= n; len++) {
        // i 的区间应该是 [0, n-(len-1)) = [0, n-len]
        for (let i = 0; i <= n - len; i++) {
            // j 的值 应该是 j-i+1=len -> j=i+len-1
            const j = i + len - 1;

            for (let k = i; k < j; k++) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i][k] + dp[k + 1][j] + max[i][k] * max[k + 1][j]
                );
            }
            // max之所以可以先使用后计算，因为 i，j 之间的距离是逐步扩大的
            // 先 (0, 1) (1, 2) (2, 3)
            // 下次遇到 (0, 2)，需要用到 (0, 1), (1, 2) 都是已经计算过的
            for (let k = i; k <= j; k++) {
                max[i][j] = Math.max(max[i][j], arr[k]);
            }
        }
    }

    return dp[0][n - 1];
};

/**
 * dp
 * dp[i][j] 表示 arr{i, j} 的结果
 * dp[i][j] = dp[i][k] + dp[k+1][j] + max(arr[i]~arr[k]) * max(arr[k+1]~arr[j])  i<=k<=j
 * o(n^3)
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    const s = [Infinity];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (s.length == 0 || arr[i] < s[s.length - 1]) {
            s.push(arr[i]);
        } else {
            while (s.length != 0 && s[s.length - 1] < arr[i]) {
                sum += s.pop() * Math.min(s[s.length - 1], arr[i]);
            }
            s.push(arr[i]);
        }
    }

    while (s.length > 2) {
        sum += s.pop() * s[s.length - 1];
    }

    return sum;
};

/**
 * 单调递减堆栈
 * 从左到右，当前元素和它的最小相邻元素相乘，然后移除这个元素。重复操作，直到只剩最后一个元素
 */
