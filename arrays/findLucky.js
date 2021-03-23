var findLucky = function(arr) {
    const hashTable = {};
    let max = -1;
    
    for (let num of arr) {
        if (hashTable[num]) hashTable[num]++;
        else hashTable[num] = 1;
    };
    
    for (let num of arr) {
        if (hashTable[num] === num) max = Math.max(num, max);
    }
    
    return max;
};