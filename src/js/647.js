/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const len = s.length;
    let count = 0;

    function help(l, r) {
        while (l >= 0 && r < len && s[l] == s[r]) {
            count++;
            l--;
            r++;
        }
    }

    for (let i = 0; i < len; i++) {
        help(i, i);
        help(i, i + 1);
    }

    return count;
};
