/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // heapSort(nums);
    // bubbleSort(nums);
    return nums;
};

/**
 * 1. heap sort
 * 需要了解的知识：
 * 完全二叉树
 * 节点数 n：
 * n= n0 + n1 + n2
 * 从度数关系上看，n-1 = n0 * 0 + n1 * 1 + n2 * 2 = n1 + 2n2 即，n = n1 + 2n2 + 1
 * 所以，n0 = n2 + 1
 * 在堆的构建中，不需要考虑叶子节点，所有说应该从下标 (n-1)/2 或者 n/2-1 开始，因为 n1在完全二叉树中
 * 要么是1，要么是0。(n-1)/2 < n/2-1，所以我们从下标 n/2-1开始，可以包含所有的情况。
 * @param {*} nums
 */
function heapSort(nums) {
    const len = nums.length;

    function heapify(i, limit) {
        const l = i * 2 + 1;
        const r = i * 2 + 2;
        let maxi = i;

        if (l < limit && nums[l] > nums[maxi]) {
            maxi = l;
        }

        if (r < limit && nums[r] > nums[maxi]) {
            maxi = r;
        }

        if (maxi !== i) {
            [nums[i], nums[maxi]] = [nums[maxi], nums[i]];
            heapify(maxi, limit);
        }
    }

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(i, len);
    }

    for (let i = 0; i < len; i++) {
        [nums[0], nums[len - 1 - i]] = [nums[len - 1 - i], nums[0]];
        heapify(0, len - i - 1);
    }
}

/**
 * 冒泡排序，无需赘言
 *
 * @param {*} nums
 */
function bubbleSort(nums) {
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
}

/**
 * 插入排序
 * 将数组分成两部分，前一部分是已经排好序的，后一部分的数字按顺序插入前一部分中
 *
 * @param {*} nums
 */
function insertionSort(nums) {
    const len = nums.length;

    for (let i = 1; i < len; i++) {
        const v = nums[i];
        let j = i - 1;
        while (j >= 0 && v < nums[j]) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = v;
    }
}

/**
 * 快速排序，找一个中间值，将数组中小于它的放到左边，大于它的放到右边
 * 然后以这个中间值为中点，分成两个数组，递归执行上面操作
 *
 * @param {*} nums
 * @param {*} low
 * @param {*} high
 */
function quickSort(nums, low, high) {
    // 必须有，不然会造成死循环 [5,2,3,1]
    if (low >= high) {
        return;
    }
    function partition(low, high) {
        const pivot = nums[Math.floor((low + high) / 2)];

        // 必须<=，为了让 low 移动到正确的地方
        while (low <= high) {
            while (nums[low] < pivot) {
                low++;
            }

            while (nums[high] > pivot) {
                high--;
            }
            // 这里也是，必须<=
            if (low <= high) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
                high--;
            }
        }

        return low;
    }

    const pi = partition(low, high);
    // 注意下面将数组分成两部分了，pi这个位置没有被排除在外
    if (pi > low) {
        quickSort(nums, low, pi - 1);
    }
    if (pi < high) {
        quickSort(nums, pi, high);
    }
}
