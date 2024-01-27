// Solution 1: switch statement
function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") return "unknown value";

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
}

/* 
// Solution 2: ternary operator
function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") return "unknown value";

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

/* 
// Solution 3: object 
function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") return "unknown value";

  const ops = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
  };
  return ops[sign] || "unknown value";
} */

// console.log(calculator(1, 2, "+")); // --> 3
// console.log(calculator(1, 2, "-")); // --> -1
// console.log(calculator(3, 5, "*")); // --> 15
// console.log(calculator(6, 2, "/")); // --> 3
// console.log(calculator(6, 2, "$")); // --> "unknown value"
// console.log(calculator(6, "h", "*")); // --> "unknown value"
