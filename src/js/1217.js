/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let even = 0,
        odd = 0;

    for (const chip of chips) {
        if (chip % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }

    return Math.min(even, odd);
};

// 总结为奇数位置，偶数位置
