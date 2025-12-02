/* Problem Statement:
Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

Requirements:
Reverse the digits of a 32-bit signed integer.
Return 0 if the result overflows.
Constraints:
Time Complexity: O(d)Where dis the number of digits.

Space Complexity: O(1) — Constant space. */

// const num = -123;
const num = 1534236469;

function reverse(x) {
  let num = x;
  let rev = 0;
  if (num < 0) num = Math.abs(num);

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  //   const limit = Math.pow(2, 31);
  const limit = 2 ** 31;
  rev = x < 0 ? -rev : rev;

  if ((rev < 0 && rev < -limit) || (rev > 0 && rev > limit - 1)) return 0;
  return rev;
}

const result = reverse(num);
console.log(result);
