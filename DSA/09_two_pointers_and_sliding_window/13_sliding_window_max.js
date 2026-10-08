/* Problem statement (Leetcode - 239)
    You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

    Return the max sliding window.

    Example 1:

    Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
    Output: [3,3,5,5,6,7]
    Explanation: 
    Window position                Max
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
     1 [3  -1  -3] 5  3  6  7       3
     1  3 [-1  -3  5] 3  6  7       5
     1  3  -1 [-3  5  3] 6  7       5
     1  3  -1  -3 [5  3  6] 7       6
     1  3  -1  -3  5 [3  6  7]      7
    Example 2:

    Input: nums = [1], k = 1
    Output: [1]

    Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    1 <= k <= nums.length
*/

// Approach - 1
// var maxSlidingWindow = function (nums, k) {
//     let res = [];

//     for (let i = 0; i < nums.length - k + 1; i++) {
//         let max = -Infinity;

//         for (let j = 0; j < k; j++) {
//             max = Math.max(max, nums[i + j]);
//         }

//         res.push(max);
//     }
//     return res;
// };


// Approach - 2
var maxSlidingWindow = function (nums, k) {
    let i = 0, j = 0;
    let res = [], q = [];

    while (j < nums.length) {
        while (q.length && nums[j] > q[q.length - 1]) {
            q.pop();
        }

        q.push(nums[j]);

        if (j - i >= k - 1) {
            res.push(q[0]);

            if (nums[i] === q[0]) {
                q.shift();
            }

            i++;
        }

        j++;
    }

    return res;
};