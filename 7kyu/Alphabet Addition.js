function addLetters(...letters) {
  if (letters.length === 0) return "z";
  const sum = letters.reduce((acc, char) => acc + char.charCodeAt() - 96, 0);
  return String.fromCharCode(((sum - 1) % 26) + 97);
}

/* 
// Solution 2: for of loop
function addLetters(...letters) {
  if (letters.length === 0) return "z";

  let sum = 0;
  for (const letter of letters) {
    sum += letter.charCodeAt() - 96;
  }
  return String.fromCharCode(((sum - 1) % 26) + 97);
} */

/* 
// Solution 3: for loop
function addLetters(...letters) {
  if (letters.length === 0) return "z";

  let sum = 0;
  for (let i = 0; i < letters.length; i++) {
    sum += letters[i].charCodeAt() - 96;
  }
  return String.fromCharCode(((sum - 1) % 26) + 97);
} */

// console.log(addLetters("a", "b", "c")); // "f"
// console.log(addLetters()); // "z"
// console.log(addLetters("z")); // "z"
