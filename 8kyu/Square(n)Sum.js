function squareSum(n) {
  return n.map(x => x ** 2).reduce((a, b) => a + b, 0);
}

// Shorter solutions

//const squareSum = n => n.reduce((a, b) => a + b ** 2, 0);

//const squareSum = n => n.map(x => x ** 2).reduce((a, b) => a + b, 0);

// console.log(squareSum([1, 2])); // 5
