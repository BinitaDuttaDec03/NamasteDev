/* Problem statement (Leetcode - 567)
    Given two strings s1 and s2, return true if s2 contains a   permutation of s1, or false otherwise.

    In other words, return true if one of s1's permutations is the  substring of s2.

    Example 1:

    Input: s1 = "ab", s2 = "eidbaooo"
    Output: true
    Explanation: s2 contains one permutation of s1 ("ba").
    Example 2:

    Input: s1 = "ab", s2 = "eidboaoo"
    Output: false

    Constraints:

    1 <= s1.length, s2.length <= 104
    s1 and s2 consist of lowercase English letters.
*/

var checkInclusion = function (s1, s2) {
    s1 = s1.split("").sort().join("");

    let i = 0, j = s1.length - 1;

    while (j < s2.length) {
        let window = s2.substring(i, j + 1);
        window = window.split("").sort().join("");

        if (window === s1) return true;

        i++;
        j++;
    }

    return false;
};