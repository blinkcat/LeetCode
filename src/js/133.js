/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const m = {};

    return dfs(node);

    function dfs(node) {
        // 已经copy过的，直接返回。
        if (m[node.val] != null) {
            return m[node.val];
        }

        const cloneNode = new Node(node.val, []);

        // 记住已经copy过的节点
        m[cloneNode.val] = cloneNode;
        for (const nei of node.neighbors) {
            cloneNode.neighbors.push(dfs(nei));
        }

        return cloneNode;
    }
};

/**
 * 第一种方法，dfs。
 */

/**
 * 第二种，bfs
 */

var cloneGraph = function(node) {
    const q = [];
    const m = {};
    const cloneNode = new Node(node.val, []);

    q.push(node);
    m[cloneNode.val] = cloneNode;

    while (q.length) {
        const tnode = q.shift();

        for (const nei of tnode.neighbors) {
            if (m[nei.val] == null) {
                m[nei.val] = new Node(nei.val, []);
                q.push(nei);
            }
            m[tnode.val].neighbors.push(m[nei.val]);
        }
    }

    return cloneNode;
};
