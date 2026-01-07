/* Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

Constraints:

2 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string. */

// Approach - 1
// // let s = "RLRRLLRLRL";
// let s = "RLRRRLLRLL";
// // let s = "LLLLRRRR";

// function balancedStringSplit(s) {
//   let lCount = 0,
//     rCount = 0;
//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "L") lCount++;
//     else rCount++;

//     if (lCount === rCount) result++;
//   }

//   return result;
// }

// const result = balancedStringSplit(s);
// console.log(result);

// Approach - 2
// let s = "RLRRLLRLRL";
let s = "RLRRRLLRLL";
// let s = "LLLLRRRR";

function balancedStringSplit(s) {
  let temp = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") temp++;
    else temp--;

    if (temp === 0) result++;
  }

  return result;
}

const result = balancedStringSplit(s);
console.log(result);
