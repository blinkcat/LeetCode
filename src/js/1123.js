/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    let maxDepth = 0;
    let target;

    function traverse(node, depth) {
        maxDepth = Math.max(maxDepth, depth);

        if (node == null) {
            return depth;
        }

        const left = traverse(node.left, depth + 1);
        const right = traverse(node.right, depth + 1);

        if (left == maxDepth && right == maxDepth) {
            target = node;
        }

        return Math.max(left, right);
    }

    traverse(root, 0);

    return target;
};

// 后续遍历，求出每个节点的左右depth
