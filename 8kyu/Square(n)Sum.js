const squareSum = n => n.reduce((a, b) => a + b ** 2, 0);

// Solution 1b
// const squareSum = n => n.reduce((a, b) => a + Math.pow(b, 2), 0);

// 2nd Solution:
// const squareSum = n => n.map(x => x ** 2).reduce((a, b) => a + b, 0);

// console.log(squareSum([1, 2])); // 5 (1^1 + 2^2 = 5)
// console.log(squareSum([2, 4])) // --> 20
