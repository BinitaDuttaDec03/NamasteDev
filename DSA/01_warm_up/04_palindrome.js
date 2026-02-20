/* Problem Statement (Leetcode - 9)
Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

Requirements:
Handles both positive and negative integers.
Return false for negative numbers (not Palindromes).
Constraints:
Time Complexity: O(d)Where dis the number of digits.

Space Complexity: O(1)Only a few variables are used. */

// Approach - 1
// // const num = 1221;
// // const num = 1222;
// const num = -1222;

// function isPalindrome(x) {
//   if (x < 0) return false;
//   let num = x,
//     rev = 0;

//   while (num > 0) {
//     rev = rev * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }

//   if (rev === x) return true;
//   return false;
// }

// console.log(isPalindrome(num));

// Approach - 2
// const num = 1221;
// const num = 1222;
const num = -1222;

function isPalindrome(x) {
  if (x < 0) return false;
  x = x.toString();

  const mid = Math.floor(x.length / 2);

  for (let i = 0; i <= mid; i++) {
    if (x[i] !== x[x.length - 1 - i]) return false;
  }

  return true;
}

console.log(isPalindrome(num));
