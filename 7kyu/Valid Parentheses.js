// Solution 1: for of loop
function validParentheses(parenStr) {
  let counter = 0;

  for (let char of parenStr) {
    if (char === "(") counter++;
    if (char === ")") counter--;

    if (counter < 0) return false;
  }
  return counter === 0;
}

/* 
// Solution 1b: more concise for of loop
function validParentheses(parenStr) {
  let counter = 0;

  for (let char of parenStr) {
    counter += char === "(" ? 1 : char === ")" ? -1 : 0;

    if (counter < 0) return false;
  }
  return counter === 0;
} */

/* 
// Solution 1c: for loop
function validParentheses(parentStr) {
  let counter = 0;

  for (let i = 0; i < parentStr.length; i++) {
    if (parentStr[i] === "(") counter++;
    if (parentStr[i] === ")") counter--;

    if (counter < 0) return false;
  }
  return counter === 0;
} */

/* 
// Solution 2: Using stack with for of loop
function validParentheses(parenStr) {
  const stack = [];

  for (let char of parenStr) {
    if (char === "(") stack.push(char);
    if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
} */

// console.log(validParentheses("()")); // true
// console.log(validParentheses("((()))")); // true
// console.log(validParentheses("()()()")); // true
// console.log(validParentheses("(()())()")); // true
// console.log(validParentheses("()(())((()))(())()")); // true

// console.log(validParentheses(")(")); // false
// console.log(validParentheses("()()(")); // false
// console.log(validParentheses("((())")); // false
// console.log(validParentheses("())(()")); // false
// console.log(validParentheses(")()")); // false
// console.log(validParentheses(")")); // false

// console.log(validParentheses("")); // true
