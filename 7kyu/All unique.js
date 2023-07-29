// Solution 1: Concise solution with Set
const hasUniqueChars = str => new Set([...str]).size === str.length;

/* 
// Solution 1b: Long solution with Set
function hasUniqueChars(str) {
  const uniqueCharsSet = new Set();
  for (const char of str) {
    if (uniqueCharsSet.has(char)) return false;
    uniqueCharsSet.add(char);
  }
  return true;
} */

/* 
// Solution 2: use object as a map
function hasUniqueChars(str) {
  const charMap = {};
  for (const char of str) {
    if (charMap[char]) return false;
    charMap[char] = true;
  }
  return true;
}
 */

// console.log(hasUniqueChars("  nAa")); // false) // because there are two spaces ' '
// console.log(hasUniqueChars("abcdef")); // true)
// console.log(hasUniqueChars("aA")); // true) // case - sensitivity
// console.log(hasUniqueChars("++-")); // false) // because there are two '+'
