// Solution 1: reduce
const minSum = arr =>
  [...arr]
    .sort((a, b) => a - b)
    .reduce((sum, num, i) => sum + num * arr[arr.length - 1 - i], 0) / 2;

/* 
// Solution 1b: reduce that mutates the array
function minSum(arr) {
  arr.sort((a, b) => a - b);
  return arr.reduce((sum, n, i) => sum + n * arr[arr.length - 1 - i], 0) / 2;
} */

/* 
// Solution 2: for loop
function minSum(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    sum += sorted[i] * sorted[arr.length - 1 - i];
  }
  return sum;
} */

console.log(minSum([5, 4, 2, 3])); // 22
console.log(minSum([12, 6, 10, 26, 3, 24])); // 342
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); // 74
