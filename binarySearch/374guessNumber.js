// 374. Guess Number Higher or Lower

var guessNumber = function(n) {
    let lo = 1;
    let hi = n;
    
    while (lo <= hi) {
        let mid = Math.floor( (hi+lo) / 2);
        
        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === -1) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
};