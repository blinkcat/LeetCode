/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let l = 0;
    let h = A.length - 1;

    while (l < h) {
        let m = l + Math.floor((h - l) / 2);

        if (A[m] < A[m + 1]) {
            l = m + 1;
        } else {
            h = m;
        }
    }

    return l;
};

// 二分法的使用
