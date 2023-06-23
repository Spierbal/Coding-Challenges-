// Solution 1: Mathematical formula
const sumTriangularNumbers = n => (n <= 0 ? 0 : (n * (n + 1) * (n + 2)) / 6);

/* 
// Solution 2: for loop
function sumTriangularNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += (i * (i + 1)) / 2;
  }
  return sum;
} */

/* 
// Solution 2b: for loop cumulative sum
function sumTriangularNumbers(n) {
  let sum = 0;
  let num = 0;

  for (let i = 1; i <= n; i++) {
    num += i;
    sum += num;
  }
  return sum;
} */

/* 
// Solution 3: Spread operator and reduce
function sumTriangularNumbers(n) {
  if (n <= 0) return 0;

  const triangularNum = [...Array(n)].map((_, i) => ((i + 1) * (i + 2)) / 2);

  return triangularNum.reduce((sum, num) => sum + num, 0);
} */

// console.log(sumTriangularNumbers(6)); // 56
// console.log(sumTriangularNumbers(34)); // 7140
// console.log(sumTriangularNumbers(-291)); // 0
// console.log(sumTriangularNumbers(943)); // 140205240
// console.log(sumTriangularNumbers(-971)); // 0
