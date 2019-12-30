/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let i = 0;
    let j = 0;

    // j自增，表示窗口在不断向右移动
    for (; j < A.length; j++) {
        if (A[j] == 0) {
            K--;
        }
        // 如果K>=0，表示窗口还在扩张，j增加，i不需要移动。
        // 如果K<0，表示窗口此时虽然在移动，但是不能扩张了。i也要同步移动。
        if (K < 0 && A[i++] == 0) {
            K++;
        }
    }
    return j - i;
};

/**
 * 找到最大子串，其中最多包含K个0
 * 滑动窗口
 * i，j都从0开始，j开始向右移动，即j++，如果遇到0，K--，
 * 如果K<0，说明已经到了当前窗口的极限。i++，如果A[i]==0，K++。
 * i，j之间的距离可以看做一个窗口，且这个窗口在移动结束时，就是最大的范围。
 */
