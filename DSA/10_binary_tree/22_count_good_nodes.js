/* Problem statement (Leetcode - 1448)
    Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

    Return the number of good nodes in the binary tree.
*/

var goodNodes = function (root) {
    let count = 0;

    function traverse(curr, max) {
        if (curr.val >= max) ++count;

        const currMax = Math.max(curr.val, max);

        curr.left && traverse(curr.left, currMax);
        curr.right && traverse(curr.right, currMax);
    }

    traverse(root, -Infinity);

    return count;
};