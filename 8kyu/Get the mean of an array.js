// Most optimized solution:

// const getAverage = marks =>
//   Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);

// Solution 2:

// function getAverage(marks) {
//   let total = 0;

//   for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   return Math.floor(total / marks.length);
// }

//console.log(getAverage([1,1,1,1,1,1,1,2])) --> // 1
