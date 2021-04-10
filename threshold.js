    // [1,2,5], 6 => 3 => [1,2,3]
    // [40,20,10,30], 70 => 20 => [10, 20, 20, 20]
    // [40, 20, 30, 10], 71 => [10,20,30,40] => 20.5 => [10, 20, 20.5, 20.5]
    // [40, 20, 10, 30], 100 => 40 => [10,20,30,40]

    // [10, 20, 30, 40], 

const findThreshold = (arrNums, desiredSum) => {
    arrNums.sort((a,b) => a - b);
    let sum = 0;
    let result;
    for (let idx = 0; idx < arrNums.length-1; idx++) {
        const num = arrNums[idx];
        const nextNum = arrNums[idx+1]
        sum += num;
        result = (desiredSum - sum) / (arrNums.length - idx - 1)
        if (result < nextNum) {
            while (idx < arrNums.length-1) {
                arrNums[idx+1] = result;
                idx++;
            }
        }
    }


    console.log(result)
    return arrNums;
};


// console.log(findThreshold([1,2,5], 6))  //3 => [1,2,3]
console.log(findThreshold([40, 20, 10 ,30], 70))  // 20 => [10,20,20,20]
// console.log(findThreshold([40, 20, 30, 10], 71))  // 20.5 => [10, 20, 20.5, 20.5]
// console.log(findThreshold([40, 20, 10, 30], 100)) // 40 => [10, 20, 30, 40]
// console.log(findThreshold([40, 20, 10, 30, 10], 190)) // 40 => [10, 20, 30, 40]