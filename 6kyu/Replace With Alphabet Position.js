const alphabetPosition = text =>
  text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(c => c.charCodeAt(0) - 96).join` `;

// Solution 1b:
/* const alphabetPosition = text => 
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map(ch => ch.charCodeAt(0) - 64).join` `;
 */

// Solution 1c:
// const alphabetPosition = text =>
//   [...text.toLowerCase().replace(/[^a-z]/g, ``)].map(c => c.charCodeAt() - 96)
//     .join` `;

// Solution 1d:
/* function alphabetPosition(text) {
  return text.match(/[A-Za-z]/g).map(getCharCode).join` `;
}
function getCharCode(str) {
  return str.toUpperCase().charCodeAt(0) - 64;
} */

// Solution 2:
/* function alphabetPosition(text) {
  const result = [];

  for (const char of text.toLowerCase())
    if (char.match(/[a-z]/)) result.push(char.charCodeAt() - 96);

  return result.join(" ");
} 
 */

// Solution 3:
/* function alphabetPosition(text) {
  let str = "-abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .match(/[a-z]/g)
    .map(x => str.indexOf(x))
    .join` `;
} */

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
