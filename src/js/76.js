/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const lens = s.length;
    const lent = t.length;

    const m = {};

    for (const c of t) {
        if (m[c] == null) {
            m[c] = 1;
        } else {
            m[c]++;
        }
    }

    // count 用来计数，当前范围是否包含目标字符串
    let count = lent;
    let l = 0;
    let r = 0;
    let mind = lens + 1;
    let start = 0;

    while (r < lens) {
        // 大于0，说明当前字符属于目标字符串
        if (m[s[r]] > 0) {
            count--;
        }
        // 这里的自减必须放到if外面。
        // 考虑s='aabbccaabcc' t='abc' 这种情况。
        // l=0, r=5这个范围满足，而这时 m['a']=-1，这意味着l需要移动到2，才会让当前范围不满足。
        m[s[r]]--;
        r++;
        // count等于0，说明当前范围正好满足目标
        while (count == 0) {
            // 范围的长度是r-l，而不是r-l+1。因为r在上面又移动了一次
            if (r - l < mind) {
                mind = r - l;
                start = l;
            }
            // l开始收缩，向右移动。所以需要先把之前减去的值还回去。
            m[s[l]]++;
            // 如果这时候值大于0，说明l移动的这个位置的字符属于目标字符串。
            // count需要加回去
            if (m[s[l]] > 0) {
                count++;
            }
            // 移动l
            l++;
        }
    }

    return mind == lens + 1 ? "" : s.substr(start, mind);
};

/**
 * sliding window
 * 双指针l，r。
 * 一开始两个指针在同一位置，r负责扩张，直到当前的范围符合条件。然后l负责收缩，直到当前范围不符合条件。
 */
