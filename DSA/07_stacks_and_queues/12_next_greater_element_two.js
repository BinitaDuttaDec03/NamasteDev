/* Problem Statement (Leetcode - 503)
    Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

    The next greater number of a number x is the first greater number to its traversing-order next in the array,    which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for    this number.

    Example 1:

    Input: nums = [1,2,1]
    Output: [2,-1,2]
    Explanation: The first 1's next greater number is 2;
    The number 2 can't find next greater number.
    The second 1's next greater number needs to search circularly, which is also 2.
    Example 2:

    Input: nums = [1,2,3,4,3]
    Output: [2,3,4,-1,4]

    Constraints:

    1 <= nums.length <= 104
    -109 <= nums[i] <= 109
*/

// Approach - 1
// const nextGreaterElements = function (nums) {
//     let st = [];
//     nums = [...nums, ...nums];

//     let n = nums.length;
//     let ans = new Array(n).fill(-1);

//     for (let i = n - 1; i >= 0; i--) {
//         let top = st[st.length - 1];

//         if (top && nums[i] < top) {
//             ans[i] = top;
//         } else {
//             while (st.length) {
//                 top = st[st.length - 1];

//                 if (nums[i] < top) {
//                     ans[i] = top;

//                     break;
//                 } else {
//                     st.pop();
//                 }
//             }
//         }

//         st.push(nums[i]);
//     }

//     return ans.slice(0, Math.floor(n / 2));
// };

// const nums = [1, 2, 3, 4, 3]
// console.log(nextGreaterElements(nums))


// Approach - 2
const nextGreaterElements = function (nums) {
    let n = nums.length;
    let st = [];
    let ans = new Array(n).fill(-1);

    for (let i = 2 * n; i >= 0; i--) {
        let top = st[st.length - 1];

        if (nums[i % n] < top) {
            ans[i % n] = top;
        } else {
            while (st.length) {
                top = st[st.length - 1];

                if (nums[i % n] < top) {
                    ans[i % n] = top;
                    break;
                } else {
                    st.pop();
                }
            }
        }

        st.push(nums[i % n]);
    }

    return ans;
};