const descendingOrder = n => Number([...String(n)].sort().reverse().join(""));

//Solution 2:
//const descendingOrder = n => +Array.from(String(n)).sort().reverse().join("");

//Solution 3
// const descendingOrder = n =>
//   Number(String(n).split("").sort().reverse().join(""));

// Solution 4
// function descendingOrder(n) {
//   return Number(
//     String(n)
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }
console.log(descendingOrder(1021)); // 2110
