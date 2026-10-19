/* Problem statement (Leetcode - 226)
    Given the root of a binary tree, invert the tree, and return its root.
*/

var invertTree = function (root) {
    if (!root) return root;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};