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
var bstToGst = function(root) {
  let sum = 0;

  function traverse(node) {
    if (node) {
      if (node.right) {
        traverse(node.right);
      }

      sum += node.val;
      node.val = sum;

      if (node.left) {
        traverse(node.left);
      }
    }
  }

  traverse(root);

  return root;
};

/**
 * 思路：
 * 右-中-左 遍历
 * 关键是使用一个中间变量 sum 记录前次的值，然后按照降序依次计算。
 */
