// 701. Insert into a Binary Search Tree

// RECURSIVE
var insertIntoBST = function(root, val) {
    if (!root) return root = new TreeNode(val);
    
    if (root.val > val) {
        if (!root.left) {
            root.left = new TreeNode(val)
        } else {
            insertIntoBST(root.left, val)
        }
    } else if (root.val < val) {
        if (!root.right) {
            root.right = new TreeNode(val)
        } else {
            insertIntoBST(root.right, val)
        }
    }
    
    return root
};

// ITERATIVE
var insertIntoBST = function(root, val) {
        var newNode = new TreeNode(val);
        if (!root) {
            root = newNode;
            return root
        } else {
            var current = root;
            let unfound = true;
            while (unfound) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                            current.left = newNode;
                        unfound = false;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (!current.right) {
                            current.right = newNode;
                        unfound = false;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    return root
};