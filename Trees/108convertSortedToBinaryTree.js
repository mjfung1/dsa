// 108. Convert Sorted Array to Binary Search Tree

var sortedArrayToBST = function(nums) {
    
    function dfs (nums, start, end) {
        if (start === end) return null;
        
        let mid = Math.floor((start+end-1)/2);
        const node = new TreeNode(nums[mid], dfs(nums, start, mid), dfs(nums, mid+1, end))
        return node
    }
    
    return dfs(nums, 0, nums.length)
};