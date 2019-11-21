/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let moves = 0;

    function traverse(node) {
        if (node) {
            const left = traverse(node.left);
            const right = traverse(node.right);

            moves += Math.abs(left) + Math.abs(right);

            return node.val - 1 + left + right;
        } else {
            return 0;
        }
    }

    traverse(root);

    return moves;
};

// 后序遍历
