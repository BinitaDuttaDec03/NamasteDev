/* Problem statement (Leetcode - 145)
    Given the root of a binary tree, return the postorder traversal of its nodes' values.

    Example 1:

    Input: root = [1,null,2,3]

    Output: [3,2,1]
*/

var postorderTraversal = function (root) {
    let res = [];

    function traversal(curr) {
        if (!curr) return;

        traversal(curr.left);
        traversal(curr.right);

        res.push(curr.val);
    }

    traversal(root);

    return res;
};