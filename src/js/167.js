/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    // 必定有唯一解
    while (numbers[i] + numbers[j] != target) {
        if (numbers[i] + numbers[j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return [i + 1, j + 1];
};

/**
 * 一个o(nlgn)的算法很容易，如何找到一个o(n)的算法？
 * 1. 使用hashmap
 * 2. 双指针二分查找
 */
