// 1474. Delete N Nodes After M Nodes of a Linked List

var deleteNodes = function(head, m, n) {
    let dummyHead = head;
    
    while (dummyHead) {
        let nextNode;
        let i = 0;
        let j = 0;
        
        while (dummyHead && i < m-1) {
            dummyHead = dummyHead.next;
            i++;
        }
        
        if (!dummyHead) break;
        
        nextNode = dummyHead;
        
        while (dummyHead && j <= n) {
            dummyHead = dummyHead.next;
            j++;
        }
        
        nextNode.next = dummyHead;
    }
    
    return head
};