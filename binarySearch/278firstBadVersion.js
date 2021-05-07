// 278. First Bad Version

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 0;
        let hi = n;
        let mid;
        
        while (lo <= hi) {
            mid = Math.floor((lo+hi) / 2);
        
            if (isBadVersion(mid)) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    };
};