/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;

    // 32bit 无符号整数
    for (let i = 0; i < 32; i++) {
        let c = 0;

        for (const num of nums) {
            c += (num >> i) & 1;
        }
        // 用 res 去加，而不是用res做移动
        res += c % 3 << i;
    }

    return res;
};

/**
 * @see https://www.acwing.com/solution/LeetCode/content/232/
 * @see https://leetcode.com/problems/single-number-ii/discuss/43295/Detailed-explanation-and-generalization-of-the-bitwise-operation-method-for-single-numbers
 *
 * 只有一个数出现一次，其他数都出现3次。
 * 因此，可以数这些数中，每位出现1的次数。如果说是3的倍数，那么这个唯一的数的这一位一定是0，反之是1。
 */
