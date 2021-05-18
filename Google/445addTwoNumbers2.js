// 445. Add Two Numbers II

var addTwoNumbers = function(l1, l2) {
    let reversedL1 = reverseLink(l1);
    let reversedL2 = reverseLink(l2);
    
    let dummyHead = new ListNode(0);
    let movingHead = dummyHead;
    let carry = 0;
    let sum;
    
    while (reversedL1 || reversedL2) {
        let val1 = reversedL1 ? reversedL1.val : 0;
        let val2 = reversedL2 ? reversedL2.val : 0;
        sum = carry + val1 + val2;
        
        reversedL1 = reversedL1 ? reversedL1.next : null;
        reversedL2 = reversedL2 ? reversedL2.next : null;
        
        if (sum > 9) carry = 1;
        else carry = 0;
        
        movingHead.next = new ListNode(sum % 10);
        movingHead = movingHead.next;
    }
    // 0 is falsey in JavaScript
    if (carry) movingHead.next = new ListNode(1);
    
    let newLink = dummyHead.next;
    
    return reverseLink(newLink);
};

var reverseLink = function(link) {
    
    let prev = null;
    
    while (link) {
        let temp = link.next;
        link.next = prev;
        prev = link;
        link = temp;
    }
    
    return prev
};
