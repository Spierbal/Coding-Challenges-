const isIsogram = str => new Set([...str.toLowerCase()]).size === str.length;

// Solution 1b:
// const isIsogram = str =>
//   str.length == new Set(str.toLowerCase().split("")).size;

// Solution 2
// function isIsogram(str) {
//   return (
//     str
//       .toLowerCase()
//       .split("")
//       .filter((item, pos, arr) => arr.indexOf(item) === pos).length ===
//     str.length
//   );
// }

// console.log(isIsogram("thomas")); // true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moSes")); // false
