const meetingRooms = (intervals) => {
    //because there can 1 meeting or 0 meetings;
    if (intervals.length < 2) return intervals.length;
    console.log(intervals)
    //sort start times so can compare with endtimes
    intervals.sort((a,b) => a[0] - b[0]);
    console.log(intervals)

    let meetingRoomsEndingTime = [intervals[0][1]];
    
    for (let i = 1; i < intervals.length; i++) {
        let [startTime, endTime] = [...intervals[i]];
        //always picks earliest time available in rooms for next meeting
        let earliestAvailableTimeForNextMeeting = Math.min(...meetingRoomsEndingTime);
        
        if (startTime < earliestAvailableTimeForNextMeeting) {
            //if cannot fit meeting, have to create another room
            //so want to push another ending time;
            meetingRoomsEndingTime.push(endTime);
        } else {
            //if earliest time is less => then can schedule another meeting
            //update the earliest available time to new endtime because we dont need another room
            meetingRoomsEndingTime[meetingRoomsEndingTime.indexOf(earliestAvailableTimeForNextMeeting)] = endTime;
        }

    };

    return meetingRoomsEndingTime.length;
};


console.log(meetingRooms([[0,30], [2,3], [7,10], [1,15], [7,10], [2,6] ]))