/* Problem statement (Leetcode - 160)
    Given the heads of two singly linked-lists headA and headB, return the node at which the two lists  intersect. If the two linked lists have no intersection at all, return null.
*/

// Approach - 1
// var getIntersectionNode = function (headA, headB) {
//     let m = 0, n = 0;
//     let p1 = headA, p2 = headB;

//     while (p1) {
//         m++;
//         p1 = p1.next;
//     }

//     while (p2) {
//         n++;
//         p2 = p2.next;
//     }

//     // ensure the 1st LL is smaller than the 2nd LL (m<n)
//     if (m > n) {
//         let temp = headA;
//         headA = headB;
//         headB = temp;
//     }

//     const diff = Math.abs(n - m);

//     p1 = headA;
//     p2 = headB;

//     for (let i = 0; i < diff; i++) {
//         p2 = p2.next;
//     }

//     while (p1) {
//         if (p1 === p2) return p2;

//         p1 = p1.next;
//         p2 = p2.next;
//     }

//     return null;
// };


// Approach - 2
var getIntersectionNode = function (headA, headB) {
    let p1 = headA, p2 = headB;

    while (p1 != p2) {
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }

    return p1;
};