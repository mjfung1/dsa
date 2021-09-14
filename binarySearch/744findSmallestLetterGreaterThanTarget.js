// 744. Find Smallest Letter Greater Than Target


var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while ( left < right ) {
        let midIdx = Math.floor(( left + right ) / 2);
        let letter = letters[midIdx]
        if (letter > target) {
            right = midIdx;
        } else {
            left = midIdx + 1;
        } 
    }
    
    if (letters[left] <= target) return letters[0];

    return letters[left];
    
};

