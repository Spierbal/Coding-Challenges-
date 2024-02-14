// Solution 1: split()
const strCount = (str, letter) => str.split(letter).length - 1;

// Solution 2: filter
// const strCount = (str, letter) => [...str].filter(l => l === letter).length;

/* 
// Solution 3: reduce() 
const strCount = (str, letter) =>
  [...str].reduce((count, char) => (char === letter ? count + 1 : count), 0); */

/* 
// Solution 3b: reduce() & includes()
const strCount = (str, letter) =>
  [...str].reduce((count, char) => count + letter.includes(char), 0); */

// console.log(strCount("Hello", "l")); //--> 2 (there are two occurences of "l")
