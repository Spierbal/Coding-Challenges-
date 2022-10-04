const summation = num => [...Array(num)].reduce((sum, _, i) => sum + i + 1, 0);

//Solution 2a:
// const summation = num =>
//   Array.from(Array(num), (_, i) => i + 1).reduce((a, b) => a + b, 0);

//Soluton 2b:
// const summation = num =>
//   Array.from({ length: num }, (_, i) => i + 1).reduce((a, b) => a + b, 0);

// Solution 3:
/* function summation(num) {
    let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
} */

// console.log(summation(8)) // --> 36(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
// console.log(summation(5)) // --> 15(1 + 2 + 3 + 4 + 5)
