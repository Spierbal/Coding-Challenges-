const arithmetic = (a, b, operator) => {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
};

// Solution 2:
// const arithmetic = (a, b, operator) => {
//   return operator === "add"
//     ? a + b
//     : operator === "subtract"
//     ? a - b
//     : operator === "multiply"
//     ? a * b
//     : a / b;
// };

// Solution 3:
// function arithmetic(a, b, operator) {
//   return {
//     add: a + b,
//     subtract: a - b,
//     multiply: a * b,
//     divide: a / b,
//   }[operator];
// }

// console.log(arithmetic(1, 2, "add")); // 3"'add' should return the two numbers added together!");
// console.log(arithmetic(8, 2, "subtract")); // 6 "'subtract' should return a minus b!");
// console.log(arithmetic(5, 2, "multiply")); // 10 "'multiply' should return a multiplied by b!");
// console.log(arithmetic(8, 2, "divide")); // 4 "'divide' should return a divided by b!");
