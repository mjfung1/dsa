const selectionSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let lowest = i;
        for (let j = i+1; j < nums.length; j++) {
            if (nums[lowest] > nums[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            [nums[lowest], nums[i]] = [nums[i], nums[lowest]]
        }
        
    }

    return nums;
};

console.log(selectionSort([1,4,6,4,3,7]))
console.log(selectionSort([10,4,6,4,3,7]))
console.log(selectionSort([9,4,2,5,7,2]))