// Print numbers from n to 1 using recursion

let n = 10;

function printDescending(n) {
  if (n < 1) return;

  console.log(n);
  printDescending(n - 1);
}

// Approach - 1
// function printAscending(base, limit) {
//   if (base > limit) return;

//   console.log(base);
//   printAscending(++base, limit);
// }

// Approach - 2
function printAscending(n) {
  if (n === 0) return;

  printAscending(n - 1);
  console.log(n);
}

// printDescending(n);

n = 10;
// printAscending(1, n);
printAscending(n);
