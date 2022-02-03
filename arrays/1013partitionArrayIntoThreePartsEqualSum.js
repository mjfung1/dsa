

// 1013. Partition Array Into Three Parts With Equal Sum

var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((acc, red) => acc + red);
    
    if (sum % 3 !== 0) return false; 
    let partialSum = sum / 3;
    
    let count = 0;
    let localSum = 0;
    for (let num of arr) {
        localSum += num;
        if (localSum === partialSum) {
            count++;
            localSum = 0;
        }
        
    }

    return count >= 3;
};