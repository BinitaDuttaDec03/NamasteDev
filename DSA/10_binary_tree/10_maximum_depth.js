/* Problem statement (Leetcode - 104)
    Given the root of a binary tree, return its maximum depth.

    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

// Approach - 1 (top-down)
// var maxDepth = function (root) {
//     if (!root) return 0;

//     let md = 1; // max depth

//     function traverse(curr, d) {
//         md = Math.max(md, d);

//         curr.left && traverse(curr.left, d + 1);
//         curr.right && traverse(curr.right, d + 1);
//     }

//     traverse(root, md);

//     return md;
// };


// Approach - 2 (bottom-up)
var maxDepth = function (root) {
    if (!root) return 0;

    const lMax = maxDepth(root.left);
    const rMax = maxDepth(root.right);

    return 1 + Math.max(lMax, rMax);
};
