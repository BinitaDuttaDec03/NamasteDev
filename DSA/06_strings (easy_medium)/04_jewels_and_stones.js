/* Problem Statement (Leetcode - 771)
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique. */

// Approach - 1
// // let jewels = "aA",
// //   stones = "aAAbbbb";
// let jewels = "z",
//   stones = "ZZ";

// function numJewelsInStones(jewels, stones) {
//   let count = 0;

//   for (let i = 0; i < jewels.length; i++) {
//     let jewel = jewels[i];

//     for (let j = 0; j < stones.length; j++) {
//       if (stones[j] === jewel) count++;
//     }
//   }

//   return count;
// }

// const result = numJewelsInStones(jewels, stones);
// console.log(result);

// Approach - 2
// let jewels = "aA",
//   stones = "aAAbbbb";
let jewels = "z",
  stones = "ZZ";

function numJewelsInStones(jewels, stones) {
  let count = 0;
  let jewelsSet = new Set();

  for (let i = 0; i < jewels.length; i++) {
    jewelsSet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones[i])) count++;
  }

  return count;
}

const result = numJewelsInStones(jewels, stones);
console.log(result);
