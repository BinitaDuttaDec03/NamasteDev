// Print numbers from n to 1 using recursion

let n = 10;

function printDescending(n) {
  if (n < 1) return;

  console.log(n);
  printDescending(--n);
}

function printAscending(base, limit) {
  if (base > limit) return;

  console.log(base);
  printAscending(++base, limit);
}

// printDescending(n);

n = 10;
printAscending(1, n);
