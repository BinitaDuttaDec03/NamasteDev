/* Pattern 2: Right-Angled Star Triangle
Print a right-angled triangle of stars with n rows.

Output
*
* *
* * *
* * * * */

// function printPattern(n) {
//   let pattern = "";

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) pattern += "* ";

//     console.log(pattern);
//     pattern = "";
//   }
// }

// printPattern(4);

/* Pattern 3: Print a Right-Angled Number Triangle
Write a program that prints a right-angled triangle of numbers of heightn.

Output
1
1 2
1 2 3
1 2 3 4 */

// function printPattern(n) {
//   let pattern = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) pattern += j + " ";

//     console.log(pattern);
//     pattern = "";
//   }
// }

// printPattern(4);

/* Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
Write a program that prints a right-angled triangle where each row contains the same number repeated.

Output
1
2 2
3 3 3
4 4 4 4 */

// function printPattern(n) {
//   let pattern = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) pattern += i + " ";

//     console.log(pattern);
//     pattern = "";
//   }
// }

// printPattern(4);

/* Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

Output
1 2 3 4
1 2 3
1 2
1 */

// function printPattern(n) {
//   let pattern = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i + 1; j++) pattern += j + " ";

//     console.log(pattern);
//     pattern = "";
//   }
// }

// printPattern(4);

/* Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

Output
      *
    * *
  * * *
* * * * */

// function printPattern(n) {
//   let pattern = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) pattern += " ";
//     for (let j = 1; j <= i; j++) pattern += "*";

//     console.log(pattern);
//     pattern = "";
//   }
// }

// printPattern(4);

/* Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

Output
1
1 0
1 0 1
1 0 1 0 */

// function printPattern(n) {
//   let pattern = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) pattern += (j % 2) + " ";

//     console.log(pattern);
//     pattern = "";
//   }
// }

// printPattern(4);

/* Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

Output
1
0 1
0 1 0
1 0 1 0 */

function printPattern(n) {
  let pattern = "",
    toggle = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += toggle + " ";
      toggle = toggle === 1 ? 0 : 1;
    }

    console.log(pattern);
    pattern = "";
  }
}

printPattern(4);
