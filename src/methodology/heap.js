/**
 * mine, not efficient
 */
function buildHeap(nums) {
    const len = nums.length;

    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(i, nums);
    }
}

// 小顶堆
function heapify(i, nums) {
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    let mini = i;

    if (l < nums.length && nums[l].val < nums[mini].val) {
        mini = l;
    }

    if (r < nums.length && nums[r].val < nums[mini].val) {
        mini = r;
    }

    if (mini !== i) {
        [nums[i], nums[mini]] = [nums[mini], nums[i]];
        heapify(mini, nums);
    }
}

/**
 * others
 */

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * JS Priority Queue
 */
class PriorityQueue {
    constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.compare = compare;
        this.length = data.length;

        // heapify: initially, sift down every val to its right position
        // Sift down is more efficient when init, because nodes at the leaf level, which has
        // the largest number of nodes, don't need to move !!
        // https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity
        for (let i = (this.length >> 1) - 1; i >= 0; i--) {
            this._siftDown(i);
        }
    }

    push(val) {
        this.data.push(val);
        this.length++;
        this._siftUp(this.length - 1);
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;

        // re-heapify
        if (this.length > 0) {
            this.data[0] = bottom;
            this._siftDown(0);
        }

        return top;
    }

    peek() {
        return this.length === 0 ? undefined : this.data[0];
    }

    /************* Internal Method *************/
    /**
     * Sift the item up to find its correct position.
     * This happens when a new item is added in, and input pos = this.length - 1
     *
     * @param {number} pos - initial pos of this item
     */
    _siftUp(pos) {
        const { data, compare } = this;
        const item = data[pos];

        while (pos > 0) {
            const parentPos = (pos - 1) >> 1;
            const parentVal = data[parentPos];

            // item's value at current pos is already >= it's parent's value, so stop
            if (compare(item, parentVal) >= 0) {
                break;
            }

            // child's value < parent's value, move parent's val down to current pos
            data[pos] = parentVal;
            pos = parentPos;
        }

        data[pos] = item;
    }

    /**
     * Sift the item down to find its correct position.
     * This happens when initialize the priority queue, and when a item is pop out.
     *
     * @param {number} pos
     */
    _siftDown(pos) {
        const { data, compare } = this;
        const item = data[pos];
        const halfLength = this.length >> 1;

        while (pos < halfLength) {
            const leftChildPos = (pos << 1) + 1;
            const rightChildPos = leftChildPos + 1;
            let smallerVal = data[leftChildPos];
            let smallerPos = leftChildPos;

            if (
                rightChildPos < this.length &&
                compare(data[rightChildPos], smallerVal) < 0
            ) {
                smallerVal = data[rightChildPos];
                smallerPos = rightChildPos;
            }

            // current item's value is already <= it's smallest child's value, stop
            if (compare(item, smallerVal) <= 0) {
                break;
            }

            // parent's value > child's value, move child's val up to current pos
            data[pos] = smallerVal;
            pos = smallerPos;
        }

        data[pos] = item;
    }

    _defaultCompare(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }
}
