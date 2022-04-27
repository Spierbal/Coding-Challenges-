// Shortest solution:
const remainder = (a, b) => (a > b ? a % b : b % a);

// More readable than solution 1:
function remainder(a, b) {
  return a > b ? a % b : b % a;
}

// solution 3, less optimized:
// function remainder(a, b) {
//   if (a > b) {
//     return a % b;
//   } else {
//     return b % a;
//   }
// }
// console.log(remainder(17, 5));

// Solution 4  , with NaN:
//   function remainder(a, b){
//     if ( a > b && b === 0 || b < a && a === 0){
//       return NaN
//       }else{
//         return a > b ? a % b : b % a
//       }
//   }
