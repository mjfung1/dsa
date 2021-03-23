var distributeCandies = function(candyType) {
    const candyTypes = {};
    for (let type of candyType) {
        if (candyTypes[type]) candyTypes[type]++;
        else candyTypes[type] = 1;
    }
    
    let numTypesCandies = Object.keys(candyTypes).length;
    if (numTypesCandies >= candyType.length / 2) {
        return candyType.length/2;
    } else {
        return numTypesCandies;
    }
};

/////////////////////////////
//USING SET AND MATH.MIN
//PRETTY NEAT
var distributeCandies = function(candyType) {
    const candyTypes = new Set(candyType);
    console.log(candyTypes.size)
    return Math.min(candyTypes.size, candyType.length / 2);
};