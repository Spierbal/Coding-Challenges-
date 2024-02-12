// Solution 1: split() and map()
const addLength = str => str.split(" ").map(word => `${word} ${word.length}`);

/* 
// Solution 2: for of loop
function addLength(str) {
  let arr = [];
  for (let word of str.split(" ")) {
    arr.push(`${word} ${word.length}`);
  }
  return arr;
} */

/* 
// Solution 3: for loop
function addLength(str) {
  let arr = [];
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    arr.push(`${words[i]} ${words[i].length}`);
  }
  return arr;
} */

// console.log(addLength("apple ban")); // --> ["apple 5", "ban 3"]);
