var heightChecker = function(heights) {
    // question worded weird
    // NON DECREASING ORDER === INCREASING ORDER
    // sort array
    const increasingHeight = [...heights].sort((a,b) => a-b);
    // compare elements from both
    let numberOfMoves = 0;
    // if diff, increase count
    for (let idx = 0; idx < heights.length; idx++) {
        if (heights[idx] !== increasingHeight[idx]) {
            numberOfMoves++;
        }
    }
    return numberOfMoves;
};