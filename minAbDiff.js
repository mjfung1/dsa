//SURPRISINGLY SLOWER THAN BELOW CODE. LESS ELEGANT
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b);
    let minDiff = Infinity;
    let hash = {};
    
    for (let i = 0; i < arr.length - 1; i++) {
        let first = arr[i];
        let sec = arr[i+1];
        let diffs = sec - first;
        
        minDiff = Math.min(diffs, minDiff)
        
        if (hash[diffs]) {
            hash[diffs].push( [first, sec] );
        } else {
            hash[diffs] = [ [first, sec] ];
        }
    }
    return hash[minDiff];
};

var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b);
    let minDiff = Number.MAX_SAFE_INTEGER;
    const output = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let first = arr[i];
        let sec = arr[i+1];
        let diffs = sec - first;
        minDiff = Math.min(minDiff, diffs)
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        let first = arr[i];
        let sec = arr[i+1];
        let diffs = sec - first;
        if (diffs === minDiff) {
            output.push([first, sec]);
        }
    }
    return output;
};