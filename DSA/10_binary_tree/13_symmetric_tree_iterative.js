/* Problem statement (Leetcode - 101)
    Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

var isSymmetric = function (root) {
    let q = [root.left, root.right];

    while (q.length) {
        let n1 = q.shift();
        let n2 = q.shift();

        if (!n1 && !n2) continue;
        if (!n1 || !n2) return false;

        if (n1.val !== n2.val) return false;

        q.push(n1.left, n2.right);
        q.push(n1.right, n2.left);
    }

    return true;
};