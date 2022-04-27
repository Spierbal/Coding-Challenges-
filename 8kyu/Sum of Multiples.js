function sumMul(n, m) {
  if (n > m || n <= 0 || m <= 0) return "INVALID";

  // make a total
  let total = 0;

  for (let i = n; i < m; i += n) {
    // in every iteration get a multiple of n
    // add it to the total
    total += i;
  }
  return total;
}
