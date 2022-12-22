const printerError = s => `${s.replace(/[a-m]/g, "").length}/${s.length}`;

// Solution 1b:
/* /function printerError(s) {
  const arr = s.replace(/[a-m]/g, "");
  return `${arr.length}/${s.length}`;
} */

// Solution 2:
/* const printerError = s =>
  `${s.split("").filter(char => char > "m").length}/${s.length}`;
 */

// Solution 3:
/* function printerError(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return `${count}/${s.length}`;
}
 */

// Solution 3b: for of Loop
/* function printerError(s) {
  let count = 0;

  for (let char of s) {
    if (char > "m") count++;
  }
  return `${count}/${s.length}`;
} */

/* console.log(printerError("aaabbbbhaijjjm")); // -->  "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // -->  "8/22"
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
); // --> "3/56"
 */
