function sumTwoSmallestNumbers(numbers) {
  const arr = [...numbers].sort((a, b) => a - b);

  return arr[0] + arr[1];
}

/* 
// Solution 2:
const sumTwoSmallestNumbers = numbers =>
  [...numbers]
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y); */

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // --> 13 (5 + 8 = 13)
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // --> 7 (2 + 5 = 7)
