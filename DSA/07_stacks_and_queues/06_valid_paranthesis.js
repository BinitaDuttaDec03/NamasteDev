/* Problem Statement (Leetcode - 20)
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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
s consists of parentheses only '()[]{}'. */

// Approach - 1
// let s = "()";
// let s = "(]";
// let s = "([])";
// let s = "([)]";

// function isValid(s) {
//   if (s.length % 2 !== 0) return false;

//   let st = [];

//   for (let i = 0; i < s.length; i++) {
//     const x = s[i];

//     if (x === "(" || x === "{" || x === "[") {
//       st.push(x);
//     } else if (st.length) {
//       let popped = st.pop();

//       if (
//         (popped === "(" && x !== ")") ||
//         (popped === "{" && x !== "}") ||
//         (popped === "[" && x !== "]")
//       )
//         return false;
//     } else {
//       return false;
//     }
//   }

//   return st.length === 0;
// }

// const result = isValid(s);
// console.log(result);

// Approach - 2
let s = "()";
// let s = "(]";
// let s = "([])";
// let s = "([)]";

function isValid(s) {
  if (s.length % 2 !== 0) return false;

  let st = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      st.push(s[i]);
    } else {
      let top = st.pop();

      if (!top || s[i] !== map[top]) return false;
    }
  }

  return st.length === 0;
}

const result = isValid(s);
console.log(result);
