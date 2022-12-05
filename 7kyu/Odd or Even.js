const oddOrEven = arr =>
  arr.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";

// console.log(oddOrEven([0])) // "even";
// console.log(oddOrEven([1])) // "odd";
// console.log(oddOrEven([])) // "even"
