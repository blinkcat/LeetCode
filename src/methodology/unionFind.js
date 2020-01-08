/**
 * 并查集
 * 将数据分成若干个集合
 * @see https://stackblitz.com/edit/union-find demo
 */

const p = []; // 存储父元素，p[i] = j，i的父元素是j

/**
 * 初始化
 *
 * @param {*} n
 */
function init(n) {
    for (let i = 0; i < n; i++) {
        p[i] = i;
    }
}

/**
 * 查找父元素
 *
 * @param {*} x
 * @returns
 */
function find(x) {
    if (p[x] != x) {
        return find(p[x]);
    }

    return x;
}

/**
 * 将两个元素放到一个集合中
 *
 * @param {*} x
 * @param {*} y
 */
function union(x, y) {
    p[find(x)] = find(y);
}

/**
 * 压缩路径
 *
 * @param {*} x
 */
function zip(x) {
    if (p[x] != x) {
        p[x] = find(p[x]);
    }
}

/**
 * Disjoint Set Union
 *
 * @see https://blog.csdn.net/anlian523/article/details/81841082
 * @see https://leetcode.com/problems/redundant-connection/solution/
 */
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
