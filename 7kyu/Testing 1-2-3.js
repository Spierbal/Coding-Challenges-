const number = array => array.map((e, i) => `${i + 1}: ${e}`);

/* 
// Solution 2: map & array destructuring
const number = array => array.map((e, i) => [i + 1, e].join(": ")) */

/* 
// Solution 3: for loop
function number(array) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    res.push(`${i + 1}: ${char}`);
  }
  return res;
} */

// console.log(number([])); // [];
// console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"];
