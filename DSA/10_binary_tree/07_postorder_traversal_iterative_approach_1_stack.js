/* Problem statement (Leetcode - 145)
    Given the root of a binary tree, return the postorder traversal of its nodes' values.

    Example 1:

    Input: root = [1,null,2,3]

    Output: [3,2,1]
*/

var postorderTraversal = function (root) {
    let st = [], ans = [];
    let curr = root;
    let lastVisited = null;

    while (curr || st.length) {
        while (curr) {
            st.push(curr);
            curr = curr.left;
        }

        const top = st[st.length - 1];

        if (top.right && top.right != lastVisited) {
            curr = top.right;
        } else {
            ans.push(top.val);
            lastVisited = st.pop();
        }
    }

    return ans;
};