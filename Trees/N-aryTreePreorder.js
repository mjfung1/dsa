var preorder = function(root) {
 
    if (!root) return [];
    const queue = [root];
    const preorderer = [];
    
    while (queue.length) {
            //NOTE ITS POP() NOT SHIFT LIKE LEVEL ORDER
            let node = queue.pop();
            preorderer.push(node.val)
            for (let i=node.children.length-1; i >= 0 ; i--) {
                if (node.children[i]) queue.push(node.children[i]);
            }
    }
    return preorderer;
};
