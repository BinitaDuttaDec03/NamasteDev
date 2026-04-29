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

function MyStack() {
    this.q1 = [];
    this.q2 = [];
}

function push() {
    this.q1.push(x);
}

function pop() {
    const n = this.q1.length;

    for (let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift());
    }

    const pop = this.q1.shift();
    this.q1 = this.q2;

    return pop;
}

function top() {
    const n = this.q1.length;

    for (let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift());
    }

    const top = this.q1.shift();

    this.q2.push(top);
    this.q1 = this.q2;

    return top;
}

function empty() {
    return this.q1.length === 0
}