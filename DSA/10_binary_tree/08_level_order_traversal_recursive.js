/* Problem statement (Leetcode - 102)
    Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

var levelOrder = function (root) {
    if (!root) return [];

    let ans = [];

    function traversal(curr, level) {
        if (!ans[level]) ans[level] = [];

        ans[level].push(curr.val);

        curr.left && traversal(curr.left, level + 1);
        curr.right && traversal(curr.right, level + 1);
    }

    traversal(root, 0);

    return ans;
};