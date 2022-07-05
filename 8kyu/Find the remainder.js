const remainder = (a, b) => (a > b ? a % b : b % a);

// Solution 2:
//const remainder = (a, b) => Math.max(a, b) % Math.min(a, b);

// solution 3, more readable
// function remainder(a, b) {
//   if (a > b) return a % b;

//   return b % a;
// }

// Solution 3, with NaN:
// function remainder(a, b){
//   if ( a > b && b === 0 || b < a && a === 0){
//     return NaN
//     }else{
//       return a > b ? a % b : b % a
//     }
// }

// console.log(remainder(17, 5)); // --> 2(remainder)
