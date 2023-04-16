// // Solution 1:
const maxMultiple = (divisor, bound) => Math.floor(bound / divisor) * divisor;

// // Solution 2:
// const maxMultiple = (divisor, bound) => bound - (bound % divisor);

// Solution 3:
// const maxMultiple = (divisor, bound) => {
//   while (bound % divisor !== 0) {
//     bound--;
//   }
//   return bound;
// };

// Solution 4:
// const maxMultiple = (divisor, bound) => {
//   let max = 0;
//   for (let i = 1; i <= bound; i++) {
//     if (i % divisor === 0) max = i;
//   }
//   return max; // return 0
// };

// console.log(maxMultiple(2, 7)); // 6
// console.log(maxMultiple(3, 10)); // 9
// console.log(maxMultiple(7, 17)); // 14
// console.log(maxMultiple(10, 50)); // 50
// console.log(maxMultiple(37, 200)); // 185
// console.log(maxMultiple(7, 100)); // 98
