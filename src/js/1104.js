/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    let num = label;
    let level = 0;

    while (num > 1) {
        num >>= 1;
        level++;
    }

    const res = [];

    for (num = label; level >= 0; level--) {
        res.push(num);
        // 主要是这里的推导
        num = (1 << level) - 1 - Math.floor((num - (1 << level)) / 2);
    }

    return res.reverse();
};
