/* Problem Statement:
Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

Example:
Input: [5, 2, 6, 1, 3]

Process: 5 + 2 + 6 + 1 + 3 = 17

Output: 17 */

// Approach - 1
// const nums = [5, 2, 6, 1, 3];

// function sum(nums, x) {
//   if (x === nums.length - 1) return nums[x];

//   return nums[x] + sum(nums, x + 1);
// }

// const result = sum(nums, 0);
// console.log(result);

// Approach - 2
const nums = [5, 2, 6, 1, 3];

function sum(n) {
  if (n === 0) return nums[0];

  return nums[n] + sum(n - 1);
}

const result = sum(nums.length - 1);
console.log(result);
