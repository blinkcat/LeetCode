/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let i = 0;
    let j = 0;
    const res = [];

    while (i < A.length && j < B.length) {
        // 求相交
        const l = Math.max(A[i][0], B[j][0]);
        const r = Math.min(A[i][1], B[j][1]);
        // 说明有相交的地方，画个图一目了然
        if (l <= r) {
            res.push([l, r]);
        }
        // 丢掉end小的那一个
        if (A[i][1] < B[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return res;
};

/**
 * A, B 都是包含两两不相交的有序interval，双指针，一个指向A，一个指向B。
 * 比较两个指针，找到相交的interval。然后丢弃边界小的那个。
 */
