const findNeedle = haystack =>
  `found the needle at position ${haystack.findIndex(
    needles => needles === "needle"
  )}`;

/* 
// Solution 2: Shorter Solution
const findNeedle = haystack =>
  `found the needle at position ${haystack.indexOf("needle")}`;
 */

// const haystackArray = ["hay", "hay", "3", "hay", 2, "needle", "hay", "hay"];

// console.log(findNeedle(haystackArray)); // --> found the needle at position 5
