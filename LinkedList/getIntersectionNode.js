var getIntersectionNode = function(headA, headB) {
    const hash = new Set();
    
    while (headA) {
        hash.add(headA)
        headA = headA.next;
        console.log(hash)
    };
    
    
    while (headB) {
        if (hash.has(headB)) {
            return headB
        } 
        headB = headB.next;
    
        
        
    }
    return null;
};


////=================================================

var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;
    
    while (pointerA !== pointerB) {
        pointerA = !pointerA ? headB : pointerA.next
        pointerB = !pointerB ? headA : pointerB.next
    }
    return pointerA;
    
};

////=================================================

var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;
    
    while (pointerA !== pointerB) {
        if (pointerA) {
            pointerA = pointerA.next;
        } else {
            pointerA = headB
        }
        if (pointerB) {
            pointerB = pointerB.next;
        } else {
            pointerB = headA
        }
    }
    return pointerB;
    
};