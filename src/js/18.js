/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = [];
    const f = [];
    const cache = [];

    nums.sort((a, b) => a - b);

    function traverse(k, start, left) {
        if (k == 0) {
            if (left == 0) {
                res.push(cache.slice());
            }
        } else {
            for (let i = start; i < nums.length - k + 1; i++) {
                // 剪枝
                if (i > start && nums[i] == nums[i - 1]) {
                    continue;
                }
                if (f[i]) {
                    continue;
                } else {
                    f[i] = true;
                    cache.push(nums[i]);
                    // 剪枝
                    traverse(k - 1, i + 1, left - nums[i]);
                    f[i] = false;
                    cache.pop();
                }
            }
        }
    }

    traverse(4, 0, target);

    return res;
};

/**
 * 回溯法，解决 ksum， 注意两个剪枝的地方，可以避免重复的结果。
 */
