// Solution 1: for loop
function numberToPower(number, power) {
  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= number;
  }

  return result;
}

/* 
// Solution 2: Recursion
const numberToPower = (base, power) => {
    return power === 0 ? 1 : base * numberToPower(base, power - 1)
}; */

/* 
// Soluton 3: Reduce
const numberToPower = (base, power) =>
  Array.from({ length: power }, () => base).reduce((acc, val) => acc * val, 1);
 */

// console.log(numberToPower(4, 2)); // 16);
// console.log(numberToPower(10, 4)); // 10000);
// console.log(numberToPower(10, 0)); // 1);
