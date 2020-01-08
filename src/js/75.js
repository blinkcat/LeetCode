/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zero = (one = two = 0);

    for (const num of nums) {
        if (num == 0) {
            zero++;
        } else if (num == 1) {
            one++;
        } else {
            two++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i < zero) {
            nums[i] = 0;
        } else if (i < zero + one) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
};

/**
 * 第一种需要遍历两次。
 * 第二种双指针法，只需要一次遍历。
 */

var sortColors = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    for (let i = 0; i <= r; i++) {
        if (nums[i] == 0) {
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l++;
        } else if (nums[i] == 2) {
            // in case of [1, 2, 0] -> [1, 0, 2]
            // 上面不需要i--, 因为这里要保证nums中的每个值都被遍历到。
            // 上面的i是和左边已经遍历过的值做交换，而这里是和右边没有被
            // 遍历过的值交换，所以需要i--。
            [nums[i], nums[r]] = [nums[r], nums[i]];
            i--;
            r--;
        }
    }
};

/**
 * 还有一种比较巧妙的解法
 * @see https://leetcode.com/problems/sort-colors/discuss/26500/Four-different-solutions
 * 三个指针，n0, n1, n2分表指向0，1，2的末尾。
 * 从头开始遍历，当遇到0时，三个指针都需要向后移动，因为0是放在最前面。遇到1时，n1, n2向后移动。遇到3时，n2向后移动。
 */

var sortColors = function(nums) {
    let n0 = (n1 = n2 = -1);

    for (const num of nums) {
        if (num == 0) {
            nums[++n2] = 2;
            nums[++n1] = 1;
            nums[++n0] = 0;
        } else if (num == 1) {
            nums[++n2] = 2;
            nums[++n1] = 1;
        } else {
            nums[++n2] = 2;
        }
    }
};
