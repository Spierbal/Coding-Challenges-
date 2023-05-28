// Solution 1: Reduce
const sumCubes = n =>
  [...Array(n)].reduce((sum, _, i) => sum + (i + 1) ** 3, 0);

/* 
// Solution 2:  For loop
function sumCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
} */

/* 
// Solution 3: Math formula (Most efficient)
const sumCubes = n => ((n * (n + 1)) / 2) ** 2; 
*/

// console.log(sumCubes(1)); // 1
// console.log(sumCubes(2)); // 9
// console.log(sumCubes(3)); // 36
// console.log(sumCubes(4)); // 100
// console.log(sumCubes(5)); // 225
// console.log(sumCubes(10)); // 3025
// console.log(sumCubes(123)); // 58155876
