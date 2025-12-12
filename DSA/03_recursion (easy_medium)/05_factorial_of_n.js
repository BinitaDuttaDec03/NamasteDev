/* Problem Statement:
Write a recursive function fact(n) that returns the factorial of a number n.

Example:
Input: 5

Process: (5 * 4 * 3 * 2 * 1)

Output: 120 */

const n = 5;

function factorial(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

const result = factorial(n);
console.log(result);
