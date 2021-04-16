// 977. Squares of a Sorted Array

var sortedSquares = function(nums) {
    const squares = nums.map(num => {
        return num * num;
    })
    const sorted = squares.sort((a,b) => a-b);
    return sorted;
};