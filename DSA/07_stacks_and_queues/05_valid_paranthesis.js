/* Problem Statement (Leetcode - 20)
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine  if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    Example 1:

    Input: s = "()"

    Output: true

    Example 2:

    Input: s = "()[]{}"

    Output: true

    Example 3:

    Input: s = "(]"

    Output: false

    Example 4:

    Input: s = "([])"

    Output: true

    Example 5:

    Input: s = "([)]"

    Output: false

    Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
*/

function isValid(s) {
    if (s.length % 2 !== 0) return false;

    let st = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            st.push(s[i]);
        } else if (st.length === 0) {
            return false;
        } else {
            const top = st.pop();

            if (
                (top === '[' && s[i] === ']') ||
                (top === '{' && s[i] === '}') ||
                (top === '(' && s[i] === ')')
            )
                continue;
            else
                return false;
        }
    }

    return st.length === 0;
}