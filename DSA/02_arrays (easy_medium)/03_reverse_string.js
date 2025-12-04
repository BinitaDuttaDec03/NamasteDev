/* Problem Statement: (Leetcode - 344)
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.

Examples:
Example 1:
Input:s = [“h”,”e”,”l”,”l”,”o”]

Output:[“o”,”l”,”l”,”e”,”h”]

Example 2:
Input:s = [“H”,”a”,”n”,”n”,”a”,”h”]

Output:[“h”,”a”,”n”,”n”,”a”,”H”] */

// Approach - 1
// const s = ["h", "e", "l", "l", "o"];
// // const s = ["H", "a", "n", "n", "a", "h"];

// function reverseString(s) {
//   let i = 0,
//     j = s.length - 1;

//   while (i <= j) {
//     [s[i], s[j]] = [s[j], s[i]];

//     i++;
//     j--;
//   }
// }

// reverseString(s);
// console.log(s);

// Approach - 2
// const s = ["h", "e", "l", "l", "o"];
// const s = ["H", "a", "n", "n", "a", "h"];
const s = [
  "A",
  " ",
  "m",
  "a",
  "n",
  ",",
  " ",
  "a",
  " ",
  "p",
  "l",
  "a",
  "n",
  ",",
  " ",
  "a",
  " ",
  "c",
  "a",
  "n",
  "a",
  "l",
  ":",
  " ",
  "P",
  "a",
  "n",
  "a",
  "m",
  "a",
];

function reverseString(s) {
  let n = s.length;
  let halfLen = Math.floor(n / 2);

  for (let i = 0; i < halfLen; i++) {
    [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]];
  }
}

reverseString(s);
console.log(s);
