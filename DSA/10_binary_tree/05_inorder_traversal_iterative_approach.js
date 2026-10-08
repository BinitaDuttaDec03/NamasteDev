/* Problem statement (Leetcode - 94)
    Given the root of a binary tree, return the inorder traversal of its nodes' values.

    Example 1:

    Input: root = [1,null,2,3]

    Output: [1,3,2]
*/

var inorderTraversal = function (root) {
    let curr = root;
    let st = [], ans = [];

    while (curr || st.length) {
        while (curr) {
            st.push(curr);
            curr = curr.left;
        }

        curr = st.pop();
        ans.push(curr.val);
        curr = curr.right;
    }

    return ans;
};