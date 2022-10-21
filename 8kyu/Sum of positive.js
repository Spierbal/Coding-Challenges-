const positiveSum = arr => arr.filter(el => el > 0).reduce((a, b) => a + b, 0);

// Solution 2:
//const positiveSum = arr => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

// Solution 3:
// function positiveSum(arr) {
//   let sum = 0;

//   arr.forEach(item => {
//     if (item > 0) {
//       sum += item;
//     }
//   });
//   return sum;
// }

// Solution 4:
// function positiveSum(arr) {

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//       sum += arr[i];
//     }
//   }
//    return sum;
// }

//console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]); // 55 (only counts the positive numbers)
