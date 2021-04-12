// 379. Design Phone Directory

/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
    this.phoneNumbas = new Set();
    for (let numba = 0; numba < maxNumbers; numba++) {
        this.phoneNumbas.add(numba);
    }
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
    let phone = -1;
    for (const numba of this.phoneNumbas) {
        phone = numba;
        break;
    }
    
    this.phoneNumbas.delete(phone)
    
    return phone;
};

/**
 * Check if a number is available or not. 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
    if (this.phoneNumbas.has(number)) {
        return true
    }
    return false;
};

/**
 * Recycle or release a number. 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
    this.phoneNumbas.add(number)
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */