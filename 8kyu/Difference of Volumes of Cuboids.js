const findDifference = (a, b) =>
  Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));

//Solution 2:
// const findDifference = (a, b) =>
//   Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

// console.log(findDifference([3, 2, 5], [1, 4, 4])) //--> 14 (3*2*5)-(1*4*4) = 14
