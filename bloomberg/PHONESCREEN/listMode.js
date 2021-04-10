const listMode = (numArr) => {
    let hashFreq = {}
    let output = [];

    for (const num of numArr) {
        hashFreq[num] = hashFreq[num] + 1 || 1
    }
    
    let maxFreq = Math.max(...Object.values(hashFreq));

    for (const num in hashFreq) {
        if (hashFreq[num] === maxFreq) output.push(num)
    }

    return output;
}

// console.log(listMode([1,2,3]))
// console.log(listMode([1,2,2,4]))
// console.log(listMode([1,2,3,2,1]))
console.log(listMode([1,2,3,2,1,4,4,4,5,6,5,4,7,89,9,8,7,1]))
console.log(listMode([1,2,3,2,1,2,1,1,1,1,4,5,6,77,7,7,7,7,7,7,7,7,7,7,7]))