/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @see https://leetcode.com/problems/all-possible-full-binary-trees/discuss/163433/Java-Recursive-Solution-with-Explanation
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    const res = [];

    if (N == 1) {
        res.push(new TreeNode(0));
        return res;
    }

    N--;
    // 这里是关键，每个节点只有0个或者2个节点
    for (let i = 1; i < N; i += 2) {
        const ls = allPossibleFBT(i);
        const rs = allPossibleFBT(N - i);

        for (let lt of ls) {
            for (let rt of rs) {
                const t = new TreeNode(0);
                t.left = lt;
                t.right = rt;
                res.push(t);
            }
        }
    }

    return res;
};
