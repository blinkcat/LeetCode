/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < weights.length; i++) {
        max = Math.max(max, weights[i]);
        sum += weights[i];
    }

    let left = max,
        right = sum;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let total = 0;
        // 必须要从1开始，不是0
        let res = 1;

        for (let i = 0; i < weights.length; i++) {
            if (total + weights[i] > mid) {
                res++;
                total = weights[i];
            } else {
                total += weights[i];
            }
        }

        if (res > D) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

/**
 * 先求出所有可能值的范围，[max, sum]
 * 但是要满足D天搬完，所以要枚举所有可能的值，找出最小的。
 * 这里可以使用二分查找，先测试中间值 mid=(max+sum)/2，
 * 如果得出的天数大于D，说明这个值小了，所以left=mid+1，
 * 否则，right=mid
 */
