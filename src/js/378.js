/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const nums = matrix[0].slice(0).map((v, i) => ({ x: 0, y: i, val: v }));

    buildHeap();

    for (let i = 0; i < k - 1; i++) {
        const t = nums.shift();
        if (t.x != matrix.length - 1) {
            nums.unshift({ x: t.x + 1, y: t.y, val: matrix[t.x + 1][t.y] });
        }
        buildHeap();
    }

    return nums.shift().val;

    function buildHeap() {
        const len = nums.length;

        for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
            heapify(i);
        }
    }

    // 小顶堆
    function heapify(i) {
        const l = i * 2 + 1;
        const r = i * 2 + 2;
        let mini = i;

        if (l < nums.length && nums[l].val < nums[mini].val) {
            mini = l;
        }

        if (r < nums.length && nums[r].val < nums[mini].val) {
            mini = r;
        }

        if (mini !== i) {
            [nums[i], nums[mini]] = [nums[mini], nums[i]];
            heapify(mini, nums);
        }
    }
};

/**
 * 第一种方法，利用小顶堆。
 * 首先，行和列都已经是升序排列。先用第一行建立一个小顶堆。
 * 接着，小顶堆抛出顶上最小的元素，然后将这个元素所在列的下一个元素入堆。
 * 持续这个操作k次，得到了第k个最小元素。
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];

    while (left < right) {
        let count = 0;
        let mid = (left + right) >> 1;
        let j = n - 1;

        // 注意这里的优化，因为行和列都是递增。所以从行末开始
        // 从右往左，从上到下。[i, j]大于mid，那么[i+1, j]，必然也大于mid。
        // 所以从[i+1, j-1]开始
        for (let i = 0; i < n; i++) {
            while (j >= 0 && matrix[i][j] > mid) {
                j--;
            }
            count += j + 1;
        }

        // 注意这里，先比较<，后比较>，才能逼近
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

/**
 * 第二种方法，二分查找
 * 不是基于下标，而是基于范围。
 * 第k小的数，那么必然有k个数小于等于它，注意原题的描述，
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 */
