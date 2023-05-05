// Solution 1b: more concise reduce
const lastSurvivor = (char, coords) =>
  coords.reduce((acc, curr) => acc.slice(0, curr) + acc.slice(curr + 1), char);

// Solution 2: For Loop with Slice
/* function lastSurvivor(letters, coords) {
  let arr = letters;
  for (let i = 0; i < coords.length; i++) {
    arr = arr.slice(0, coords[i]) + arr.slice(coords[i] + 1);
  }
  return arr;
} */

// Solution 3: For Loop with Splice
/* function lastSurvivor(letters, coords) {
  let arr = letters.split("");
  for (let i = 0; i < coords.length; i++) {
    arr.splice(coords[i], 1);
  }
  return arr.join("");
} */

/* console.log(lastSurvivor("abc", [1, 1])); // 'a'
console.log(lastSurvivor("c", [])); // 'c'
console.log(lastSurvivor("zbk", [2, 1])); // 'z'
 */
