


// 328. Odd Even Linked List


var oddEvenList = function(head) {
    let oddHead = new ListNode(0);
    let evenHead = new ListNode(0);
    
    let oddTail = oddHead;
    let evenTail = evenHead;
    
    let count = 1;
    
    while (head) {
        if (count % 2 !== 0) {
            oddTail.next = head;
            oddTail = oddTail.next;
        } else {
            evenTail.next = head;
            evenTail = evenTail.next;
        }
        count++;
        head = head.next;
    }
    
    // clipping off any connections;
    evenTail.next = null;
    // connect the two linked list
    oddTail.next = evenHead.next;
    
    return oddHead.next;
    
    
};