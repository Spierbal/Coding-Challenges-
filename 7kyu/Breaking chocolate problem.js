const breakChocolate = (n, m) => (n * m <= 0 ? 0 : n * m - 1);

/* // Solution 1b:
function breakChocolate(n, m) {
  if (n <= 0 || m <= 0) return 0;

  return n * m - 1;
} */

// console.log(breakChocolate(5, 5)); // 24
// console.log(breakChocolate(1, 1)); //  0
