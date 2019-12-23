/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    // 队列
    const q = [];
    // 记住访问过的节点
    const seen = new Set();
    // 记住父节点
    const m = new Map();

    dfs(root);

    // null 作为哨兵
    q.push(null);
    q.push(target);
    seen.add(target);
    let k = 0;

    while (q.length) {
        const node = q.shift();

        if (node == null) {
            if (k == K) {
                return q.map(node => node.val);
            } else {
                q.push(null);
            }
            k++;
        } else {
            if (node.left && !seen.has(node.left)) {
                q.push(node.left);
                seen.add(node.left);
            }

            if (node.right && !seen.has(node.right)) {
                q.push(node.right);
                seen.add(node.right);
            }

            const par = m.get(node);

            if (par && !seen.has(par)) {
                q.push(par);
                seen.add(par);
            }
        }
    }

    function dfs(node) {
        if (node.left) {
            m.set(node.left, node);
            dfs(node.left);
        }

        if (node.right) {
            m.set(node.right, node);
            dfs(node.right);
        }
    }
};

/**
 * 构造一个双向结构，从target开始向外走K步。
 */
