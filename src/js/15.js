/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    const m = {};

    nums.sort((a, b) => a - b);

    // [0,0,0]
    for (let i = 0; i < nums.length; i++) {
        m[nums[i]] = i;
    }

    for (let i = 0; i < nums.length - 2; i++) {
        if (i != 0 && nums[i - 1] == nums[i]) {
            continue;
        }
        for (let j = i + 1; j < nums.length - 1; j++) {
            // [0,0,0,0]
            if (j != i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }
            if (m[-nums[i] - nums[j]] > j) {
                res.push([nums[i], nums[m[-nums[i] - nums[j]]], nums[j]]);
            }
        }
    }

    return res;
};

/**
 * 使用hashmap的方法过于复杂
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        const target = 0 - nums[i];
        let left = i + 1,
            right = nums.length - 1;

        while (left < right) {
            if (nums[left] + nums[right] == target) {
                res.push([nums[i], nums[left], nums[right]]);
                // 去重
                while (left < right && nums[left] == nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    right--;
                }
                // 尝试下一个组合
                left++;
                right--;
            } else if (nums[left] + nums[right] > target) {
                right--;
            } else {
                left++;
            }
        }
    }

    return res;
};

/**
 * 使用双指针法，还是要先排序。
 * 这种方法可以有效地避免 [0,0,0,0] 这种情况。
 */
