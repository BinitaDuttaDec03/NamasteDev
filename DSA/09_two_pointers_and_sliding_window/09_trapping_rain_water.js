/* Problem statement (Leetcode - 15)
    Given n non-negative integers representing an elevation map where   the width of each bar is 1, compute how much water it can trap    after raining.

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is     represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6     units of rain water (blue section) are being trapped.
    Example 2:

    Input: height = [4,2,0,3,2,5]
    Output: 9

    Constraints:

    n == height.length
    1 <= n <= 2 * 104
    0 <= height[i] <= 105
*/

var trap = function (a) {
    let n = a.length;

    let maxL = [], maxR = [];

    maxL[0] = a[0];
    maxR[n - 1] = a[n - 1];

    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], a[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], a[i]);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans += Math.min(maxL[i], maxR[i]) - a[i];
    }

    return ans;
};