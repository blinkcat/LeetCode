/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    let count = 0;

    for (let i = 0; i < row.length; i += 2) {
        // 奇数减1，偶数加1
        const target = row[i] ^ 1;

        if (row[i + 1] == target) {
            continue;
        }

        for (let j = i + 2; j < row.length; j++) {
            if (row[j] == target) {
                [row[j], row[i + 1]] = [row[i + 1], row[j]];
                count++;
                break;
            }
        }
    }

    return count;
};

/**
 * 第一种方法，两个两个遍历，如果这两个不能搭配，就从这个位置往后继续遍历到可以搭配的位置，
 * 然后交互这两个值。
 */

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    const n = row.length >> 1;
    const p = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        p[i] = i;
    }

    for (let i = 0; i < n; i++) {
        const a = row[i * 2] >> 1;
        const b = row[i * 2 + 1] >> 1;

        union(a, b);
    }

    return count;

    function find(i) {
        if (p[i] != i) {
            return find(p[i]);
        }
        return i;
    }

    function union(i, j) {
        pi = find(i);
        pj = find(j);

        if (pi != pj) {
            count++;
            p[pi] = pj;
        }
    }
};

/**
 * 还可以用并查集来做。
 * n对couple，可以按couple分为n组数据
 * 0, 1, 2, 3, 4, 5
 * 就可以分为三组，[0, 1]，[2, 3]，[4, 5]。
 * 一开始的顺序是打乱的，3, 1, 4, 0, 2, 5
 * 前两个数，3，1 分别属于 第1组和第0组。那么就将这两组合并为一组。[0, 1, 2, 3], [4, 5]
 * 中间两个数，4, 0 属于第2组，第0组，将这两个组也合并为一组。 [0, 1, 2, 3, 4, 5]
 * 最后两个数，2，5 属于第1，第2组，通过前两次合并，这两个数其实已经属于一组了。
 * 整个merge的次数，就是最终的答案。
 */

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    const m = new Map();
    const n = row.length >> 1;

    for (let i = 0; i < n; i++) {
        union(row[i * 2] >> 1, row[i * 2 + 1] >> 1);
    }

    return m.size;

    function union(i, j) {
        if (i == j) {
            return;
        }
        // 保证顺序
        const a = Math.max(i, j);
        const b = Math.min(i, j);

        if (m.has(a)) {
            union(m.get(a), b);
        } else {
            m.set(a, b);
        }
    }
};

/**
 * 还是并查集的原理，但是使用map，适用范围更广。
 */

/**
 * other explaination
 * @see http://wowaccepted.com/2018/02/10/leetcode-765-couples-holding-hands%E9%A2%98%E7%9B%AE%E8%A7%A3%E6%9E%90-wowac/
 */
