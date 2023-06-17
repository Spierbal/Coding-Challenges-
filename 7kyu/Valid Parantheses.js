function validParentheses(parenStr) {
  let count = 0;

  for (let char of parenStr) {
    count += char === "(" ? 1 : char === ")" ? -1 : 0;

    if (count < 0) return false;
  }

  return count === 0;
}

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
