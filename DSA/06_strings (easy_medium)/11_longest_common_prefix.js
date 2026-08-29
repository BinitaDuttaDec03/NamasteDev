/* Problem Statement (Leetcode - 14)
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty. */

// let strs = ["flower", "flow", "flight"];
// let strs = ["dog", "racecar", "car"];
// let strs = ["a"];
let strs = ["flower", "flower", "flower", "flower"];

// Approach - 1
// function longestCommonPrefix(strs) {
//   if (strs.length === 1) return strs[0];

//   let x = 0;

//   while (x < strs[0].length) {
//     let ch = strs[0][x];

//     for (let i = 1; i < strs.length; i++) {
//       if (strs[i][x] !== ch || x === strs[i].length) {
//         return strs[0].substring(0, x);
//       }
//     }

//     x++;
//   }

//   return strs[0];
// }


// Approach - 2
function longestCommonPrefix(strs) {
  let base = strs[0];
  let x = 0;

  while (x < base.length) {
    for (let i = 1; i < strs.length; i++) {
      let str = strs[i];

      if (str.length < x || str[x] !== base[x]) {
        return base.substring(0, x);
      }

    }

    x++;
  }

  return base;
}

const result = longestCommonPrefix(strs);
console.log(result);
