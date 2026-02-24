/* Problem Statement: (Leetcode - 136)
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

// Approach - 1
// const nums = [2, 2, 1];
// const nums = [4, 1, 2, 1, 2];

// function singleNumber(nums) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     // if (map.has(nums[i])) {
//     //     map.set(nums[i], map.get(nums[i])++);
//     // } else {
//     //     map.set(nums[i], 1);
//     // }

//     map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (map.get(nums[i]) === 1) {
//       return nums[i];
//     }
//   }
// }

// const result = singleNumber(nums);
// console.log(result);

// Approach - 2
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
