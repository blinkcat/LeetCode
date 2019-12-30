/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const k = nums.length;
    let min = Infinity;
    let max = -Infinity;
    let dis = Infinity;
    const h = [];

    for (let i = 0; i < k; i++) {
        h.push([nums[i][0], i, 0]);
        max = Math.max(max, nums[i][0]);
    }

    buildHeap(h);

    let l = min;
    let r = max;

    while (true) {
        const top = h[0];

        min = top[0];
        if (dis > max - min) {
            l = min;
            r = max;
            dis = r - l;
        }
        h.shift();
        if (top[2] + 1 >= nums[top[1]].length) {
            break;
        }
        max = Math.max(max, nums[top[1]][top[2] + 1]);
        h.push([nums[top[1]][top[2] + 1], top[1], top[2] + 1]);
        buildHeap(h);
    }

    return [l, r];
};

function buildHeap(nums) {
    const len = nums.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(i, nums);
    }
}

// 小顶堆
function heapify(i, nums) {
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    let mini = i;

    if (l < nums.length && nums[l][0] < nums[mini][0]) {
        mini = l;
    }

    if (r < nums.length && nums[r][0] < nums[mini][0]) {
        mini = r;
    }

    if (mini !== i) {
        [nums[i], nums[mini]] = [nums[mini], nums[i]];
        heapify(mini, nums);
    }
}

/**
 * 利用小顶堆
 * 先将nums中每一行的第一个元素建小顶堆，求出这一组元素的最小值，和最大值，作为一个范围。
 * 然后弹出最小值，将这个最小值所在行的下一个元素入堆，重复上面的操作。直到有一行用完所有元素。
 *
 * 首先这个范围的两个边界一定是某一行中的两个数，或是某两行的两个数。因为每一行都是升序排列，在入堆的
 * 过程中，不断尝试新的边界，就能找出最小的。
 */
