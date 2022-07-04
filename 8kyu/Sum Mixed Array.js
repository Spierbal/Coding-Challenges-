const sumMix = x => x.reduce((a, b) => +b + a, 0);

//Solution 2:
//const sumMix = x => x.map(Number).reduce((a, b) => a + b);

//Solution 3:
// function sumMix(x) {
//     let sum = 0;
//     x.forEach(num => {
//       sum += Number(num);
//     });
//     return sum;
//   }

// console.log(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7])) // --> 61
