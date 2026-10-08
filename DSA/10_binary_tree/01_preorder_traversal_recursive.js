/* Problem statement (Leetcode - 144)
    Given the root of a binary tree, return the preorder traversal of   its nodes' values.

    Example 1:

    Input: root = [1,null,2,3]

    Output: [1,2,3]
*/

var preorderTraversal = function (root) {
    let res = [];

    function traversal(curr) {
        if (!curr) return;

        res.push(curr.val);

        traversal(curr.left);
        traversal(curr.right);
    }

    traversal(root);

    return res;
};