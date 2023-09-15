// Solution 1: reduce
function addLetters(...letters) {
  const sum = letters.reduce((a, b) => a + b.charCodeAt(0) - 96, 0);
  return letters.length ? String.fromCharCode(((sum - 1) % 26) + 97) : "z";
}

/* 
// Solution 1b: reduce (more readable)
function addLetters(...letters) {
  if (letters.length === 0) return "z";
  // Convert the letters to their char codes, subtract 96 to make "a" 1 instead of 97, and sum them up
  const sum = letters.reduce((acc, char) => acc + char.charCodeAt() - 96, 0);
  // Subtract 1 to make 'a' 0 instead of 1 & modulo 26 to handle overflow
  const result = (sum - 1) % 26;
  // Convert the value back to a character code by adding 97 to it (97 is the char code for 'a')
  return String.fromCharCode(result + 97);
}  */

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

// console.log(addLetters("a", "b", "c")); // "f" ((1 + 2 + 3 = 6 - 1) % 26 + 97 = 102 => "f")
// console.log(addLetters("z")); // "z" (26 % 26 + 97 = 122 => "z")
// console.log(addLetters("a", "b")); // "c" ((1 + 2 = 3 - 1) % 26 + 97 = 99 => "c")
// console.log(addLetters("z", "a")); // "a" ((26 + 1 = 27 - 1) % 26 + 97 = 97 => "a")
// console.log(addLetters("y", "c", "b")); // "d"  ((25 + 3 + 2 = 30 - 1) % 26 + 97 = 100 => "d")
// console.log(addLetters()); // "z" (0 % 26 + 97 = 122 => "z");
