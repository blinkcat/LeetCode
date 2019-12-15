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
