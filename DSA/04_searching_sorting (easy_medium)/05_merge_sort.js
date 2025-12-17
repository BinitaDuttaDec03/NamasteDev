/* Problem Statement: (Leetcode - 912)
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessarily unique.

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104 */

const nums = [5, 2, 3, 1];

function merge(left, right) {
  const n1 = left.length;
  const n2 = right.length;

  let res = [];

  let i = 0,
    j = 0;

  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)];
}

function sortArray(nums) {
  const n = nums.length;

  if (n === 1) return nums;

  const mid = Math.floor(n / 2);

  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));

  return merge(left, right);
}

const result = sortArray(nums);
console.log(result);
