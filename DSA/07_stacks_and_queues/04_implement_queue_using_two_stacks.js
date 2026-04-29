/* Problem Statement (Leetcode - 232)
    Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

    Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.
    Notes:

    You must use only standard operations of a stack, which means only push to top, peek/pop    from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively. You may simulate a     stack using a list or dequeue (double-ended queue) as long as you use only a stack's  standard operations.
    
    Example 1:

    Input
    ["MyQueue", "push", "push", "peek", "pop", "empty"]
    [[], [1], [2], [], [], []]
    Output
    [null, null, null, 1, 1, false]

    Explanation
    MyQueue myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    myQueue.peek(); // return 1
    myQueue.pop(); // return 1, queue is [2]
    myQueue.empty(); // return false
*/

function MyQueue() {
    this.s1 = [];
    this.s2 = [];
}

function push() {
    this.s1.push(x);
}

function pop() {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2.pop();
}

function top() {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2[this.s2.length - 1];
}

function empty() {
    return this.s1.length === 0 && this.s2.length === 0;
}