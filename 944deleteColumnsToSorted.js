// 944. Delete Columns to Make Sorted

var minDeletionSize = function(strs) {
    let deleted = 0
    
    for (let col = 0; col < strs[0].length; col++) {
        let valid = true;
        for (let row = 0; row < strs.length-1; row++) {
            const first = strs[row][col];
            const sec = strs[row+1][col];

            if (sec < first) valid = false;
        }
        if (!valid) deleted++
    }
    
    return deleted;
};