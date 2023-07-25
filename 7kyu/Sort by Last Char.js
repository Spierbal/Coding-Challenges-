const last = x =>
  x.split(" ").sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));

/* 
// Solution 2: using ternary operator
function last(x) {
  return x
    .split(" ")
    .sort((a, b) => (a.slice(-1) < b.slice(-1) ? -1 : a.slice(-1) ? 1 : 0));
} */

// console.log(last('man i need a taxi up to ubud')) // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// console.log(last('what time are we climbing up the volcano'))// ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
// console.log(last("take me to semynak")); // ['take', 'me', 'semynak', 'to']);
// console.log(last("cherry banana apple")); // ['take', 'me', 'semynak', 'to']);
