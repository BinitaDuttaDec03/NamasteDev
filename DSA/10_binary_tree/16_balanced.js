/* Problem statement (Leetcode - 110)
    Given a binary tree, determine if it is height-balanced.
*/

var isBalanced = function (root) {
    let ans = true;

    function traverse(curr) {
        if (!curr) return 0;

        let leftDepthSubtree = traverse(curr.left);
        let rightDepthSubtree = traverse(curr.right);

        if (Math.abs(leftDepthSubtree - rightDepthSubtree) > 1)
            ans = ans && false;

        return 1 + Math.max(leftDepthSubtree, rightDepthSubtree);
    }

    traverse(root);

    return ans;
};