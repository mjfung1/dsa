
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 

var levelOrder = function(root) {
    const queue = [root];
    const levels = [];
    if (queue === null) return [];
    while (queue.length) {
        let size = queue.length;
        const currentLevel = [];
        while (size) {
            const item = queue.shift();
            currentLevel.push(item.val)
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
            size--
        }
        levels.push(currentLevel);
    }
    return levels;
};

const roots = new TreeNode(3)
const leftChild = new TreeNode(5);
const rightChild = new TreeNode(7);
roots.left = leftChild;
roots.right = rightChild;
const rightChildsChild = new TreeNode(13);
rightChild.right = rightChildsChild;

console.log([roots].shift().right.length)
console.log(levelOrder(roots))