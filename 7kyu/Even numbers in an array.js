// Solution 1: filter, slice
const evenNumbers = (arr, num) => arr.filter(x => x % 2 == 0).slice(-num);

/* 
// Solution 2: for loop, unshift, break
function evenNumbers(array, number) {
  let evenArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 == 0) evenArr.unshift(array[i]);
    if (evenArr.length == number) break;
  }
  return evenArr;
} */

/* 
// Solution 2b: for loop, unshift
function evenNumbers(array, number) {
  const evenArr = [];
  for (let i = array.length - 1; i >= 0 && evenArr.length < number; i--) {
    if (array[i] % 2 === 0) {
      evenArr.unshift(array[i]);
    }
  }
  return evenArr;
} */

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // --> [4, 6, 8]  // (last 3 even numbers)
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));  //  -->  [-8, 26]
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); // --> [6] // (last even number)
