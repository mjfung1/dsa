//here watch out for when either root starts null.
//if it is just dfs the other side.

const minDepth = (root) => {
    //base case;
    if (!root) return 0;

    //  edge case for when either root starts with null;
    // if null, go other way
    if (!root.left) {
        return 1 + minDepth(root.right);
    } else if (!root.right) {
        return 1 + minDepth(root.left);
    }

    // add 1 for height when reach base case. pick min heigth.

    // dont care about max height.  always picking min height all the way up.
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};