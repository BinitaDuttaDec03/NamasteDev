/* Problem statement (Leetcode - 112)
    Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

    A leaf is a node with no children.
*/

// Approach - 1 (top-down)
// var hasPathSum = function (root, targetSum) {
//     if (!root) return false;

//     let ans = false;

//     function traverse(curr, sum) {
//         const newSum = curr.val + sum;

//         if (!curr.left && !curr.right) {
//             ans = ans || newSum === targetSum;
//         }

//         curr.left && traverse(curr.left, newSum);
//         curr.right && traverse(curr.right, newSum);
//     }

//     traverse(root, 0);

//     return ans;
// };


// Approach - 2 (bottom-up)
var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) {
        // return targetSum - root.val === 0;
        return targetSum === root.val;
    }

    const leftSubtreeHasPathSum = hasPathSum(root.left, targetSum - root.val);
    const rightSubtreeHasPathSum = hasPathSum(root.right, targetSum - root.val);

    return leftSubtreeHasPathSum || rightSubtreeHasPathSum;
};