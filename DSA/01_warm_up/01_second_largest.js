/* Problem Statement 1:
Write a function secondLargest(arr) that returns the second largest distinct number in an array.

Requirements:
The array must contain at least two elements.
If all elements are equal, return: No second largest found.
If the array has fewer than two elements, return: Array should have at least two numbers.
Examples:
Input: arr = [0, 3, 5, 2, 7, 9] → Output: 7

Input: arr = [4, 4, 4, 4] → Output: No second largest found

Input: arr = [5] → Output: Array should have at least two numbers

Input: arr = [10, 20] → Output: 10

Constraints:
Time Complexity: O(n) — Single pass through the array.

Space Complexity: O(1) — Constant space. */

// let arr = [4, 2, -1, 0, 2];
// let arr = [0];
// let arr = [-10, -10, 20, -30];
let arr = [10, 20, 20];

function findSecondLargest(arr) {
  if (!Array.isArray(arr)) return "Operation cannot be performed";
  if (arr.length <= 1) return "Array should have at least two numbers";

  let flargest = -Infinity,
    slargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > flargest) {
      slargest = flargest;
      flargest = arr[i];
    } else if (arr[i] > slargest && arr[i] !== flargest) slargest = arr[i];
  }

  return slargest;
}

const result = findSecondLargest(arr);
console.log(result);
