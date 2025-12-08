/* Problem Statement: (Leetcode - 121)
You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Examples:
Example 1:
Input:prices = [7, 1, 5, 3, 6, 4]

Output:5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

Example 2:
Input:prices = [7,6,4,3,1]

Output:0

Explanation: Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104 */

// Approach - 1
// const prices = [7, 1, 5, 3, 6, 4];
// // const prices = [7, 6, 4, 3, 1];

// function maxProfit(prices) {
//   if (prices.length === 1) return 0;

//   let maxP = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] - prices[i] > maxP) {
//         maxP = prices[j] - prices[i];
//       }
//     }
//   }

//   return maxP;
// }

// const result = maxProfit(prices);
// console.log(result);

// Approach - 2
// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];

function maxProfit(prices) {
  if (prices.length === 1) return 0;

  let maxP = 0;
  let x = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - x > maxP) {
      maxP = Math.max(maxP, prices[i] - x);
    } else if (prices[i] < x) {
      x = Math.min(x, prices[i]);
    }
  }

  return maxP;
}

const result = maxProfit(prices);
console.log(result);
