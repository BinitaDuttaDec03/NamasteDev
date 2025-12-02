/* Problem Statement:
Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

Requirements:
Handles both positive and negative integers.
Return 1 if n is 0(since 0 is a single-digit number).
Examples:
Input:259

Output:3

Input:-1035

Output:4

Input:0

Output:1 */

// let n = 1234;
// let n = 0;
let n = -100;

function countDigits(n) {
  if (n === 0) return 1;

  let num = n;
  if (num < 0) num = Math.abs(num);

  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

const result = countDigits(n);
console.log(result);
