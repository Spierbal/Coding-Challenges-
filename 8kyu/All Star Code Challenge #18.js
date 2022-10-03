const strCount = (str, letter) =>
  str.split("").reduce((sum, char) => sum + letter.includes(char), 0);

//Solution 1b:
// const strCount = (str, letter) =>
//   [...str].reduce((a, b) => a + letter.includes(b), 0);

//Solution 2a:
// const strCount = (str, letter) =>
//   str.split('').filter(c => c === letter).length;

//Solution 2b:
// const strCount = (str, letter) =>
//   str.split("").filter(char => letter.includes(char)).length;

// console.log(strCount("Hello", "l")); //--> 2 (there are two occurences of "l")
