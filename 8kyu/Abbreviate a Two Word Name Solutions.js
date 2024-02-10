// Solution 1: split() and destructuring
function abbrevName(name) {
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
}

/* 
// Solution 2: map, split() and join()
const abbrevName = name =>
  name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join("."); */

/* 
// solution 3: regex
const abbrevName = name => name.match(/\b\w/g).join(".").toUpperCase();
 */

/* 
// Solution 4: charAt() & toUpperCase()
function abbrevName(name) {
  return `${name.charAt(0).toUpperCase()}.${name
    .charAt(name.indexOf(" ") + 1)
    .toUpperCase()}`;
} */

// console.log(abbrevName("Ben Gorden")); // "B.G"
// console.log(abbrevName("Sam Harris")); // "S.H"
// console.log(abbrevName("Evan Cole")); // "E.C"
// console.log(abbrevName("P Favuzzi")); // "P.F"
// console.log(abbrevName("D Mendieta")); // "D.M"
