/* Problem Statement (Leetcode - 24)
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

Explanation:

Example 2:

Input: head = []

Output: []

Example 3:

Input: head = [1]

Output: [1]

Example 4:

Input: head = [1,2,3]

Output: [2,1,3]

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function swapPairs(head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  let prev = dummy,
    curr = head,
    next = curr.next;

  while (curr && next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = prev.next;
    next = curr?.next;
  }

  return dummy.next;
}
