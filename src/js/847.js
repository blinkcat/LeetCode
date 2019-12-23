/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const n = graph.length;
    const q = [];
    const seen = new Set();

    for (let i = 0; i < n; i++) {
        seen.add(JSON.stringify([i]));
        q.push([i]);
    }

    while (q.length) {
        const path = q.shift();

        if (check(path)) {
            return path.length - 1;
        }

        const nodes = graph[path[path.length - 1]];

        for (const node of nodes) {
            const newPath = [...path, node];
            if (!seen.has(JSON.stringify(newPath))) {
                q.push(newPath);
                seen.add(JSON.stringify(newPath));
            }
        }
    }

    function check(arr) {
        for (let i = 0; i < n; i++) {
            if (arr.indexOf(i) == -1) {
                return false;
            }
        }
        return true;
    }
};

/**
 * 可以，但是超时了。
 * 改用bitvector
 */

/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const n = graph.length;
    const target = (1 << n) - 1;
    const seen = new Map();
    const q = [];

    for (let i = 0; i < n; i++) {
        const tuple = { mask: 1 << i, cost: 1, cur: i };
        q.push(tuple);
        seen.set(tuple.mask + "" + tuple.cost + "" + tuple.cur, tuple);
    }

    while (q.length) {
        const { mask, cost, cur } = q.shift();

        if (mask == target) {
            return cost - 1;
        }

        const nodes = graph[cur];

        for (const node of nodes) {
            const tuple = {
                mask: mask | (1 << node),
                cost: cost + 1,
                cur: node
            };
            const k = tuple.mask + "" + tuple.cost + "" + tuple.cur;

            if (!seen.has(k)) {
                seen.set(k, tuple);
                q.push(tuple);
            }
        }
    }
};
