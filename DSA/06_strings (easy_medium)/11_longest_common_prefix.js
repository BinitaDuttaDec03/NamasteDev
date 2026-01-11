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
// let strs = ["flower", "flower", "flower", "flower"];
let strs = ["a", "a", "b"];

function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];

  let str1 = strs[0];
  let result = "";

  for (let i = 1; i < strs.length; i++) {
    let currentWord = strs[i];

    for (let j = 0; j < currentWord.length; j++) {
      if (str1.substring(0, j + 1) === currentWord.substring(0, j + 1))
        result = str1.substring(0, j + 1);
      else return result;
    }
  }

  return result;
}

const result = longestCommonPrefix(strs);
console.log(result);
