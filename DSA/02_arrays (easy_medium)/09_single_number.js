/* Problem Statement:
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Examples:
Example 1:
Input: nums = [2, 2, 1]

Output: 1

Example 2:
Input: nums = [4, 1, 2, 1, 2]

Output: 4

Example 3:
Input: nums = [1]

Output: 1

Constraints:
1 ≤ nums.length ≤ 3 × 104
-3 × 104 ≤ nums[i] ≤ 3 × 104
Each element appears twice except one that appears only once. */

// const nums = [2, 2, 1];
const nums = [4, 1, 2, 1, 2];

function singleNumber(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor;
}

const result = singleNumber(nums);
console.log(result);
