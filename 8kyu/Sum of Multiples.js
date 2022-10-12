const sumMul = (n, m) =>
  (n * (Math.floor(m / n) * (Math.floor(m / n) + 1))) / 2 || "INVALID";

// Solution 2b:
/* function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";

  return (n * Math.floor(m / n) * (Math.floor(m / n) + 1)) / 2;
} */

// Solution 3:
/* function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  let total = 0;
  for (let i = n; i < m; i += n) {
    total += i;
  }
  return total;
} */

// console.log(sumMul(2, 9)); // --> 20 (2 + 4 + 6 + 8 = 20)
// console.log(sumMul(4, -7)); //-->"INVALID"
// console.log(sumMul(0, 0)); // --> "INVALID"
// console.log(sumMul(3, 13)); // -->30 (3+6+9+12 = 30)
