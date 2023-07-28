// Solution 1: map and reduce
function solve(arr) {
  return arr.map(word =>
    word.split("").reduce((count, char, i) => {
      return count + (char.toLowerCase().charCodeAt(0) - 97 === i);
    }, 0)
  );
}

/* 
// Solution 2: map and filter
function solve(arr) {
  return arr.map(
    word =>
      word
        .split("")
        .filter((char, i) => char.toLowerCase().charCodeAt(0) - 97 === i).length
  );
}
 */

// console.log(solve(["abode", "ABc", "xyzD"]));
// console.log(solve(["abode"])); // [4,3,1]);
// console.log(solve(["abide", "ABc", "xyz"])); // [4,3,0]);
// console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); // [6, 5, 7]);
// console.log(solve(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]);
