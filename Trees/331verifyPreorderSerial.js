
// time o(n)
// space o(n)
var isValidSerialization = function(preorder) {
    const nodes = preorder.split(',');
    
    let slots = 1;
    
    for (let node of nodes) {
        slots--;
        
        if (slots < 0) return false;
        
        if (node !== '#') {
            slots += 2;
        }
    }
    
    return slots === 0;
};

// better
// time o(n)
// space o(1)

var isValidSerialization = function(preorder) {
    let slots = 1;
    
    for (let i = 0; i < preorder.length; i++) {
        const char = preorder[i];
        
        if (char === ',') {
            slots--;
            if (slots < 0) return false;
            
            const prevChar = preorder[i-1];
            if (prevChar !== '#') slots += 2;
        }
    }
    
    if (preorder[preorder.length -1] === '#') {
        slots--;
    } else {
        slots++
    }
    return slots === 0;
};