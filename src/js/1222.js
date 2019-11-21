/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    const m = [];

    for (const queen of queens) {
        if (Array.isArray(m[queen[0]])) {
            m[queen[0]][queen[1]] = true;
        } else {
            m[queen[0]] = [];
            m[queen[0]][queen[1]] = true;
        }
    }

    const res = [];

    for (const i of [-1, 0, 1]) {
        for (const j of [-1, 0, 1]) {
            for (let k = 1; k <= 8; k++) {
                const x = king[0] + k * i;
                const y = king[1] + k * j;

                if (m[x] && m[x][y]) {
                    res.push([x, y]);
                    break;
                }
            }
        }
    }

    return res;
};

// 总共8个方向，从king点开始，逐一去查找
