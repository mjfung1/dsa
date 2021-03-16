function sumZero(nums) {
    //given a sorted array of numbers
    //return return pairs that add to zero
    //return undefined if not found
    const pairs = [];
    let firstIndex = 0;
    let lastIndex = nums.length - 1;
    while (firstIndex < lastIndex) {
        let sum = nums[lastIndex] + nums[firstIndex];
        if (sum === 0) {
            pairs.push([nums[lastIndex], nums[firstIndex]]);
            firstIndex++;
            lastIndex--;
        } else if (sum < 0) {
            firstIndex++;
        } else {
            lastIndex--;
        }
    }
    if (pairs.length === 0) return undefined;
    return pairs;
}

console.log(sumZero([-5,-3,-2,-1,0,1,2,3,4,5]))
console.log(sumZero([-5,-3,-2,-1,0,1,2,3,4,5]))