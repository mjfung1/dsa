const findSum = (arr, target) => {
    const output = []; 
    const wantHash = {};

    for (const num of arr) {
        wantHash[num] = true;
        
    }
    
    for (const num of arr) {
        let want = target - num;
        if (want in wantHash) {
            output.push([num, want])
        }
    }
    return output;
}

console.log(findSum([1,1,4,5,3,5,2,6,6], 7))