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

// Approach - 1
// // const n = 8;
// const n = 7;

// function isPowerOfTwo(n) {
//   if (n === 1 || n === 2) return true;
//   if (n < 2 || n === 0) return false;

//   return isPowerOfTwo(n / 2);
// }

// if (n < 0) n = Math.abs(n);
// const result = isPowerOfTwo(n);
// console.log(result);

// Approach - 2
const n = 8;
// const n = 7;

function isPowerOfTwo(n) {
  if (n === 1) return true;
  if (n % 2 !== 0 || n < 1) return false;

  return isPowerOfTwo(n / 2);
}

if (n < 0) n = Math.abs(n);
const result = isPowerOfTwo(n);
console.log(result);
