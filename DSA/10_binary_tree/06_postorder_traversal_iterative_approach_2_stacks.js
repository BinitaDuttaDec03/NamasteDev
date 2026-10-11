/* Problem statement (Leetcode - 145)
    Given the root of a binary tree, return the postorder traversal of its nodes' values.

    Example 1:

    Input: root = [1,null,2,3]

    Output: [3,2,1]
*/

var postorderTraversal = function (root) {
    if (!root) return [];

    let s1 = [root], s2 = [];

    while (s1.length) {
        let curr = s1.pop();

        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    let ans = [];

    while (s2.length) {
        ans.push(s2.pop().val);
    }

    return ans;
};