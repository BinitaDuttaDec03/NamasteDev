/* Problem statement (Leetcode - 103)
    Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
*/

var zigzagLevelOrder = function (root) {
    if (!root) return [];

    let q = [root];
    let ans = [];
    let level = 0;

    while (q.length) {
        const levelArr = [];
        const levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            const curr = q.shift();

            if (level % 2 === 0) {
                // push elements in left --> right fashion
                levelArr.push(curr.val);
            } else {
                // push elements in right --> left fashion
                levelArr.unshift(curr.val);
            }

            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }

        ans.push(levelArr);
        level++;
    }

    return ans;
};