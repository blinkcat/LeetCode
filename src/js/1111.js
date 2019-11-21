/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let level = 0;
    const res = [];

    for (let s of seq) {
        if (s == '(') {
            level++;
            res.push(level % 2);
        } else {
            res.push(level % 2);
            level--;
        }
    }

    return res;
};
