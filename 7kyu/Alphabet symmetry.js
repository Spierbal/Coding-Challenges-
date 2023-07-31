// Solution 1: map and reduce
const solve = words =>
  words.map(word =>
    word.split("").reduce((count, char, i) => {
      return count + (char.toLowerCase().charCodeAt(0) - 97 === i);
    }, 0)
  );

/* 
// Solution 2: map and filter
const solve = arr =>
  arr.map(x => {
    return x.split("").filter((c, i) => c.toLowerCase().charCodeAt() - 97 === i)
      .length;
  });
 */

/* 
// Solution 3: map and for loop
function solve(words) {
  return words.map(word => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase().charCodeAt(0) - "a".charCodeAt() === i) count++;
    }
    return count;
  });
} */

// console.log(solve(["abode", "ABc", "xyzD"])); // [4,3,1]);
// console.log(solve(["abide", "ABc", "xyz"])); // [4,3,0]);
// console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); // [6, 5, 7]);
// console.log(solve(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]);
