/* Problem statement (Leetcode - 144)
    Given the root of a binary tree, return the preorder traversal of its nodes' values.

    Example 1:

    Input: root = [1,null,2,3]

    Output: [1,2,3]
*/

var preorderTraversal = function (root) {
    if (!root) return [];

    let st = [root];
    let res = [];

    while (st.length) {
        let curr = st.pop();
        res.push(curr.val);


        curr.right && st.push(curr.right);
        curr.left && st.push(curr.left);
    }

    return res;
};