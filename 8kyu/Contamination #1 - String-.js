const contamination = (text, char) => char.repeat(text.length);

// Solution 2: For Of Loop
/* function contamination(text, char) {
  let result = "";

  for (const el of text) {
    result += char;
  }
  return result;
} */

// Solution 3
// const contamination = (text, char) => text.replace(/[\w\D]/g, char);

// Solution 4
// const contamination = (text, char) => text.split``.map(e => e = char).join``

// console.log(contamination("abc", "z")); // zzz
// console.log(contamination("", "z")); // ""
// console.log(contamination("abc", "")); // ""
