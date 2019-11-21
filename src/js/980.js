/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const grid2 = [];
    let start, end;
    let steps = 0;

    for (let i = 0; i < grid.length; i++) {
        grid2[i] = grid[i].slice();
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] != -1) {
                steps++;
            }

            if (grid[i][j] == 1) {
                start = [i, j];
            } else if (grid[i][j] == 2) {
                end = [i, j];
            }
        }
    }

    let count = 0;
    let curSteps = 1;
    const limitx = grid.length,
        limity = grid[0].length;

    function traverse(x, y) {
        if (curSteps == steps && x == end[0] && y == end[1]) {
            count++;
            return;
        }

        // 注意细节 这里有4步
        for (let i = 0; i < 4; i++) {
            switch (i) {
                case 0:
                    walk(x - 1, y);
                    break;
                case 1:
                    walk(x, y + 1);
                    break;
                case 2:
                    walk(x + 1, y);
                    break;
                case 3:
                    walk(x, y - 1);
            }
        }
    }

    function walk(x, y) {
        if (isSafe(x, y)) {
            curSteps++;
            grid2[x][y] = -1;
            traverse(x, y);
            curSteps--;
            grid2[x][y] = 0;
        }
    }

    function isSafe(x, y) {
        if (x < 0 || x >= limitx || y < 0 || y >= limity) {
            return false;
        } else if (grid2[x][y] != 0 && grid2[x][y] != 2) {
            return false;
        }
        return true;
    }

    traverse(...start);

    return count;
};
