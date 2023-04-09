function nbDig(n, d) {
  let res = "";
  for (let i = 0; i <= n; i++) res += i * i;

  return res.split(d).length - 1;
}

// Solution 2:
// const nbDig = (n, d) =>
//   [...Array(n + 1)]
//     .map((_, i) => i * i)
//     .join("")
//     .split(d).length - 1;

// Solution 3
// function nbDig(n, d) {
//   let res = 0;
//   for (let i = 0; i <= n; i++) {
//     let arr = [...String(i * i)];
//     arr.forEach(e => (e === d + "" ? res++ : null));
//   }
//   return res;
// }

// console.log(nbDig(5750, 0)); // 4700, "n = 5750, d = 0"
// console.log(nbDig(11011, 2)); //  9481, "n = 11011, d = 2"
// console.log(nbDig(12224, 8)); // 7733, "n = 12224, d = 8"
// console.log(nbDig(11549, 1)); // 11905, "n = 11549, d = 1"
