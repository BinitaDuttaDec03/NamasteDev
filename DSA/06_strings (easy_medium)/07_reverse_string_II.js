/* Problem Statement (Leetcode - 541)
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104 */

// let s = "abcdefg",
//   k = 2;
let s = "abcd",
  k = 2;

function reverseStr(s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x += (2 * k)) { // each iteration jumps with 2k steps
    let n = k; // k elements to be reversed
    let mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
      let temp = s[x + i]; // normal reverse logic jumping with x steps
      s[x + i] = s[x + n - 1 - i];
      s[x + n - 1 - i] = temp;
    }
  }

  return s.join("");
}

const result = reverseStr(s, k);
console.log(result);
