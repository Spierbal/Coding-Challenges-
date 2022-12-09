function arrayMadness(a, b) {
  const square = a.reduce((a, b) => a + b ** 2, 0);
  const cube = b.reduce((a, b) => a + b ** 3, 0);

  return square > cube;
}

// Solution 1b:
/* const arrayMadness = (a, b) =>
  a.reduce((a, b) => a + b ** 2, 0) > b.reduce((a, b) => a + b ** 3, 0); */

// Solution 2:
/* function arrayMadness(a, b) {
  const square = a.map(x => x ** 2).reduce((a, b) => a + b);
  const cube = b.map(x => x ** 3).reduce((a, b) => a + b);

  return square > cube;
} */

// Solution 3:
function arrayMadness(a, b) {
  let sumA = 0;
  let sumB = 0;

  for (const n of a) sumA += n ** 2;
  for (const n of b) sumB += n ** 3;

  return sumA > sumB;
}

// console.log(arrayMadness([4, 5, 6], [1, 2, 3])); // --> true (4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3)
// console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])); // --> true;
// console.log(arrayMadness([5, 6, 7], [4, 5, 6])); // --> false
