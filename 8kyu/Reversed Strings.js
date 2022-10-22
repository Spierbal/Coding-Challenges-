const solution = str => str.split("").reverse().join("");

// Solution 2:
/* function solution(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
 */

// Solution 3:
/* function solution(str) {
  let reversed = "";

  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
} */

// Solution 4:
/* const solution = str =>
  str.split("").reduce((reversed, char) => char + reversed, "");
 */

// console.log(solution("world")); // --> "dlrow"
