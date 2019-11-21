/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    const s = [];

    let cur = root;

    while (cur != null || s.length) {
        while (cur != null) {
            s.push(cur);
            cur = cur.left;
        }

        cur = s.pop();
        res.push(cur.val);
        cur = cur.right;
    }

    return res;
};
