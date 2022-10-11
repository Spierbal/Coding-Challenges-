const solution = str => str.split("").reverse().join("");

// Solution 2:
/* function solution(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
} */

// console.log(solution("world")); // --> "dlrow"
