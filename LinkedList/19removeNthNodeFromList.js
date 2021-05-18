

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    
    let explorer = dummy;
    let walker = dummy;
    
    for (let i = 0 ; i < n; i++) {
        explorer = explorer.next;
    }
    
    while (explorer.next) {
        explorer = explorer.next;
        walker = walker.next;
    }
    
    walker.next = walker.next.next;
    return dummy.next;
};


///////////////////

var removeNthFromEnd = function(head, n) {
    let runner = head;
    let walker = head;
    
    for (let i = 0; i < n; i++) {
        runner = runner.next;
    }
    // if one element, runner is out of bounds because of code above
    if (!runner) {
        head = head.next;
        return head;
    }
    
    while (runner.next) {
        runner = runner.next;
        walker = walker.next;
    }
    
    walker.next = walker.next.next;
    return head;
};