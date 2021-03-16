var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;

};

var middleNode = function(head) {
    //find the length of linked list
    //divide by 2 to find middle index
    //if even length middleIndex + 1;
    let length = 0;
    let on = head;
    while(on) {
        on = on.next;
        length++
    }
    
    let mid = Math.floor(length / 2);
    // if (length % 2 === 0) mid += 1;
    console.log(mid)
    
    let i = 0;
    on = head;
    while (i < mid) {
        on = on.next;
        i++;
    }
    return on;
};