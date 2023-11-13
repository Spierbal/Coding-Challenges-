// Solution 1: array methods( map, split, join, toUpperCase)
const abbrevName = name =>
  name
    .split(" ")
    .map(x => x[0].toUpperCase())
    .join(".");

/* 
// Solution 2:  
function abbrevName(name) {
  const initial = name.toUpperCase().split(" ");
  return `${initial[0][0]}.${initial[1][0]}`;
} */

// console.log(abbrevName("Ben Gorden")); // "B.G"
