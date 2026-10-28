/* Problem statement (Leetcode - 101)
    Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

var isSymmetric = function (root) {
    function traverse(l, r) {
        // check if leaf nodes have been visited
        if (!l && !r) return true;

        // check if leaf node and either 1 of the missing left/right child
        if (!l || !r) return false;

        return (l.val == r.val)
            && traverse(l.left, r.right)
            && traverse(l.right, r.left);
    }

    return traverse(root.left, root.right);
};