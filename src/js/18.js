/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);

    const res = [];
    const temp = [];
    const n = nums.length;

    function traverse(k, start, sum) {
        if (k == 0) {
            if (sum == target) {
                res.push(temp.slice());
            }
            return;
        }

        for (let i = start; i < n - k + 1; i++) {
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }
            temp.push(nums[i]);
            traverse(k - 1, i + 1, sum + nums[i]);
            temp.pop();
        }
    }

    traverse(4, 0, 0);

    return res;
};

/**
 * 回溯法，解决 ksum， 注意两个剪枝的地方，可以避免重复的结果。
 */
