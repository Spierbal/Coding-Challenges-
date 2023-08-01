// Solution 1: using filter()
function solve(s) {
  const upperCount = [...s].filter(char => char.toUpperCase() === char).length;
  const lowerCount = s.length - upperCount;

  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
}

/* 
// Solution 2: using regex
function solve(s) {
  const upperCount = (s.match(/[A-Z]/g) || []).length;
  const lowerCount = (s.match(/[a-z]/g) || []).length;

  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
} */

/* 
// Solution 3: using for of loop
function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;

  for (let char of s) {
    char === char.toUpperCase() ? upperCount++ : lowerCount++;
  }
  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
} */

/* 
// Solution 4: using for loop
function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === s[i].toUpperCase() ? upperCount++ : lowerCount++;
  }
  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
} */

/* 
// Solution 5: using charCodeAt
function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    charCode >= 65 && charCode <= 90 ? upperCount++ : lowerCount++; // 65 is the Unicode of A and 90 is the Unicode of Z
  }
  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
} */

// console.log(solve("code")); // "code"
// console.log(solve("CODe")); // "CODE"
// console.log(solve("COde")); // "code"
// console.log(solve("Code")); // "code"
