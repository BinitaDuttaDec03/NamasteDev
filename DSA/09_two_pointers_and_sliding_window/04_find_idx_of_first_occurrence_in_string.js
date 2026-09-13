/* Problem statement (Leetcode - 28)
    Given two strings needle and haystack, return the index of the  first occurrence of needle in haystack, or -1 if needle is not   part of haystack.

    Example 1:

    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.
    Example 2:

    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.

    Constraints:

    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.
*/

// Approach - 1
// var strStr = function (haystack, needle) {
//     return haystack.indexOf(needle);
// };


// Approach - 2
var strStr = function (haystack, needle) {
    let n = needle.length;
    let h = haystack.length;

    for (let i = 0; i <= h - n; i++) {
        let count = 0;

        for (let j = 0; j < n; j++) {
            if (haystack[i + j] !== needle[j]) break;
            else count++;
        }

        if (count === n) return i;
    }

    return -1;
};