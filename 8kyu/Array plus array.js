// Solution 1: spread operator with reduce()
const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((a, b) => a + b, 0);

/* 
// Solution 2: concat with reduce()
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b, 0);
} */

/* 
// Solution 3: for of loop
function arrayPlusArray (arr1, arr2) => {
  let sum = 0;

  for (let num of [...arr1, ...arr2]) {
    sum += num;
  }
  return sum;
}; */

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // --> 21
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // --> -21
