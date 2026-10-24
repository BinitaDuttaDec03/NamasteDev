/* Problem statement (Leetcode - 572)
    Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

    A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
*/

function createTreeHash(root) {
    // serialize tree
    let hashedStr = "";

    function traverse(curr) {
        // preorder traversal
        // create hash with each nodes seperated by delimeter '-'
        if (!curr) {
            hashedStr += "-#"; // # - denoting null node
            return;
        }

        hashedStr += "-" + curr.val;

        traverse(curr.left);
        traverse(curr.right);
    }

    traverse(root);

    return hashedStr;
}

var isSubtree = function (root, subRoot) {
    const rootHash = createTreeHash(root);
    const subRootHash = createTreeHash(subRoot);

    if (rootHash.includes(subRootHash)) return true;
    return false;
};