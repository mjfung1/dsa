var invertTree = function(root) {
    if (!root) return root;
    
    let left = root.left
    let right = root.right
    root.right = left;
    root.left =  right;
    if (root.right) invertTree(root.right)
    if (root.left) invertTree(root.left)
    
    return root;
};

function invertTree(root) {
  if (!root) return root;

  [root.left, root.right] = [root.right, root.left];

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  return root;
}

var invertTree = function(root) {
  if (!root) return root;

  function bfs(root) {
    let queue = [root]; // Start with a queue with the root passed in
    while (queue.length) { // Continue to loop while the queue is not empty
      let node = queue.shift(); // Take the first (front) node out of the queue and save it to a variable
      if (node) { // Check to make sure we have a node
        [node.left, node.right] = [node.right, node.left]; // Swap the left and right children of the node 
        queue.push(node.left, node.right); // Push the new left and right children into the queue
      };
    }
  };
  bfs(root); 
  return root; // Once we've seen all the children, we can exit the loop and return our inverted loop
};