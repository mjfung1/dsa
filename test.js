

var findLucky = function(arr) {
    const hashTable = {};
    
    for (let i=0; i < arr.length; i++) {
        if (hashTable[arr[i]]) {
            hashTable[arr[i]] += 1;
        } else {
            hashTable[arr[i]] = 1;
        }
    };
    let soe = Object.keys(hashTable);
    console.log(parseInt(soe[1]))
};

console.log(findLucky([1,2,2,3,3,3]))