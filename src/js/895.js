var FreqStack = function() {
    this.maxFreq = 0;
    this.freqMap = {};
    this.stackMap = {};
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if (this.freqMap[x] == null) {
        this.freqMap[x] = 1;
    } else {
        this.freqMap[x]++;
    }

    this.maxFreq = Math.max(this.maxFreq, this.freqMap[x]);

    if (this.stackMap[this.freqMap[x]] == null) {
        this.stackMap[this.freqMap[x]] = [x];
    } else {
        this.stackMap[this.freqMap[x]].push(x);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const stack = this.stackMap[this.maxFreq];
    const v = stack.pop();

    this.freqMap[v]--;

    if (stack.length == 0) {
        this.maxFreq--;
    }

    return v;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

/**
 * 找到出现频率最大的值，出栈，然后更新出现频率最大的值。压入一个值时，再次更新出现频率最大的值。
 * 例如，[5,7,5,7,4,5] 依次入栈，
 * 接着执行 pop 操作，
 * 这时要先找出出现频率最大的值，5，然后移出栈。接着更新频率最大的值。
 * 三个难点：
 * 第一，如何维护这个出现频率最大的值。
 * 第二，如何如何在做出栈操作时，维护好数组。
 * 第三，这个频率最大的值如何和栈联系起来，即，如何在栈中找到这个数。
 *
 * 换一个思路，
 * 不去关心这个出现频率最大的值，而是关心这个频率。而这个频率又映射了达到这个频率的数字，所组成的
 * 栈。
 */
