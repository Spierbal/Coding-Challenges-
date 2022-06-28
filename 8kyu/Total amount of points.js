const points = games =>
  games.reduce((sum, [x, _, y]) => {
    if (x > y) return sum + 3;
    if (x < y) return sum;
    return sum + 1;
  }, 0);

// Solution 2:
// function points(games) {
//   return games.reduce((sum, result) => {
//     const [x, y] = result.split(":").map(Number);
//     if (x > y) return sum + 3;
//     if (x < y) return sum;
//     return sum + 1;
//   }, 0);
// }

// Short Solution 3:

//const points = g => g.reduce((s, [x, _, y]) => s + (x > y ? 3 : x === y), 0);

//console.log(points(["1:1","2:2","3:3","4:4","2:2"])) // --> 5
