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