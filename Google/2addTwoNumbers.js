// 2. Add Two Numbers

// REFACTORED
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode();
    let movingHead = dummyHead;
    
    let carry;
    
    while (l1 || l2) {
        let sum = 0;
        
        // find values of each node and sum it
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        sum += (l1Val + l2Val);
        
        // move pointers forward
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        
         // if carry - do something
        if (carry) sum++;
        
        // do something with sum;
        if (sum > 9) carry = true;
        else carry = false;
        
        // Mod 10 to get last digit if sum greater than 9
         movingHead.next = new ListNode(sum % 10);
        movingHead = movingHead.next;
    }
    
    if (carry) movingHead.next = new ListNode(1);
    
    return dummyHead.next;
};



// VERBOSE
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