// Solution 1: reduce
function addLetters(...letters) {
  if (letters.length === 0) return "z";
  // Calculate the sum of the char codes
  const sum = letters.reduce((acc, char) => acc + char.charCodeAt() - 96, 0);
  const result = ((sum - 1) % 26) + 97; // Modulo 26 to handle overflow & add 97 to get the char code
  // Convert the value back to a character
  return String.fromCharCode(result);
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
// function addLetters(...letters) {
//   const sum = letters.reduce((acc, char) => acc + char.charCodeAt() - 96, 0);
//   return sum ? String.fromCharCode(((sum - 1) % 26) + 97) : "z";
// }

console.log(addLetters("a", "b", "c")); // "f"
console.log(addLetters()); // "z"
console.log(addLetters("z")); // "z"
