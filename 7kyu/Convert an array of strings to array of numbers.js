// Solution 1: map with parseFloat
const toNumberArray = stringarray => stringarray.map(parseFloat);

/* 
// Solution 1b: map with Number
const toNumberArray = stringarray => stringarray.map(Number);
 */

/* 
// Solution 2: for loop
function toNumberArray(stringarray) {
  let numArray = [];

  for (let i = 0; i < stringarray.length; i++) {
    numArray.push(Number(stringarray[i]));
  }
  return numArray;
} */

/* 
// Solution 2b: for of loop
function toNumberArray(stringarray) {
  let numArray = [];

  for (let char of stringarray) {
    numArray.push(Number([char]));
  }
  return numArray;
} */

// console.log(toNumberArray(["1.1", "2.2", "3.3"])); //, [1.1,2.2,3.3]);
