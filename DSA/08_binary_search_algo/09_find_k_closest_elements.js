/* Problem statement (Leetcode - 658)
    Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

    An integer a is closer to x than an integer b if:

    |a - x| < |b - x|, or
    |a - x| == |b - x| and a < b
    
    Example 1:

    Input: arr = [1,2,3,4,5], k = 4, x = 3

    Output: [1,2,3,4]

    Example 2:

    Input: arr = [1,1,2,3,4,5], k = 4, x = -1

    Output: [1,1,2,3]

    Constraints:

    1 <= k <= arr.length
    1 <= arr.length <= 104
    arr is sorted in ascending order.
    -104 <= arr[i], x <= 104
*/

// Approach - 1
// var findClosestElements = function (a, k, x) {
//     let l = 0, r = a.length - 1;

//     while (l < r) {
//         if (x - a[l] > a[l + k] - x) l++;
//         else r--;
//     }

//     return a.slice(l, l + k);
// };


// Approach - 2
var findClosestElements = function (arr, k, x) {
    let l = 0;
    let r = arr.length - k;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return arr.slice(l, l + k);

    // let ans = [];
    // for (let i = l; i < l + k; i++) {
    //     ans.push(arr[i]);
    // }

    // return ans;
};