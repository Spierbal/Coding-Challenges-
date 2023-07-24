// Solution 1: replace()
const toCamelCase = str =>
  str.replace(/[-_](\w)/g, (_, char) => char.toUpperCase());

/* 
// Solution 2: split() & map() & join()
function toCamelCase(str) {
  return str
    .split(/[-_]/)
    .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join("");
}
 */

// console.log(toCamelCase("")); // ""
// console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
// console.log(toCamelCase("A-B-C")); // "ABC"
