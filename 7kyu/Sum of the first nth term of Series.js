function SeriesSum(n) {
  return [...Array(n)]
    .map((_, i) => 1 / (1 + 3 * i))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
}

// Solution 2:
/* function SeriesSum(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  return sum.toFixed(2);
} */

// console.log(SeriesSum(1)); // '1.00' (since 1 = 1)
// console.log(SeriesSum(2)); // '1.25' (since 1 + 1/4 = 1.25)
// console.log(SeriesSum(3)); // '1.39' (since 1 + 1/4 + 1/7 = 1.39)
// console.log(SeriesSum(4)); // '1.49' (since 1 + 1/4 + 1/7 + 1/10 = 1.49)
