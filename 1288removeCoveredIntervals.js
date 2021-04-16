// 1288. Remove Covered Intervals

var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0] || b[1]-a[1]);
    
    let count = 0;
    let prevEndtime = 0;
    
    
    for (const interval of intervals) {
        
        
        const endTime = interval[1];
        if (endTime > prevEndtime) {
            prevEndtime = endTime;
            count++;
        }
    }
    
    
    
    return count;
};