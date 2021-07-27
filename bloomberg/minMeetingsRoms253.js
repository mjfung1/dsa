var minMeetingRooms = function(intervals) {
    if (intervals.length < 2) return intervals.length;
    // first we need to sort by start time
    intervals.sort((a,b) => a[0] - b[0]);
    
    const firstMeeting = intervals.shift();
    const meetingEndTimes = [firstMeeting[1]];
    
    for (let interval of intervals) {
        const [startTime, endTime] = interval;
        const earliestRoomAvailable = Math.min(...meetingEndTimes);
        
        if (earliestRoomAvailable > startTime) {
            meetingEndTimes.push(endTime);
        } else {
            //update my room time to the latest endTime
            //find index of the earliest room time and update to new rooms endTime
            let index = meetingEndTimes.indexOf(earliestRoomAvailable);
            meetingEndTimes[index] = endTime;
        }
    }


    return meetingEndTimes.length;
};



// ---------------------------------- //
// MIN PRIORITY QUEUE IMPLEMENTATION

var minMeetingRooms = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const minpq = new MinPriorityQueue();

    for (const meeting of intervals) {
        if (!minpq.isEmpty() && minpq.front().element <= meeting[0]) {
            minpq.dequeue();
        }
        minpq.enqueue(meeting[1]);
    }

    return minpq.size();

};

