// 74. Search a 2D Matrix

// BINARY SEARCH
// TRICK TO PROBLEM
// IF YOU WANT TO ITERATE TRHU 2D MATRIX LIKE FLAT MATRIX
// TO GET ROW ==>  ~~(INDEX / COLUMN LENGTH);
// TO GET COLUMN ==>  INDEX % COLUMN LENGTH;

var searchMatrix = function(matrix, target) {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    let lo = 0;
    let hi = (rowLength * colLength) - 1;
    
    while (lo <= hi) {
        let mid = ~~((lo + hi) / 2);
        let row = ~~(mid / colLength);
        let col = mid % colLength;
        let midVal = matrix[row][col];
        
        if (target === midVal) {
            return true;
        } else if (target > midVal){
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return false;
};












// SLOW
// N LOG(N)
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let sub = matrix[i];
        if (sub[sub.length-1] >= target) {
            return search(sub, target)
        }
    }
    return false
};

var search = function(nums, target) {
        let lo = 0;
        let hi = nums.length - 1;
    
        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            let midVal = nums[mid];
            if (target === midVal) {
                return true;
            } else if (target > midVal) {
                lo = mid + 1; 
            } else {
                hi = mid - 1;
            }
        }
    return false;
};