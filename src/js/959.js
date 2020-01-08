/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length;
    const m = [];

    for (let i = 0; i < n * 3; i++) {
        m[i] = [];
        for (let j = 0; j < n * 3; j++) {
            m[i][j] = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == "/") {
                m[i * 3][j * 3 + 2] = m[i * 3 + 1][j * 3 + 1] = m[i * 3 + 2][
                    j * 3
                ] = 1;
            } else if (grid[i][j] == "\\") {
                m[i * 3][j * 3] = m[i * 3 + 1][j * 3 + 1] = m[i * 3 + 2][
                    j * 3 + 2
                ] = 1;
            }
        }
    }

    let region = 0;

    for (let i = 0; i < n * 3; i++) {
        for (let j = 0; j < n * 3; j++) {
            if (m[i][j] == 0) {
                region++;
                dfs(i, j);
            }
        }
    }

    return region;

    function dfs(i, j) {
        if (i >= 0 && i < n * 3 && j >= 0 && j < n * 3 && m[i][j] == 0) {
            m[i][j] = 1;
            dfs(i + 1, j);
            dfs(i, j + 1);
            dfs(i - 1, j);
            dfs(i, j - 1);
        }
    }
};

/**
 * 第一种方法，dfs
 * @see https://leetcode.com/problems/regions-cut-by-slashes/discuss/205674/C%2B%2B-with-picture-DFS-on-upscaled-grid
 * @see https://leetcode.com/problems/regions-cut-by-slashes/discuss/205674/C++-with-picture-DFS-on-upscaled-grid/209319
 * 非常聪明的解法。
 * 将每个格子分成 3*3 个部分。这是为了划线方便。
 * 然后将grid的数据画在格子中。划线的地方置为1，其他置为0。
 * 接着通过dfs来确定联通的0的块数。
 */

/**
 * 第二种方法，使用并查集。
 *
 * 这样划分：
 *  0   4
 * 3 1 7 5
 *  2   6
 *  8
 * . .
 *  .
 */

var regionsBySlashes = function(grid) {
    const n = grid.length;
    const dsu = new DSU(4 * n * n);
    let region = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 1-7
            j < n - 1 &&
                dsu.union((i * n + j) * 4 + 1, (i * n + j + 1) * 4 + 3) &&
                region--;
            // 2-8
            i < n - 1 &&
                dsu.union((i * n + j) * 4 + 2, ((i + 1) * n + j) * 4) &&
                region--;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const base = (i * n + j) * 4;

            if (grid[i][j] == " ") {
                dsu.union(base, base + 1) && region--;
                dsu.union(base + 1, base + 2) && region--;
                dsu.union(base + 2, base + 3) && region--;
            } else if (grid[i][j] == "/") {
                dsu.union(base, base + 3) && region--;
                dsu.union(base + 1, base + 2) && region--;
            } else {
                dsu.union(base, base + 1) && region--;
                dsu.union(base + 2, base + 3) && region--;
            }
        }
    }

    return region;
};

class DSU {
    constructor(size) {
        this.parent = new Array(size);

        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
        }

        this.rank = new Array(size).fill(0, 0);
    }

    find(x) {
        // path compression
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];

        // without path compression
        // if (this.parent[x] !== x) {
        //     return this.find(this.parent[x]);
        // }
        // return x;
    }

    union(x, y) {
        // union by rank
        const xr = this.find(x);
        const yr = this.find(y);

        if (xr === yr) {
            return false;
        }

        if (this.rank[xr] < this.rank[yr]) {
            this.parent[xr] = yr;
        } else if (this.rank[xr] > this.rank[yr]) {
            this.parent[yr] = xr;
        } else {
            this.parent[yr] = xr;
            this.rank[xr]++;
        }

        return true;

        // without union by rank
        // this.parent[this.find(x)] = this.find(y);
    }
}
