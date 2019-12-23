/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    const len = s1.length;
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;

    for (let i = 0; i < len; i++) {
        if (s1[i] == s2[i]) {
            continue;
        }

        if (s1[i] == "x") {
            x1++;
        } else {
            y1++;
        }

        if (s2[i] == "x") {
            x2++;
        } else {
            y2++;
        }
    }

    // xx, xy
    if ((x1 + x2) % 2 != 0 || (y1 + y2) % 2 != 0) {
        return -1;
    } else {
        return (x1 >> 1) + (y1 >> 1) + (x1 % 2) * 2;
    }
};

/**
 * 1. xx->yy 需要1次移动
 * 2. xy->yx 需要移动2次
 * 所以，尽量按照第一种方式移动，最后不能配对的再按第二种配对。
 *
 * 先去除已经匹配的。
 * xxyyxyxyxx
 * xyyxyxxxyx
 * 得到，
 * xyxyyx
 * yxyxxy
 *
 * 再尽量按照第一种方式匹配
 * 得到，
 * yx
 * xy
 *
 * 所以，总共需要4次
 */

/**
 * 另一种解法
 * @see https://www.acwing.com/solution/LeetCode/content/5820/
 */
