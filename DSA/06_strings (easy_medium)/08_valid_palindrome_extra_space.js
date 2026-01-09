/* Problem Statement (leetcode - 125)
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters. */

// let s = "A man, a plan, a canal: Panama";
// let s = "race a car";
let s = " ";

function isPalindrome(s) {
  s = s.toLowerCase();

  let filteredStr = "";
  let rev = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredStr += s[i];
      rev = s[i] + rev;
    }
  }

  return filteredStr === rev ? true : false;
}

const result = isPalindrome(s);
console.log(result);
