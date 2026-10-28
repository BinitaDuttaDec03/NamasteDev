/* Problem statement (Leetcode - 236)
    Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

    According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

var lowestCommonAncestor = function (root, p, q) {
    let lca = null;

    function traverse(curr) {
        let count = 0;

        if (!curr) return 0;

        let leftSubtree = traverse(curr.left);
        let rightSubtree = traverse(curr.right);

        if (curr.val === p.val || curr.val === q.val) count++;

        count += leftSubtree + rightSubtree;

        if (count === 2 && !lca) lca = curr;

        return count;
    }

    traverse(root);

    return lca;
};