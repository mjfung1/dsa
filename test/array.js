const targetSum = (arr, target) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === target) output.push([arr[i], arr[j]])
        }
    }

    return output.length;
};

console.log(targetSum([1,2,1,1,3], 3))