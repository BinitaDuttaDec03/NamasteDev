/* Problem Statement:
Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

Example:
Input: [5, 2, 6, 1, 3]

Odd Numbers: 5, 1, 3

Output: 9 */

const nums = [5, 2, 6, 1, 3];

function oddSum(n) {
  const isOdd = nums[n] % 2 !== 0;

  if (n === 0) {
    return isOdd ? nums[0] : 0;
  }

  return isOdd ? nums[n] + oddSum(n - 1) : oddSum(n - 1);
}

const result = oddSum(nums.length - 1);
console.log(result);
