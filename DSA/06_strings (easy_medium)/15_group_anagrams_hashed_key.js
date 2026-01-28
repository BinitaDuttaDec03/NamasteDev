/* Problem Statement (Leetcode - 49)
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let strs = [""];
// let strs = ["a"];

function groupAnagrams(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let freqArr = Array(26).fill(0);
    let str = strs[i];

    // filling the freq map for each string
    for (let j = 0; j < str.length; j++) {
      let idx = str[j].charCodeAt(0) - "a".charCodeAt();
      freqArr[idx]++;
    }

    let key = "";

    // creating the charFreqMap
    for (let j = 0; j < 26; j++) {
      // key += String.fromCharCode(j) + freqArr[j];
      key += "#" + freqArr[j];
    }

    if (!map[key]) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }

  return Object.values(map);
}

const result = groupAnagrams(strs);
console.log(result);
