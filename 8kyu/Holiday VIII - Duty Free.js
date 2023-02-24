const dutyFree = (normPrice, discount, hol) =>
  Math.floor(hol / ((normPrice / 100) * discount));

// Solution 1b:
/* const dutyFree = (normPrice, discount, hol) =>
  Math.floor(hol / (normPrice * discount / 100)) */

// Solution 1c:
/* function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
} */

// console.log(dutyFree(12, 50, 1000)); // 166
// console.log(dutyFree(17, 10, 500)); // 294
// console.log(dutyFree(24, 35, 3000)); // 357
