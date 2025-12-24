/* Problem Statement (leetcode - 2)
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros. */

// Approach - 1
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// function addTwoNumbers(l1, l2) {
//   let carry = 0;
//   let newHead, curr;

//   while (l1 || l2 || carry) {
//     let sum = 0;
//     let dig = 0;

//     if (l1 && l2) {
//       sum = l1.val + l2.val + carry;
//     } else if (l1) {
//       sum = l1.val + carry;
//     } else if (l2) {
//       sum = l2.val + carry;
//     } else if (carry) {
//       dig = carry;
//     }

//     carry = Math.floor(sum / 10);
//     dig = dig ? dig : sum % 10;

//     l1 = l1?.next;
//     l2 = l2?.next;

//     const newNode = new ListNode(dig);
//     if (!newHead) {
//       newHead = newNode;
//       curr = newHead;
//     } else {
//       curr.next = newNode;
//       curr = curr.next;
//     }
//   }

//   return newHead;
// }

// Approach - 2
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  let carry = 0;

  let dummy = new ListNode();
  let curr = dummy;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

    carry = Math.floor(sum / 10);
    let dig = sum % 10;

    l1 = l1?.next;
    l2 = l2?.next;

    curr.next = new ListNode(dig);
    curr = curr.next;
  }

  return dummy.next;
}
