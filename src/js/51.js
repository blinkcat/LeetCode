/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const chess = buildChess();
    const rows = [];
    const res = [];

    function dfs(c) {
        if (c == n) {
            res.push(format(chess));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (rows[i] || !check(i, c)) {
                continue;
            }

            rows[i] = true;
            chess[i][c] = "Q";
            dfs(c + 1);
            chess[i][c] = ".";
            rows[i] = false;
        }
    }

    dfs(0);

    return res;

    // 注意，列固定的情况下，只需要检查左上角，左下角。
    function check(i, j) {
        // 保存下来，在两次检查的中间恢复原值。
        const ti = i;
        const tj = j;

        while (i >= 0 && j >= 0) {
            if (chess[i][j] == "Q") {
                return false;
            }
            i--;
            j--;
        }

        i = ti;
        j = tj;

        while (i < n && j >= 0) {
            if (chess[i][j] == "Q") {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }

    function buildChess() {
        const chess = [];

        for (let i = 0; i < n; i++) {
            chess[i] = [];
            for (let j = 0; j < n; j++) {
                chess[i][j] = ".";
            }
        }

        return chess;
    }

    function copyChess(chess) {
        const newChess = [];

        for (let i = 0; i < n; i++) {
            newChess[i] = [];
            for (let j = 0; j < n; j++) {
                newChess[i][j] = chess[i][j];
            }
        }

        return newChess;
    }

    function format(chess) {
        const newChess = copyChess(chess);
        const res = [];

        for (const row of newChess) {
            res.push(row.join(""));
        }

        return res;
    }
};
