const between = (a, b) => [...Array(b - a + 1)].map((_, i) => i + a);

// Solution 2:
/* function between(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
} */

//Solution 3:
// const between = (a, b) => Array.from( { length: b - a + 1}, (_, i) => a + i);

// console.log(between(-2, 2)); // --> [-2, -1, 0, 1, 2,]
