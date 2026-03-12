/* Problem Statement (Leetcode - 21)
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order. */

// Approach - 1
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// function mergeTwoLists(list1, list2) {
//   let dummy = new ListNode();
//   let curr = dummy;

//   while (list1 && list2) {
//     if (list1.val <= list2.val) {
//       curr.next = list1;
//       list1 = list1.next;
//     } else {
//       curr.next = list2;
//       list2 = list2.next;
//     }

//     curr = curr.next;
//   }

//   if (!list1) {
//     curr.next = list2;
//   } else {
//     curr.next = list1;
//   }

//   return dummy.next;
// }

// Approach - 2
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) return list1;
  if (!list1) return list2;
  if (!list2) return list1;

  let dummy = new ListNode();
  let res = dummy;

  let p1 = list1,
    p2 = list2;

  while (p1 || p2) {
    if (!p2 || (p1 && p1.val <= p2.val)) {
      res.next = new ListNode(p1.val);
      p1 = p1.next;
    } else if (p2) {
      res.next = new ListNode(p2.val);
      p2 = p2.next;
    }

    res = res.next;
  }

  return dummy.next;
}
