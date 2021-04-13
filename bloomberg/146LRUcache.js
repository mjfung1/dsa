// 146. LRU Cache

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.myCache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const myCache = this.myCache;
    if (!myCache.has(key)) return -1;
    
    const value = myCache.get(key);
    myCache.delete(key);
    myCache.set(key, value);
    return value;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const myCache = this.myCache;
    //delete before putting anything to update position;
    //if prev there. will maintain previous position aka will not add;
    //bc map dont take no dupss
    myCache.delete(key);
    myCache.set(key, value)
    if (myCache.size > this.capacity) {
        let leastUsed = myCache.keys().next().value;
        myCache.delete(leastUsed)
    }
    
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */