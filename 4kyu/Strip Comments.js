const solution = (input, markers) =>
  input.replace(new RegExp(`\\s*[${markers.join("")}].+`, "g"), "");

// Solution 2:
// function solution(input, markers) {
//   return input
//     .split("\n")
//     .map(s => markers.reduce((a, b) => a.split(b)[0].trim(), s))
//     .join("\n");
// }

// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));
// //"Q
// //u
// //e"

// console.log(
//   solution("apples, plums % and bananas\npears\noranges !applesauce", [
//     "%",
//     "!",
//   ])
// );
/* "apples, plums
pears
oranges" */
