// Short Solution 1: Ternary Operator
const points = g => g.reduce((s, [x, _, y]) => s + (x > y ? 3 : x === y), 0);

/* 
// Solution 1b: Ternary Operator (more explicit)
const points = games => games.reduce((s, [x, _, y]) => s + (x > y ? 3 : x === y ? 1 : 0), 0); */

/* 
// Solution 3: reduce
const points = games =>
  games.reduce((sum, [x, _, y]) => {
    if (x > y) return sum + 3;
    if (x < y) return sum;
    return sum + 1;
  }, 0);
 */

// console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2"])); // --> 5
// console.log(
//   points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
// ); // --> 10
// console.log(
//   points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
// ); // --> 0
// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
// ); // --> 15
// console.log(
//   points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
// ); // --> 12
