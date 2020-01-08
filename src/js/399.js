/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // 存储根和子孙。e.g   a->b->c  {c:a, b:a}
    const root = new Map();
    // 存储子孙到根的值，或者说权重。e.g   a/b=2.0, b/c=3.0  {b:1/2, c:1/3}
    const vals = new Map();
    // graph
    const edges = new Map();
    // 已经记录在root, vals 里面的，就不需要再做dfs了。
    const seen = new Set();

    for (let i = 0; i < equations.length; i++) {
        if (!edges.has(equations[i][0])) {
            edges.set(equations[i][0], new Map());
        }
        if (!edges.has(equations[i][1])) {
            edges.set(equations[i][1], new Map());
        }
        edges.get(equations[i][0]).set(equations[i][1], values[i]);
        edges.get(equations[i][1]).set(equations[i][0], 1 / values[i]);
    }

    for (const a of edges.keys()) {
        if (!seen.has(a)) {
            dfs(a, a, 1);
        }
    }

    const res = [];

    for (const query of queries) {
        const a = query[0];
        const b = query[1];

        if (!root.has(a) || !root.has(b) || root.get(a) != root.get(b)) {
            res.push(-1);
        } else {
            res.push(vals.get(a) / vals.get(b));
        }
    }

    return res;

    function dfs(a, b, v) {
        vals.set(a, v);
        root.set(a, b);
        seen.add(a);

        for (const nei of edges.get(a).keys()) {
            if (!seen.has(nei)) {
                dfs(nei, b, v * edges.get(nei).get(a));
            }
        }
    }
};

/**
 * @see https://leetcode.com/problems/evaluate-division/discuss/278276/Java-Union-find-and-DFS
 * @see https://leetcode.com/problems/evaluate-division/discuss/147281/Java-Union-Find-solution-faster-than-99
 * 第一种方法，dfs。
 */
