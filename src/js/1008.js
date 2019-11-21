/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    function traverse(nums) {
        if (nums.length == 0) {
            return null;
        }

        const root = new TreeNode(nums[0]);
        let i = 1;

        for (; i < nums.length; i++) {
            if (nums[i] < nums[0]) {
                continue;
            } else {
                break;
            }
        }

        root.left = traverse(nums.slice(1, i));
        root.right = traverse(nums.slice(i));

        return root;
    }

    return traverse(preorder);
};

/**
 * 思路：
 * 因为是先序遍历，第一个数一定是根节点，然后右边第一个比它大的数一定是右子树的根节点。
 * 在此可以分成左子树和右子树，开始递归。
 *
 */
