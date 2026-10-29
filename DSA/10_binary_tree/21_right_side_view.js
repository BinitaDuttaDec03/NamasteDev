/* Problem statement (Leetcode - 199)
    Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
*/

var rightSideView = function (root) {
    if (!root) return [];

    let ans = [], q = [root];

    while (q.length) {
        const levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            const curr = q.shift();

            if (i === 0) ans.push(curr.val);

            curr.right && q.push(curr.right);
            curr.left && q.push(curr.left);
        }
    }

    return ans;
};