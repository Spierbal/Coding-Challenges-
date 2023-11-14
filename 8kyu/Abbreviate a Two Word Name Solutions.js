// Solution 1: map, split
const abbrevName2 = name =>
  name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join(".");

/* 
// Solution 2: split
function abbrevName1(name) {
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
} */

/* 
// Solution 3:
function abbrevName3(name) {
  const initial = name.toUpperCase().split(" ");
  return `${initial[0][0]}.${initial[1][0]}`;
} */

/* 
// solution 4: regex
const abbrevName4 = name => name.match(/\b\w/g).join(".").toUpperCase(); */

console.log(abbrevName("Ben Gorden")); // "B.G"
console.log(abbrevName("Sam Harris")); // "S.H"
console.log(abbrevName("Evan Cole")); // "E.C"
console.log(abbrevName("P Favuzzi")); // "P.F"
console.log(abbrevName("D Mendieta")); // "D.M"
