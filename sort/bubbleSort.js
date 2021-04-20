const bubbleSort = (arr) => {
    let notSorted = true;

    while (notSorted) {
        notSorted = false
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            let nextNum = arr[i+1];

            if (num > nextNum) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                notSorted = true;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([1,4,6,4,3,7]))
console.log(bubbleSort([10,4,6,4,3,7]))
console.log(bubbleSort([9,4,2,5,7,2]))