const tripleTrouble = (one, two, three) =>
  [...one].map((_, i) => one[i] + two[i] + three[i]).join("");

// Solution 1b:
// const tripleTrouble = (one, two, three) =>
//   [...one].map((a, i) => `${a}${two[i]}${three[i]}`).join("");

// Solution 2:
/* const tripleTrouble = (one, two, three) =>
  [...one].reduce((a, _, i) => a + one[i] + two[i] + three[i], ""); */

// Solution 3:
/* const tripleTrouble = (one, two, three) =>
  one.replace(/./g, (value, i) => value + two[i] + three[i]); */

// Solution 4:
/* function tripleTrouble(one, two, three) {
  let str = "";

  for (let i = 0; i < one.length; i++) {
    str += one[i] + two[i] + three[i];
  }
  return str;
} */

// console.log(tripleTrouble("aaa", "bbb", "ccc")); // -->  "abcabcabc"
// console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc")); // --> "abcabcabcabcabcabc"
