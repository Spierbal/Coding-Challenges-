// Solution 1:
function calculator(a, b, sign) {
  if (isNaN(a && b) || !"+-*/".includes(sign)) return "unknown value";
  if (sign === "+") return a + b;
  if (sign === "-") return a - b;
  if (sign === "*") return a * b;
  if (sign === "/") return a / b;
}

// Solution 2:
/* function calculator(a, b, sign) {
 if (isNaN(a && b)) return 'unknown value'
  return sign === "+"
    ? a + b
    : sign === "-"
    ? a - b
    : sign === "*"
    ? a * b
    : sign === "/"
    ? a / b
    : "unknown value";
} */

// Solution 4:
/* // function calculator(a, b, sign) {
//     if (isNaN(a && b)) return "unknown value"
    
//     const ops = {
//       "+": a + b,
//       "-": a - b,
//       "*": a * b,
//       "/": a / b,
//     };
//     return ops[sign] || "unknown value";
//   } */

// Solution 5a:
/* const calculator = (a, b, sign) => {
  if (isNaN(a && b)) return "unknown value";
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "unknown value";
  }
}; */

// Solution 5b:
/* const calculator = (a, b, sign) => {
  let res = "";
  switch (sign) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
    default:
      return "unknown value";
  }
  return typeof (a && b) === "number" ? res : "unknown value";
}; */

// console.log(calculator(1, 2, "+")); // -->
// console.log(calculator(1, 2, "-")); // -->
// console.log(calculator(3, 5, "*")); // -->
// console.log(calculator(6, 2, "/")); // -->
// console.log(calculator(6, 2, "$")); // -->
// console.log(calculator(6, "h", "*")); // -->
