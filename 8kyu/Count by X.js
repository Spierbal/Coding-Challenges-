const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

//solution 2a:
//const countBy = (x, n) => Array.from(Array(n)).map((_, i) => (i + 1) * x)

//Solution 2b:
//const countBy = (x, n) => Array.from({ length: n }, (_, i) => x + i * x);

//Longer Solution 3:
/* function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) z.push(i * x);

  return z;
} */

// console.log(countBy(2, 5)); // --> [2, 4, 6, 8, 10]
// console.log(countBy(3, 6)); // --> [3, 6, 9, 12, 15, 18]
