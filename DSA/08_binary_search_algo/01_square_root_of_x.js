/* Problem Statement (Leetcode - 69)
    Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

    You must not use any built-in exponent function or operator.

    For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

    Example 1:

    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.
    Example 2:

    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since we round     it down to the nearest integer, 2 is returned.
    
    Constraints:

    0 <= x <= 231 - 1
*/

// Approach - 1
// var mySqrt = function (x) {
//     // return Math.trunc(Math.pow(x, 0.5));
//     return Math.trunc(x ** 0.5);
// };

// const x = 8
// console.log(mySqrt(x))


// Approach - 2
// var mySqrt = function (x) {
//     for (let i = 0; i <= x; i++) {
//         if (i * i === x) return i;
//         else if (i * i > x) return i - 1;
//     }
// };

// const x = 8
// console.log(mySqrt(x))


// Approach - 3
var mySqrt = function (x) {
    if (x < 2) return x;

    let l = 2, r = Math.floor(x / 2);
    while (l <= r) {
        // let mid = Math.floor((l + r) / 2);
        let mid = l + Math.floor((r - l) / 2);

        if (x === mid * mid) return mid;
        else if (x < mid * mid) r = mid - 1;
        else l = mid + 1;
    }

    return r;
};

const x = 40
console.log(mySqrt(x))