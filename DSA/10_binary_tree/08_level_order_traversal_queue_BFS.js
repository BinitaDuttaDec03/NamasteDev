/* Problem statement (Leetcode - 102)
    Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

var levelOrder = function (root) {
    if (!root) return [];

    let q = [root];
    let ans = [];

    while (q.length) {
        let level = q.length;
        let temp = [];

        for (let i = 0; i < level; i++) {
            let curr = q.shift();
            temp.push(curr.val);

            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }

        ans.push(temp);
    }

    return ans;
};