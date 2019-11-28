/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let left = 1;
    let right = nums.length - 1;

    while (left < right) {
        const mid = (left + right) >> 1;
        let count = 0;

        for (const num of nums) {
            if (num <= mid) {
                count++;
            }
        }

        if (count > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

/**
 * 第一种方法，二分法
 * 因为数组中的数在 [1, n] 区间，数组长度为 n+1。
 * 对 [1, n] 这个区间做二分，mid=(1+n)>>2。遍历nums，
 * 找出所有小于等于mid值的个数。如果这个数大于mid，说明重复的数
 * 在[1, mid]中。如果小于等于mid，说明重复的数在[mid+1, n]中
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let p = nums[0];
    let q = nums[0];

    do {
        p = nums[p];
        p = nums[p];
        q = nums[q];
    } while (p != q);

    q = nums[0];

    while (p != q) {
        p = nums[p];
        q = nums[q];
    }

    return p;
};

/**
 * 第二种，双指针
 * floyd algorithm
 */
