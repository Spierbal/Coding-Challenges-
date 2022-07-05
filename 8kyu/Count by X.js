const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

//Solution 2:
//const countBy = (x, n) => Array.from({ length: n }, (_, i) => x + i * x);

//Longer Solution 3:
// function countBy(x, n) {
//   let z = [];

//   for (let i = 1; i <= n; i++) z.push(x * i);

//   return z;
// }

// console.log(countBy(2,5)) // --> [ 2, 4, 6, 8, 10 ]
