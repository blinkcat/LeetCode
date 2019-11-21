/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const m = {};

    for (let i = 0; i < arr2.length; i++) {
        m[arr2[i]] = i;
    }

    arr1.sort((a, b) => {
        return getItem(a) - getItem(b);
    });

    function getItem(a) {
        return m[a] == null ? 1001 + a : m[a];
    }

    return arr1;
};

// 以另外一种方式排序，使用arr2的hashmap
