/* Problem Statement: (Leetcode - 283)
Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

Note:You must do this in-place without making a copy of the array.

Examples
Example 1:

Input:nums = [0,1,0,3,12]

Output:[1,3,12,0,0]

Example 2:

Input:nums = [0]

Output:[0]

Constraints:
1 <= nums.length <= 104
-2 31 <= prices[i] <= 104-1 */

// let nums = [0, 1, 0, 3, 12];
let nums = [0];

function moveZeroes(nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[x], nums[i]] = [nums[i], nums[x]];
      x++;
    }
  }
}

moveZeroes(nums);
console.log(nums);
