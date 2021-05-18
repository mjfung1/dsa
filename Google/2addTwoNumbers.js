// 2. Add Two Numbers

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode();
    let movingHead = dummyHead;
    
    let carry;
    
    while (l1 || l2) {
        let sum = 0;
        
        if (!l1) {
            sum += l2.val;
            l2 = l2.next;
        } else if (!l2) {
            sum += l1.val;
            l1 = l1.next;
        } else {
            // both l1 l2 exist
            sum += (l1.val + l2.val);
            l1 = l1.next;
            l2 = l2.next;
        }
        
         // if carry - do something
        if (carry) sum++;

        
        // do something with sum;
        if (sum > 9) {
            // to get last digit
            sum = sum % 10;
            carry = true;
        } else {
            carry = false;
        }
        
        movingHead.next = new ListNode(sum);
        movingHead = movingHead.next;
    }
    
    if (carry) movingHead.next = new ListNode(1);
    
    return dummyHead.next;
};