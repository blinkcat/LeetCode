/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
    const q = [];
    const mm = new Map();
    const m = mat.length;
    const n = mat[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    if (check(mat)) {
        return 0;
    }

    q.push(mat);
    // JSON.stringify 用来快速比较两个数组是否相等
    mm.set(JSON.stringify(mat), 0);

    while (q.length) {
        const cachedMatrix = q.shift();
        const dis = mm.get(JSON.stringify(cachedMatrix));

        if (check(cachedMatrix)) {
            return dis;
        } else {
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    const copyMatrix = copy(cachedMatrix);
                    flip(copyMatrix, i, j);
                    if (!mm.has(JSON.stringify(copyMatrix))) {
                        q.push(copyMatrix);
                        mm.set(JSON.stringify(copyMatrix), dis + 1);
                    }
                }
            }
        }
    }

    return -1;

    function check(matrix) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] != 0) {
                    return false;
                }
            }
        }
        return true;
    }

    function flip(matrix, x, y) {
        matrix[x][y] ^= 1;

        for (let i = 0; i < 4; i++) {
            const newx = x + dx[i];
            const newy = y + dy[i];

            if (isValid(newx, newy)) {
                matrix[newx][newy] ^= 1;
            }
        }
    }

    function isValid(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        return true;
    }

    function copy(matrix) {
        const newMatrix = [];

        for (let i = 0; i < m; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < n; j++) {
                newMatrix[i][j] = matrix[i][j];
            }
        }

        return newMatrix;
    }
};

/**
 * bfs
 */
