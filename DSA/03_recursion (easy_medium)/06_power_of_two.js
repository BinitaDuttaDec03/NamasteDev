/* Problem Statement: (leetcode - 231)
Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.

Example 1:
Input: 8

Process: (8 → 4 → 2 → 1)

Output: true

Example 2:
Input: 18

Output: false 

Constraints:

-231 <= n <= 231 - 1 */

const n = 8;
// const n = 7;

function isPowerOfTwo(n) {
  if (n === 1) return true;
  if (n < 1) return false;

  return isPowerOfTwo(n / 2);
}

const result = isPowerOfTwo(n);
console.log(result);
