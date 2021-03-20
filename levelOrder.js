var levelOrder = function(root) {
//     edge case
    if (!root) return [];
//     use a queue store root
    const queue = [root];
    const result = [];                     //  queue = []
//     shift from queue until no length        result = [[3] [9,20], [15,7]]
    while (queue.length) {
        let sizeOfSubarray = queue.length;     // sub = [15, 7]
        let subArr = [];
        while(sizeOfSubarray) {       // 0
            sizeOfSubarray--;
            const item = queue.shift();  //7
            subArr.push(item.val);
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
        }
        result.push(subArr);
    }
//     and push to new array until no values left in queue
    return result;
};