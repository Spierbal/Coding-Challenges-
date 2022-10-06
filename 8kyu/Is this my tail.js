const correctTail = (body, tail) => body.endsWith(tail);

// Solution 2:
// const correctTail = (body, tail) => body[body.length - 1] === tail;

// Solution 3: refactored broken solution
// function correctTail(body, tail) {
//   let sub = body.substring(body.length - tail.length);
//   return sub === tail;
// }

// console.log(correctTail("Fox", "x")); // true
// console.log(correctTail("Rhino", "o")); // true
// console.log(correctTail("Lion", "t")); // false
