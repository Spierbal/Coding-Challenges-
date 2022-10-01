const flip = (d, a) =>
  d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);

//   Solution 2:
// const flip = (d, a) => {
//   if (d === "R") return a.sort((a, b) => a - b);
//   if (d === "L") return a.sort((a, b) => b - a);
// };

// console.log(flip("R", [3, 2, 1, 2])) // --> [ 1, 2, 2, 3 ] "Ascending"
// console.log(flip("L", [3, 2, 1, 2])) // --> [ 3, 2, 2, 1 ] "Descending"
