/* Problem statement (Leetcode - 543)
    Given the root of a binary tree, return the length of the diameter of the tree.

    The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

    The length of a path between two nodes is represented by the number of edges between them.
*/

var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;

    function calcDepth(curr) {
        if (!curr) return 0;

        const leftDepth = calcDepth(curr.left);
        const rightDepth = calcDepth(curr.right);

        const currDiameter = leftDepth + rightDepth;
        maxDiameter = Math.max(maxDiameter, currDiameter);

        return 1 + Math.max(leftDepth, rightDepth);
    }

    calcDepth(root);

    return maxDiameter;
};