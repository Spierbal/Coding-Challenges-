//Shortest Solution 1:
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

// Solution 2:
// function past(h, m, s) {
//   const hrsInMs = h * 60 * 60 * 1000;
//   const minInMs = m * 60 * 1000;
//   const secInMs = s * 1000;
//   return hrsInMs + minInMs + secInMs;
// }

// console.log(past(0, 1, 1)); // 61000
// console.log(past(1, 1, 1)); // 3661000
