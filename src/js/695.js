/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const r = grid.length;
    const c = grid[0].length;

    const starts = [];

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] == 1) {
                starts.push([i, j]);
            }
        }
    }

    if (starts.length == 0) {
        return 0;
    }

    let maxCount = 0;

    function traverse(x, y) {
        if (x < 0 || x >= r || y < 0 || y >= c || grid[x][y] == 0 || grid[x][y] == 2) {
            return 0;
        }

        if (grid[x][y] == 1) {
            grid[x][y] = 2;
        }

        return 1 + traverse(x - 1, y) + traverse(x, y + 1) + traverse(x + 1, y) + traverse(x, y - 1);
    }

    for (const start of starts) {
        if (grid[start[0]][start[1]] == 1) {
            maxCount = Math.max(traverse(start[0], start[1]), maxCount);
        }
    }

    return maxCount;
};

// 另一种dfs，统计节点数
