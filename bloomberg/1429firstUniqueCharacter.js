// 1429. First Unique Number

/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.array = nums;
    this.hash = {};
    for (const num of nums) {
        this.hash[num] = this.hash[num] + 1 || 1;
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    for (const num of this.array) {
        if (this.hash[num] === 1) {
            return num;
        }  
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.array.push(value);
    this.hash[value] = this.hash[value] + 1 || 1;
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */