// [2,3,5,7] => [3,5,7] => 1

const validTriangle = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length-2; i++) {
        let firstNum = arr[i];
        let secNum = arr[i+1];
        let thirdNum = arr[i+2];

        if (firstNum + secNum > thirdNum) count++;
    }
    return count;
}

console.log(validTriangle([2,3,5,7,10,19,20]))