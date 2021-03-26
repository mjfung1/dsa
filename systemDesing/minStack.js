


//MUCH MORE EFFICIENT WHEN USING A 'MIN' STACK TO KEEP TRACK OF MIN.  
// FASTER LOOK UP. THAN SORTING TO GET MINIMUM
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let lastIndex = this.min.length - 1;
    if (this.min.length === 0 || this.min[lastIndex] >= val) this.min.push(val);
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let lastIndex = this.min.length - 1;
    const ele = this.stack.pop();
    if (this.min[lastIndex] === ele) this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const lastIndex = this.stack.length - 1;
    return this.stack[lastIndex];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let lastIndex = this.min.length - 1;
    return this.min[lastIndex];
};



/////////////////////
//FIRST IMPLEMENTATION. MINE!
//SLOW BC OF SORTING
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const lastIndex = this.stack.length - 1;
    return this.stack[lastIndex]
    return this.stack.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let mid = [...this.stack];
    mid.sort((a,b) => a - b);
    // console.log(this.stack)
    return mid[0];
};
