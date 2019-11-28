/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {};

/**
 * 第一种方法，利用小顶堆。
 * 首先，行和列都已经是升序排列。先用第一行建立一个小顶堆。
 * 接着，小顶堆抛出顶上最小的元素，然后将这个元素所在列的下一个元素入堆。
 * 持续这个操作k次，得到了第k个最小元素。
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {};

/**
 * 第二种方法，二分查找
 * 不是基于下标，而是基于范围。
 * 第k小的数，那么必然有k个数小于等于它，注意原题的描述，
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 */
