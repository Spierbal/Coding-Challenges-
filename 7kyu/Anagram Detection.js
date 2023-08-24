// Solution 1: object
function isAnagram(test, original) {
  if (test.length !== original.length) return false;

  const charCount = {};

  for (const char of test.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of original.toLowerCase()) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

/* 
// Solution 2b: Map
function isAnagram(test, original) {
  if (test.length !== original.length) return false;

  const charCount = new Map();

  // Count the frequency of each character in the 'test' string
  for (const char of test.toLowerCase()) {
    charCount.set(char, charCount.get(char) + 1 || 1);
  }
  // Compare character frequencies in the 'original' string with the map
  for (const char of original.toLowerCase()) {
    // If a character isn't present in the map or its frequency is already zero, it's not an anagram
    if (!charCount.get(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
  }
  return true;
}
 */
/* 
// Solution 3: helper function & object
function isAnagram(test, original) {
  // Build character map for each string
  const charMapA = buildCharMap(test);
  const charMapB = buildCharMap(original);

  // Compare character maps
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  // Compare character frequencies in each map
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) return false;
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  // Count the frequency of each character in the string & ignore non-alphanumeric characters
  for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
} */

// console.log(isAnagram("foefet", "toffee")); // --> true, 'The word foefet is an anagram of toffee'
// console.log(isAnagram("Buckethead", "DeathCubeK")); // --> true, 'The word Buckethead is an anagram of DeathCubeK'
// console.log(isAnagram("apple", "pale")); // --> false, 'Same letters, but different count'
// console.log(isAnagram("dumble", "bumble")); // --> false, 'Characters do not match for test case dumble, bumble'
