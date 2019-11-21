/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    const res = [];

    const B = [];

    // 先找出从最大值到最小值的序号
    for (let i = 0; i < A.length; i++) {
        B[i] = i + 1;
    }

    B.sort((i, j) => A[j - 1] - A[i - 1]); // descending

    let len = A.length;

    // 每次都先把当前最大的值，通过两次翻转，移动到最后
    for (let i = 0; i < B.length; i++) {
        for (let j = 0; j < res.length; j++) {
            if (B[i] <= res[j]) {
                B[i] = res[j] - B[i] + 1;
            }
        }
        res.push(B[i]);
        res.push(len--);
    }

    return res;
};

// 1,2,...,n-1,n
// flip nth numbers
// i -> n-(i-1) = n-i+1
