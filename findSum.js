const findSum = (arr, target) => {
    const output = []; 
    const wantHash = {};

    for (const num of arr) {
        wantHash[num] = wantHash[num] + 1 || 1;
        
    }
    
    for (const num of arr) {
        let want = target - num;
        if (want in wantHash) {
            output.push([num, want])
        }
    }
    return output;
}

// const findSum = (arr, target) => {
//     const output= [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) output.push([arr[i], arr[j]])
//         }
//     }
//     return output;
// }


// console.log(findSum([1,1,4,5,3,5,2,6,6], 7))
console.log(findSum([1,2,1,1,3], 3))