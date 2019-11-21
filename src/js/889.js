/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if (pre.length == 0) {
        return null;
    }

    const root = new TreeNode(pre[0]);

    if (pre.length == 1) {
        return root;
    }

    const l = post.indexOf(pre[1]);

    root.left = constructFromPrePost(pre.slice(1, l + 2), post.slice(0, l + 1));
    root.right = constructFromPrePost(pre.slice(l + 2), post.slice(l + 1, -1));

    return root;
};
