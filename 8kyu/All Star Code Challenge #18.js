// const strCount = (str, letter) => [...str].filter(l => l === letter).length;

//Solution 2:
// const strCount = (str, letter) => str.split(letter).length - 1;

/* 
//Solution 3:
const strCount = (str, letter) =>
  str.split("").reduce((a, b) => a + letter.includes(b), 0);
 */

/* 
//Solution 4:
const strCount = (str, letter) =>
  [...str].reduce((count, char) => (char === letter ? count + 1 : count), 0);
 */

const strCount = (str, letter) =>
  [...str].reduce((count, char) => count + letter.includes(char), 0);

console.log(strCount("Hello", "l")); //--> 2 (there are two occurences of "l")
