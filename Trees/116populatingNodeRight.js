// 116. Populating Next Right Pointers in Each Node


var connect = function(root) {
    if (!root) return root;
    const queue = [root];
    
    while (queue.length) {
        let size = queue.length;
        
        while (size--) {
            const item = queue.shift();
            if (size === 0) {
                item.next = null;
            } else {
                item.next = queue[0]
            }
            if (item.left) queue.push(item.left)
            if (item.right) queue.push(item.right)

        }
    }
    return root;
};