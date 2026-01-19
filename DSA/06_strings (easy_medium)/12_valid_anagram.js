/* Problem Statement (Leetcode - 242)
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters. */

// Approach - 1
// let s = "anagram",
//   t = "nagaram";

// function isAnagram(s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// }

// const result = isAnagram(s, t);
// console.log(result);

// Approach - 2
// let s = "anagram",
//   t = "nagaram";
let s = "rat",
  t = "car";

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let sMap = {};

  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) sMap[s[i]]++;
    else sMap[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!sMap[t[i]] || sMap[t[i]] < 0) return false;

    sMap[t[i]]--;
  }

  return true;
}

const result = isAnagram(s, t);
console.log(result);
