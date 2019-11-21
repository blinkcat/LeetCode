/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] += matrix[i][j - 1];
        }
    }

    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const mm = {};
            mm[0] = 1; // total = target
            let total = 0;

            for (let k = 0; k < m; k++) {
                total += i > 0 ? matrix[k][j] - matrix[k][i - 1] : matrix[k][j];
                count += mm[total - target] || 0;

                if (mm[total]) {
                    mm[total]++;
                } else {
                    mm[total] = 1;
                }
            }
        }
    }

    return count;
};

/**
 * presum的用法，二维的presum
 * @see http://www.noteanddata.com/leetcode-1074-Number-of-Submatrices-That-Sum-to-Target-java-solution-note.html
 */
