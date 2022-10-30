const isIsogram = str => new Set(str.toLowerCase()).size === str.length;

// Solution 2:
// const isIsogram = str => !str.match(/([a-z]).*\1/i);
// const isIsogram = str => !str.match(/(\w).*\1/i);

// Solution 3
/* const isIsogram = str =>
  [...str.toLowerCase()].filter((item, pos, arr) => arr.indexOf(item) === pos)
    .length === str.length; */

// console.log(isIsogram("thomas")); // true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moSes")); // false
