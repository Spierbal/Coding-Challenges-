//  Solution 1: Set
function isPangram(str) {
  const alphabetSet = new Set(str.toLowerCase().replace(/[^a-z]/g, ""));

  return alphabetSet.size === 26;
}

/* 
// Solution 1b: Set
function isPangram(string) {
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
  const uniqueCharsSet = new Set(string.toLowerCase().replace(/[^a-z]/g, ""));

  return alphabetSet.size === uniqueCharsSet.size;
} */

/* 
// Solution 2: Every()
function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return [...alphabet].every(letter => str.toLowerCase().includes(letter));
} */

/* 
// Solution 3: for of loo & includes()
function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const letter of alphabet) {
    if (!str.toLowerCase().includes(letter)) return false;
  }

  return true;
}
 */

/* 
// Solution 3: for of  loop & indexOf()
function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const letter of alphabet) {
    if (str.toLowerCase().indexOf(letter) === -1) return false;
  }

  return true;
} */

// console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
// console.log(isPangram("This is not a pangram.")); // false
