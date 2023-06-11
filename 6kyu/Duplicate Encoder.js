// Solution 1: Map and for...of loop
function duplicateEncode(word) {
  const charCount = new Map();
  let result = [];

  for (let char of word.toLowerCase()) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of word.toLowerCase()) {
    result.push(charCount.get(char) === 1 ? "(" : ")");
  }

  return result.join("");
}

/* 
// Solution 2: for loop
function duplicateEncode(word) {
  const charMap = new Map();
  const result = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    result.push(charMap.get(char) === 1 ? "(" : ")");
  }

  return result.join("");
} */

/* 
// Solution 3: Using forEach
const duplicateEncode = word => {
  const charCount = new Map();
  let result = [];

  [...word.toLowerCase()].forEach(char => {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  });

  [...word.toLowerCase()].forEach(char => {
    result.push(charCount.get(char) === 1 ? "(" : ")");
  });

  return result.join("");
}; */

/* 
// Solution 4: Object literal and for...of loop
const duplicateEncode = word => {
  const charCount = {};
  const result = [];

  for (const char of word.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of word.toLowerCase()) {
    result.push(charCount[char] === 1 ? "(" : ")");
  }

  return result.join("");
}; */

// console.log(duplicateEncode("din")); // "((("
// console.log(duplicateEncode("recede")); // "()()()"
// console.log(duplicateEncode("Success")); // ")())())"
// console.log(duplicateEncode("(( @")); // "))(("
