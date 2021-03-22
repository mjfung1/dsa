

//     [1]
//     /  \
//   [4]   [5]
//    /
// [7]  WHEN IT GETS HERE
// 1 + Math.max(0, maxDepth(root.rigth) => returns 0)

// MAX DEPTH OF BINARY TREE
const maxDepth = (root) => {
    if (!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const maxDepth = (root) => {
    if (root === null) return 0;
    const queue = [root]
    let depth = 0;
    
    while(queue.length) {
        let size = queue.length;
        depth++;
        while (size) {
            size--;
            const item = queue.shift();
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
        }
    }
    return depth;
}