const repeatStr = (n, s) => s.repeat(n);

//Solution 2:
// const repeatStr = (n, s) => Array(n + 1).join(s);

//Solution 3:
// const repeatStr = (n, s) => Array(n).fill(s).join("");

// Solution 4:
//const repeatStr = (n, s) => [...Array(n)].map(i => s).join("");

// for loop solution:
/* const repeatStr = (n, s) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
};
*/

// console.log(repeatStr(3, "ha")); // --> "hahaha"
// console.log(repeatStr(6, "I")); // --> // "IIIIII"
