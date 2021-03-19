var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a,b) => a[0] - b[0]);
    
    let output = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let [startTime, endTime] = [...intervals[i]];
        let latest = output[output.length -1][1];
        if (startTime <= latest) {
            output[output.length - 1][1] = Math.max(endTime, latest);
        } else {
            output.push(intervals[i]);
        }
    }
    return output;
};