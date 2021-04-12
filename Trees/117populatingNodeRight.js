// 117. Populating Next Right Pointers in Each Node II

var connect = function(root) {
    if (!root) return null;
    const queue = [root];
    
    while (queue.length) {
        let size = queue.length;
        
        while (size--) {
            let item = queue.shift();
            
            if (size !== 0) item.next = queue[0]

            if (item.left) queue.push(item.left)
            if (item.right) queue.push(item.right)
        }
    }
    
    return root
};