const squareOrSquareRoot = arr =>
  arr.map(num => (Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num));

//Solution 1: with return statements
// const squareOrSquareRoot = arr => {
//   return arr.map(num => {
//     return Math.sqrt(x) % 1 === 0 ? Math.sqrt(num) : num * num;
//   });
// };

// Solution 2:
// const squareOrSquareRoot = arr => {
//   return arr.map(x => {
//     if (Math.sqrt(x) % 1 === 0) return Math.sqrt(x);

//     return x * x;
//   });
// };

// Solution 3:
// function squareOrSquareRoot(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (Math.sqrt(array[i]) % 1 === 0) {
//       array[i] = Math.sqrt(array[i]);
//     } else {
//       array[i] = array[i] * array[i];
//     }
//   }
//   return array;
// }

//console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1])) // --> [ 2, 9, 3, 49, 4, 1 ]
