/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const seen = new Set();
    const m = [];

    for (let i = 0; i <= edges.length; i++) {
        m[i] = [];
    }

    for (const edge of edges) {
        seen.clear();

        if (
            m[edge[0]].length != 0 &&
            m[edge[1]].length != 0 &&
            dfs(edge[0], edge[1])
        ) {
            return edge;
        }

        m[edge[0]].push(edge[1]);
        m[edge[1]].push(edge[0]);
    }

    function dfs(a, b) {
        if (!seen.has(a)) {
            seen.add(a);

            if (a == b) {
                return true;
            }

            for (const nei of m[a]) {
                if (dfs(nei, b)) {
                    return true;
                }
            }
        }

        return false;
    }
};

/**
 * 第一种方法，dfs
 * 用二维数组arr[i][j]表示i点和j点组成了一条边。将每条边加入数组之前，检查i是否能到达j，如果可以说明这条边是重复的。
 */

var findRedundantConnection = function(edges) {
    const dsu = new DSU(1000 + 1);

    for (const edge of edges) {
        if (!dsu.union(edge[0], edge[1])) {
            return edge;
        }
    }
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

/**
 * 第二种方法，并查集
 */
