

// 297. Serialize and Deserialize Binary Tree
var serialize = function(root) {
    
    let output = [];
    
    function preorder(root) {
        if (!root) {
            output.push('N');
            return;
        }
        
        output.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    
    preorder(root);
    
    return output.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',');
    let i = 0;
    
    function dfs() {
        if (data[i] === 'N') {
            i++;
            return null;
        }
        
        let newNode = new ListNode( Number(data[i]) );
        i++;
        
        newNode.left = dfs();
        newNode.right = dfs();
        
        return newNode;
    }
    
    return dfs();
};