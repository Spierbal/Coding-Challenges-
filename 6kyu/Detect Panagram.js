//  Solution 1: Set & replace()
function isPangram(str) {
  const alphabetSet = new Set(str.toLowerCase().replace(/[^a-z]/g, ""));

  return alphabetSet.size === 26;
}

/* 
// Solution 1b: Set & match()
function isPangram(str) {
  const alphabetSet = new Set(str.toLowerCase().match(/[a-z]/g));
  return alphabetSet.size === 26;
} */

/* 
// Solution 1c: Set
function isPangram(string) {
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
  const uniqueCharsSet = new Set(string.toLowerCase().replace(/[^a-z]/g, ""));

  return alphabetSet.size === uniqueCharsSet.size;
} */

/* 
// Solution 2: Every()
function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return [...alphabet].every(char => str.toLowerCase().includes(char));
} */

/* 
// Solution 3: for of loo & includes()
function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const char of alphabet) {
    if (!str.toLowerCase().includes(char)) return false;
  }

  return true;
} */

/* 
// Solution 3: for of  loop & indexOf()
function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const char of alphabet) {
    if (str.toLowerCase().indexOf(char) === -1) return false;
  }

  return true;
} */

// console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
// console.log(isPangram("This is not a pangram.")); // false
