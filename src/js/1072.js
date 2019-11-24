/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const mm = {};
    let max = 1;

    for (let i = 0; i < m; i++) {
        let s = matrix[i].join();
        if (mm[s] == null) {
            mm[s] = 1;
        } else {
            mm[s]++;
        }
        max = Math.max(mm[s], max);

        const flip = matrix[i].slice();
        for (let j = 0; j < n; j++) {
            flip[j] = 1 - flip[j];
        }
        s = flip.join();
        if (mm[s] == null) {
            mm[s] = 1;
        } else {
            mm[s]++;
        }
        max = Math.max(mm[s], max);
    }

    return max;
};

/**
 * 通过翻转列来实现某些行全为1或0，
 * 那么这些行必然是一开始就完全相等，或者完全相反。
 * 所以问题变成找到某一行，矩阵中和这一行完全一样或者完全相反的行数最多。
 */
