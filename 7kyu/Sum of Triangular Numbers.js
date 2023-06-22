function sumTriangularNumbers(n) {
  if (n <= 0) return 0;

  const triangularNumbers = [...Array(n)].map((_, i) => (i + 1 * (i + 1)) / 2);

  return triangularNumbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumTriangularNumbers(6)); // 56
console.log(sumTriangularNumbers(34)); // 7140
console.log(sumTriangularNumbers(-291)); // 0
console.log(sumTriangularNumbers(943)); // 140205240
console.log(sumTriangularNumbers(-971)); // 0
