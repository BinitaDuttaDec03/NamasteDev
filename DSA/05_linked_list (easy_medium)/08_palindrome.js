/* Problem Statement (Leetcode - 234)
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:

Input: head = [1,2,2,1]
Output: true
Example 2:

Input: head = [1,2]
Output: false

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9 */

// Approach - 1
function isPalindrome(head) {
  let arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  const n = arr.length;
  const mid = Math.floor(n / 2);

  for (let i = 0; i < mid; i++) {
    if (arr[i] !== arr[n - i - 1]) return false;
  }

  return true;
}

// Approach - 2
function isPalindrome(head) {
  // find the mid node
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the 2nd half of the LL
  let prev = null,
    curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // find palindrome or not
  let p1 = head,
    p2 = prev;

  while (p2) {
    if (p2.val !== p1.val) return false;

    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}
