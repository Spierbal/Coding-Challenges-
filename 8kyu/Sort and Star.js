const twoSort = s => [...s.sort()[0]].join("***");

// Solution 2:
// const twoSort = s => Array.from((s).sort()[0]).join("***");

// Solution 3:
// function twoSort(s) {
//   return s.sort()[0].split("").join("***");
// }

// console.log(twoSort(["Hello", "World"])); // --> H***e***l***l***o
