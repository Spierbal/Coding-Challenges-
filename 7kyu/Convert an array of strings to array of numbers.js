// Solution 1b: map with Number
const toNumberArray = stringarray => stringarray.map(Number);

/* 
// Solution 2: for loop
function toNumberArray(stringarray) {
  let result = [];

  for (let i = 0; i < stringarray.length; i++) {
    result.push(Number(stringarray[i]));
  }
  return result;
} */

/* 
// Solution 2b: for of loop
function toNumberArray(stringarray) {
  let result = [];
  for (let char of stringarray) result.push(Number(char));

  return result;
} */

// console.log(toNumberArray(["1.1", "2.2", "3.3"])); //, [1.1,2.2,3.3]);
