const lastSurvivor1 = (letters, coords) =>
  coords.reduce((acc, curr) => {
    return acc.slice(0, curr) + acc.slice(curr + 1);
  }, letters);

// Solution 1b: more concise reduce
/* const lastSurvivor1b = (char, coords) =>
  coords.reduce((acc, curr) => acc.slice(0, curr) + acc.slice(curr + 1), char); */

// Solution 2: For Loop with Slice
/* function lastSurvivor2(letters, coords) {
  let arr = letters;
  for (let i = 0; i < coords.length; i++) {
    arr = arr.slice(0, coords[i]) + arr.slice(coords[i] + 1);
  }
  return arr;
} */

// Solution 3: For Loop with Splice
/* function lastSurvivor3(letters, coords) {
  let arr = letters.split("");
  for (let i = 0; i < coords.length; i++) {
    arr.splice(coords[i], 1);
  }
  return arr.join("");
} */

/* console.log(lastSurvivor1("abc", [1, 1])); // 'a'
console.log(lastSurvivor2("c", [])); // 'c'
console.log(lastSurvivor3("zbk", [2, 1])); // 'z' */
