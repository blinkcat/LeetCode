/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xorv = 0;

    for (const num of nums) {
        xorv ^= num;
    }

    let pos = 0;

    while (!((xorv >> pos) & 1)) {
        pos++;
    }

    let num1 = 0;
    let num2 = 0;

    for (const num of nums) {
        if ((num >> pos) & 1) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
};

/**
 * @see https://www.acwing.com/solution/LeetCode/content/237/
 * 主要思路是将数据分成两批，两个出现一次的数分别在两个数组中。然后分别做xor。
 * 先将整个数组中的数做异或操作，得到一个数。找出这个数中随意一个为1的比特位。
 * 这个数中bit为1的数位，肯定是由奇数个1和奇数个0形成的。依次可以分成两个数组，
 * 将两个只出现一次的数分开。因为其他的数都出现两次。
 */
